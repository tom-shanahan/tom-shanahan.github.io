import React, { Component } from 'react'
import '../App.css'
import { extent } from 'd3-array'
import { axisBottom, axisRight } from 'd3-axis'
import { nest } from 'd3-collection'
import { format } from 'd3-format'
import { scaleLinear, scaleTime } from 'd3-scale'
import { select } from 'd3-selection'
import { area, curveBasis } from 'd3-shape'
import {timeMonth, timeWeek} from 'd3-time'
import { timeParse } from 'd3-time-format'
import { transition } from 'd3-transition'
import loadedData from '../assets/data/area_bump.json'

export default class AreaBump extends Component {
  constructor(props){
      super(props);
      this.createAreaBump = this.createAreaBump.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.drawData = this.drawData.bind(this);
      this.updateBumpTooltip = this.updateBumpTooltip.bind(this);
      this.toggleType = this.toggleType.bind(this);
      this.toggleLocation = this.toggleLocation.bind(this);
      this.state = {
        'svg':null
        ,'margin':null
        ,'x':null
        ,'bumpArea':null
        ,'blank':null
        ,'colors':null
        ,'mouseX':null
        ,'showCases':true
        ,'showGlobal':true
      };
  }

  componentDidMount() {
      this.createAreaBump();
      this.drawData();
  }

  createAreaBump() {
    const node = this.node;
    const that = this.state;
    that.colors = {
    "Korea, South":"darkred"
    ,"China":"pink"
    ,"US":"blue"
    ,"United Kingdom":"orange"
    ,"France":"lightblue"
    ,"Germany":"yellow"
    ,"Italy":"tan"
    ,"Spain":"purple"
    ,"Switzerland":"violet"
    ,"Iran":"green"
    ,"Netherlands":"cyan"
    ,"Austria":"teal"
    ,"Belgium":"brown"
    ,"All Other":"lightgray"
    ,"India":"orange"
    };

    that.margin = {top: 10, right: 75, bottom: 30, left: 20};
    const width = 750 - that.margin.left - that.margin.right;
    const height = 500 - that.margin.top - that.margin.bottom;

    that.svg = select(node)
      .attr("id","bump-svg")
      .attr("width", width + that.margin.left + that.margin.right)
      .attr("height", height + that.margin.top + that.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + that.margin.left + "," + that.margin.top + ")");

    // axis
    that.x = scaleTime()
      .domain(extent(loadedData['confirmed_global'], d => timeParse("%m/%d/%y")(d[0].date)))
      .range([0, width])
      .clamp(true);

    const xAxis = axisBottom()
      .scale(that.x)
      .ticks(timeMonth);

    that.svg.append("g")
      .attr("class", "x-bump axis")
      .attr("transform", `translate(0,${height-5})`)
      .transition("axis")
      .duration(1000)
      .call(xAxis);

    const y = scaleLinear()
      .domain([0,1])
      .range([height-10, 0]);

    const yAxis = axisRight()
      .scale(y)
      .tickFormat(format(".0%"));

    that.svg.append("g")
        .attr("class", "y-bump axis")
        .attr("transform", `translate(${width+10}, 0)`)
        .transition("axis")
        .duration(1000)
        .call(yAxis);

    // clipping paths
    that.svg.append("defs")
      .append("clipPath")
      .attr("id","clip-bump")
      .append("rect")
      .attr("width", width)
      .attr("height", height-10)
      .attr("x",0)
      .attr("y",0);

    that.bumpArea = area()
      .curve(curveBasis)
      .x(d => that.x(d.formattedDate))
      .y0(d => y(d.y0))
      .y1(d => y(d.y0 + d.y));

    that.blank = area()
      .curve(curveBasis)
      .x(d => that.x(d.formattedDate))
      .y0(d => height-10)
      .y1(d => height-10);
  }

  toggleType() {
    this.setState((prevState) => {
      return {showCases:!prevState.showCases}
    });
  }

  toggleLocation() {
    this.setState((prevState) => {
      return {showGlobal:!prevState.showGlobal}
    });
  }

  drawData() {
    this.toggleType();
    const that = this;
    const layers = prepareData(loadedData,this.state.showCases,this.state.showGlobal);
    var countries = this.state.svg.selectAll(`.areaBumpLayers`)
      .data(layers, d => d.key);

    countries.transition()
      .duration(1000)
      .attr("d", d => {
        return this.state.bumpArea(d.values);
      });

    countries.enter()
      .append("path")
      .attr("class", `layer-bump areaBumpLayers`)
      .on("mousemove", d => this.updateBumpTooltip(d))
      .on("mouseout", d => this.state.svg.selectAll(".bump-tooltip").style("visibility", "hidden"))
      .attr("fill", (d,i) => this.state.colors[d.key] ? this.state.colors[d.key] : hashStringToColor(d.key))
      .attr("stroke","black")
      .attr("d", d => this.state.blank(d.values))
      .transition("load")
      .duration(1000)
      .attr("d", d => {
        return this.state.bumpArea(d.values);
      })
      .attr("opacity", 1);

    countries.exit()
      .transition()
      .duration(1000)
      .attr("d", d => this.state.blank(d.values))
      .remove();

    function prepareData(input,casesState,locationState){
      //find a y and y0 for each data point
      var dataSelection = ""
      if(casesState) {
        dataSelection = 'confirmed_'
      }
      else {
        dataSelection = 'deaths_'
      }
      if(locationState) {
        dataSelection += 'global'
      }
      else {
        dataSelection += 'US'
      }
      console.log(dataSelection)
      var data = input[dataSelection]
      var total_days = data.length;
      var flat = [];
      for(var i = 0; i < total_days; i++){
        var sum = 0;
        var padding = 0;
        var place = data[i].length;
        while(place--){
          data[i][place]["formattedDate"] = timeParse("%m/%d/%y")(data[i][place]["date"]);
          data[i][place]["y0"] = sum;
          data[i][place]["y"] = data[i][place]["pct"];
          flat.push(data[i][place]);
          sum += data[i][place]["pct"] + padding;
        }
      }

      var nester = nest()
        .key(d => d.location);
      var layers = nester.entries(flat);
      layers = layers.sort(
          (a,b) => b.values[b.values.length-1].rank - a.values[a.values.length-1].rank
      );
      return layers;
    }

    function djb2(str){
      var hash = 5381;
      for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
      }
      return hash;
    }

    function hashStringToColor(str) {
      var hash = djb2(str);
      var r = (hash & 0xFF0000) >> 16;
      var g = (hash & 0x00FF00) >> 8;
      var b = hash & 0x0000FF;
      return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
    }
  }

  // generates data when mouse on chart
  updateBumpTooltip(d){
    var date = roundDate(this.state.x.invert(this.state.mouseX - this.state.margin.left));
    var val = d.values[d.values.length-1];
    d.values.forEach(el => {
      if(el.formattedDate.getTime() === date.getTime()){
        val = el;
      }
    })

    var current = format(",")(val.count)
    var pct = format(".0%")(val.pct)
    var day = val.date
    var n = d.key;

    const tooltip = this.state.svg.selectAll(".bump-tooltip")
      .data([n,`date: ${day}`,`count: ${current}`,`% of daily global: ${pct}`]);
    tooltip.style("visibility", "visible")
      .text(d => d);
    tooltip.enter()
      .append("text")
      .attr("class", "bump-tooltip")
      .attr("x","10")
      .attr("y",(d,i) => `${2+i}em`)
      .attr("font-weight", (d,i) => i === 0 ? "bold" : "normal")
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

  // updates data as mouse moved across chart
  onMouseMove(e) {
    this.setState({'mouseX':e.nativeEvent.offsetX});
  }

  render() {
    let buttonTitle = "View Fatality Data";
    let chartTitle = "Share of Global COVID-19 Cases by Country";
    if (this.state.showCases) {
      buttonTitle = "View Case Data";
      chartTitle = "Share of Global COVID-19 Deaths by Country"
    }

    return (
      <div className= 'viz-container'>
        <p className='viz-title' id='chart-title'>{chartTitle}</p>
        <svg
            onMouseMove={this.onMouseMove}
            ref={node => this.node = node}
            width={this.props.size[0]}
            height={this.props.size[1]}>
        </svg>
        <div className='button-container'>
          <button
              className='card-button chart-toggle'
              onClick={() => {
                this.drawData();
              }}>
            {buttonTitle}
          </button>
        </div>
      </div>
    );
  }
}
