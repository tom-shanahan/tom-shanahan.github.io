import React, { Component } from 'react'
import '../../App.css'
import { extent } from 'd3-array'
import { axisBottom, axisRight } from 'd3-axis'
import { nest } from 'd3-collection'
import { rgb } from 'd3-color'
import { format } from 'd3-format'
import { interpolateRgb } from 'd3-interpolate'
import { scaleLinear, scaleLog, scaleTime } from 'd3-scale'
import { select } from 'd3-selection'
import { area, curveCardinal, stack } from 'd3-shape'
import {timeMonth, timeWeek} from 'd3-time'
import { timeFormat, timeParse } from 'd3-time-format'
import loadedData from '../../assets/data/StreamChartData.json'

class StreamGraph extends Component {
    constructor(props){
        super(props)
        this.createStreamGraph = this.createStreamGraph.bind(this);
        this.drawScale = this.drawScale.bind(this);
        this.drawLegend = this.drawLegend.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.updateTooltip = this.updateTooltip.bind(this);
        this.state = {'logScale':true
            ,'margin':null
            ,'width':null
            ,'height':null
            ,'svg':null
            ,'yLog':null
            ,'yLinear':null
            ,'yAxis':null
            ,'xAxis':null
            ,'cs':null
            ,'streamArea':null
            ,'mouseX':0
        };
    }
    componentDidMount() {
        this.createStreamGraph();
        this.drawScale();
        this.drawLegend();
    }
    componentDidUpdate() {
    }
    createStreamGraph() {
        const node = this.node;
        const that = this.state;

        const margin = {top: 20, right: 50, bottom: 100, left: 30};
        const width = this.props.size[0] - margin.left - margin.right;
        const height = this.props.size[1] - margin.top - margin.bottom;
        that.margin = margin;
        that.height = height;
        that.width = width;

        that.svg = select(node)
            .attr('id','stream-svg')
            .attr('width', this.props.size[0])
            .attr('height', this.props.size[1])
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        that.cs = scaleLinear()
            .domain([0,0.5,1])
            .interpolate(interpolateRgb)
            .range([rgb('#cc0000'),rgb('#f9f7ae'),rgb('#006837')]);

        const parseTime = timeParse('%m/%d/%y');
        function formatDate (d) {
            d.date = parseTime(d.date);
            d.current_cases = +d.current_cases;
        }
        loadedData.forEach(formatDate);

        const [layers, singleDayMax] = prepareData(loadedData)
        const yAxisBuffer = singleDayMax.toString().length*6;
        const activeWidth = width - yAxisBuffer;

        that.x = scaleTime()
            .domain(extent(loadedData, d => d.date))
            .range([0, activeWidth])
            .clamp(true);

        that.xAxis = axisBottom(that.x)
            .ticks(timeMonth);

        that.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0,${height})`);

        that.yLog = scaleLog()
            .range([height-10, 0])
            .domain([singleDayMax/200,singleDayMax])
            .clamp(true);

        that.yLinear = scaleLinear()
            .range([height-10, 0])
            .domain([0,singleDayMax])
            .clamp(true);

        that.yAxis = axisRight()
            .tickFormat(format(','));

        that.svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${activeWidth + 10}, 0)`);

        that.svg.append('defs')
            .append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('width', activeWidth)
            .attr('height', height-10)
            .attr('x', 0)
            .attr('y', 0);

        that.streamArea = area()
            .curve(curveCardinal)
            .x(d => that.x(d.data.date));
        const blank = area()
            .curve(curveCardinal)
            .x(d => that.x(d.data.date))
            .y0(that.height-10)
            .y1(that.height-10);

        const countries = that.svg.selectAll(`.globalData`)
            .data(layers);

        countries.enter()
            .append('path')
            .attr('class', `layer globalData`)
            .attr('d', d => blank(d))
            .on('mousemove', d => this.updateTooltip(d))
            .on('mouseout', function(d, i) {
                that.svg.selectAll('.stream-tooltip').style('visibility', 'hidden');
            })
            .attr('fill', d => {return `url(#gradient-${d.key.replace(/[^A-Za-z]/g, '')})`})
            .attr('clip-path','url(#clip)')
            .attr('opacity', 1);

        function prepareData(loadedData){
            const full = nestAndSort(loadedData);
            const short = nestAndSort(loadedData);

            const l = short.length;
            for(let j = 0; j < l; j++){
                const vals = short[j].values;
                let lv = vals.length;
                const step = Math.round(lv / 40);
                while(lv-step > 0){
                    vals.splice(lv-step,step-1)
                    lv -= step;
                }
            }

            populateGradients(full);

            const dailyValues = short.map(country => country.values);
            const zipped = zip(dailyValues);
            const stackKeys = zipped[0].map(country => country.key.replace(/[^A-Za-z]/g, ''));
            let singleDayMax = 0;

            const recombined = zipped.map(oneDay => {
                const dayDict = {};
                dayDict['date'] = oneDay[0].date;
                let sum = 0;
                oneDay.forEach(country => {
                    sum += country.current_cases;
                    dayDict[country.key.replace(/[^A-Za-z]/g, '')] = country.current_cases;
                })
                singleDayMax = Math.max(singleDayMax, sum);
                return dayDict;
            });

            const stacker = stack()
                .keys(stackKeys);
            const layers = stacker(recombined);

            for(let k = 0; k < l; k++){
                layers[k]['d'] = full[k]
            }

            return [layers, singleDayMax]
        }
        function nestAndSort(data){
            //manipulate data
            const nester = nest()
                .key(d => d.key);
            const alphabetic = nester.entries(data);
            const l = alphabetic.length;

            //order data
            for(let i = 0; i < l; i++){
                const vals = alphabetic[i].values;
                const lv = vals.length;
                const current = vals[lv - 1];
                alphabetic[i].fatality_rate = current.fatality_rate;
                alphabetic[i].current = current.current_cases;
                alphabetic[i].index = i;
            }
            alphabetic.sort((a,b) => (a.current - b.current));
            return alphabetic;
        }
        function populateGradients(alphabetic){
            //add color gradients
            const l = alphabetic.length;
            for(let i = 0; i < l; i++){
                const id = `gradient-${alphabetic[i].key.replace(/[^A-Za-z]/g, '')}`;
                alphabetic[i].gradient = id;

                const defs = that.svg.append('defs');

                const gradient = defs.append('linearGradient')
                    .attr('id', id)
                    .attr('x1', '0%')
                    .attr('x2', '100%')
                    .attr('y1', '0%')
                    .attr('y2', '0%');

                const values = alphabetic[i].values;
                const lv = alphabetic[i].values.length;

                for(let j = 0; j < lv; j++){
                    const offset = `${Math.round(j * 100 / (lv - 1))}%`;
                    const fr = values[j].fatality_rate / 0.1;
                    const col = that.cs(1 - fr); //d3.interpolateRdYlGn(1-fr);

                    gradient.append('stop')
                        .attr('offset', offset)
                        .attr('stop-color', col)
                        .attr('stop-opacity', 1);
                }
            }
        }
        function zip(arrays) {
            return arrays[0].map((_,i) => arrays.map(array => array[i]));
        }
    }
    drawScale(){
        this.setState({'logScale': !this.state.logScale})
        let y = this.state.yLinear;
        if(this.state.logScale) y = this.state.yLog;
        this.state.yAxis.scale(y);

        this.state.svg.selectAll('.y')
            .transition('axis')
            .duration(1000)
            .call(this.state.yAxis);

        this.state.svg.selectAll('.x')
            .transition('axis')
            .duration(1000)
            .call(this.state.xAxis);

        this.state.streamArea.y0(d => y(d[0]+1))
            .y1(d => y(d[1]+1));

        this.state.svg.selectAll('.layer')
            .transition('axis')
            .duration(1000)
            .attr('d', d => this.state.streamArea(d))
    }
    drawLegend() {
        const defs = this.state.svg.append('defs');

        const gradient = defs.append('linearGradient')
            .attr('id', 'legend-grad')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');

        for(let i = 0; i <= 10; i++){
            gradient.append('stop')
                .attr('offset', `${i*10}%`)
                .attr('stop-color', this.state.cs(1-i/10)) // d3.interpolateRdYlGn(1-i/10))
                .attr('stop-opacity', 1);
        }

        const legend = this.state.svg.append('g')
            .attr('id', 'legend')
            .attr('transform', `translate(${(this.state.width / 2) - 150},${this.state.height + 65})`);
        legend.append('rect')
            .attr('width',300)
            .attr('height',15)
            .attr('fill', 'url(#legend-grad)');
        legend.append('text')
            .attr('font-size','16px')
            .attr("x", 75)
            .attr('width',300)
            .text('Case Fatality Rate');

        const lScale = scaleLinear()
            .range([0, 300])
            .domain([0.0, 0.1]);

        const lAxis = axisBottom(lScale)
            .tickSize(18, 0)
            .tickFormat(format('.1%'));

        const l2 = this.state.svg.append('g')
            .attr('class', 'legend-axis axis')
            .attr('transform', `translate(${(this.state.width / 2) - 150},${this.state.height + 65})`)
            .call(lAxis);

        l2.selectAll('path')
            .remove();
    }
    onMouseMove(e) {
        this.setState({'mouseX':e.nativeEvent.offsetX});
    }
    updateTooltip(country) {
        const date = roundDate(this.state.x.invert(this.state.mouseX - this.state.margin.left));
        let val;
        country.d.values.forEach(el => {
            if(el.date.getTime() === date.getTime()){
                val = el;
            }
        })

        const current = format(',')(val.current_cases);
        const deaths = format(',')(val.deaths);
        const recoveries = format(',')(val.recovered);
        const fatality_rate = format('.1%')(val.fatality_rate);
        const day = timeFormat('%m/%d/%y')(val.date);
        const n = country.d.key;

        const tooltip = this.state.svg.selectAll('.stream-tooltip')
            .data([n, day, `current cases: ${current}`, `deaths: ${deaths}`, `recoveries: ${recoveries}`, `CFR: ${fatality_rate}`]);
        tooltip.style('visibility', 'visible')
            .attr('opacity',1)
            .text(d => d);
        tooltip.enter()
            .append('text')
            .attr('class', 'stream-tooltip')
            .attr('x','0')
            .attr('y',(d,i) => `${i}em`)
            .attr('font-weight', (d,i) => i === 0 ? 'bold' : 'normal')
            .attr('opacity',1)
            .text(d => d);

        function roundDate(timeStamp){
            const d = new Date(timeStamp);
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            return d;
        }
    }
    render() {
        return (
            <div>
                <div style={{'display':'flex', 'alignContent': 'top center'}}>
                    <button
                        className="card-button axis-toggle"
                        onClick={this.drawScale}>
                        Toggle Y-Axis Scale
                    </button>
                </div>
                <svg
                    onMouseMove={this.onMouseMove}
                    ref={node => this.node = node}
                    width={this.props.size[0]}
                    height={this.props.size[1]}>
                </svg>
            </div>
        )
    }
}

export default StreamGraph;
