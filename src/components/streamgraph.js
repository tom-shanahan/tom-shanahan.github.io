import React, { Component } from 'react'
import '../App.css'
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
import { transition } from 'd3-transition'
import loadedData from '../assets/data/StreamChartData.json'

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

        // Streamgraph starts here
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

        //prepare data
        const parseTime = timeParse('%m/%d/%y');
        function formatDate (d) {
            d.date = parseTime(d.date);
            d.current_cases = +d.current_cases;
        }
        loadedData.forEach(formatDate);

        const [layers, singleDayMax] = prepareData(loadedData)
        const yAxisBuffer = singleDayMax.toString().length*6;
        const activeWidth = width - yAxisBuffer;

        // axis
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

        // clipping paths
        that.svg.append('defs')
            .append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('width', activeWidth)
            .attr('height', height-10)
            .attr('x', 0)
            .attr('y', 0);

        // Draw the data
        that.streamArea = area()
            .curve(curveCardinal)
            .x(d => that.x(d.data.date));
        const blank = area()
            .curve(curveCardinal)
            .x(d => that.x(d.data.date))
            .y0(that.height-10)
            .y1(that.height-10);

        var countries = that.svg.selectAll(`.globalData`)
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
            var full = nestAndSort(loadedData);
            var short = nestAndSort(loadedData);

            //remove data
            var l = short.length;
            for(var j = 0; j < l; j++){
                var vals = short[j].values;
                var lv = vals.length;
                var step = Math.round(lv/40);
                while(lv-step > 0){
                    vals.splice(lv-step,step-1)
                    lv -= step;
                }
            }

            //populate gradients
            populateGradients(full);

            //order for
            var dailyValues = short.map(country => country.values);
            var zipped = zip(dailyValues);

            var stackKeys = zipped[0].map(country => country.key.replace(/[^A-Za-z]/g, ''));
            var singleDayMax = 0;

            var recombined = zipped.map(oneDay => {
                var dayDict = {};
                dayDict['date'] = oneDay[0].date;
                var sum = 0;
                oneDay.forEach(country => {
                    sum += country.current_cases;
                    dayDict[country.key.replace(/[^A-Za-z]/g, '')] = country.current_cases;
                })
                singleDayMax = Math.max(singleDayMax,sum);
                return dayDict;
            })

            var stacker = stack()
                .keys(stackKeys);
            var layers = stacker(recombined);

            for(var k = 0; k < l; k++){
                layers[k]['d'] = full[k]
            }

            return [layers, singleDayMax]
        }
        function nestAndSort(data){
            //manipulate data
            var nester = nest()
                .key(d => d.key);
            var alphabetic = nester.entries(data);
            var l = alphabetic.length;

            //order data
            for(var i = 0; i < l; i++){
                var vals = alphabetic[i].values;
                var lv = vals.length;
                var current = vals[lv-1];
                alphabetic[i].fatality_rate = current.fatality_rate;
                alphabetic[i].current = current.current_cases;
                alphabetic[i].index = i;
            }
            alphabetic.sort((a,b) => (a.current - b.current));
            return alphabetic;
        }
        function populateGradients(alphabetic){
            //add color gradients
            var l = alphabetic.length;
            for(var i = 0; i < l; i++){
                var id = `gradient-${alphabetic[i].key.replace(/[^A-Za-z]/g, '')}`;
                alphabetic[i].gradient = id;

                var defs = that.svg.append('defs');

                var gradient = defs.append('linearGradient')
                    .attr('id', id)
                    .attr('x1', '0%')
                    .attr('x2', '100%')
                    .attr('y1', '0%')
                    .attr('y2', '0%');

                var values = alphabetic[i].values;
                var lv = alphabetic[i].values.length;

                for(var j = 0; j < lv; j++){
                    var offset = `${Math.round(j*100/(lv-1))}%`;
                    var fr = values[j].fatality_rate/0.1;
                    var col = that.cs(1-fr); //d3.interpolateRdYlGn(1-fr);

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
        var y = this.state.yLinear;
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
        var defs = this.state.svg.append('defs');

        var gradient = defs.append('linearGradient')
            .attr('id', 'legend-grad')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');

        for(var i = 0; i <= 10; i++){
            gradient.append('stop')
                .attr('offset', `${i*10}%`)
                .attr('stop-color', this.state.cs(1-i/10)) // d3.interpolateRdYlGn(1-i/10))
                .attr('stop-opacity', 1);
        }

        var legend = this.state.svg.append('g')
            .attr('id','legend')
            .attr('transform', `translate(${(this.state.width/2)-150},${this.state.height+65})`)
        legend.append('rect')
            .attr('width',300)
            .attr('height',15)
            .attr('fill', 'url(#legend-grad)');
        legend.append('text')
            // .attr('text-anchor', 'top middle')
            // .attr('transform', 'translate('+ -10 +','+10+')')
            // .attr('margin-top','44px')
            // .attr('display','flex')
            // .attr('justify-content','center')
            .attr('font-size','20px')
            // .attr("alignment-baseline","middle")
            // .attr("text-anchor", "left")
            // .attr('data-style-padding','55px')
            .style('text-anchor', 'right')
            .text('Case Fatality Rate');

        var lScale = scaleLinear()
            .range([0, 300])
            .domain([0.0,0.1]);

        var lAxis = axisBottom(lScale)
            .tickSize(18,0)
            .tickFormat(format('.1%'));

        var l2 = this.state.svg.append('g')
            .attr('class', 'legend-axis axis')
            .attr('transform', `translate(${(this.state.width/2)-150},${this.state.height+65})`)
            .call(lAxis);

        l2.selectAll('path')
            .remove();
    }
    onMouseMove(e) {
        this.setState({'mouseX':e.nativeEvent.offsetX});
    }
    updateTooltip(country) {
        var date = roundDate(this.state.x.invert(this.state.mouseX - this.state.margin.left));
        var val;
        country.d.values.forEach(el => {
            if(el.date.getTime() === date.getTime()){
                val = el;
            }
        })

        var current = format(',')(val.current_cases);
        var deaths = format(',')(val.deaths);
        var recoveries = format(',')(val.recovered);
        var fatality_rate = format('.1%')(val.fatality_rate);
        var day = timeFormat('%m/%d/%y')(val.date);
        var n = country.d.key;

        var tooltip = this.state.svg.selectAll('.stream-tooltip')
            .data([n,day,`est. cases: ${current}`,`deaths: ${deaths}`,`recoveries: ${recoveries}`,`CFR: ${fatality_rate}`]);
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
            var d = new Date(timeStamp);
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
                <div style={{'alignContent':'top right','margin':'5px'}}>
                    <button
                        // className='axis-toggle'
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
export default StreamGraph
