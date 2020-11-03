import React, { Component } from 'react'
import '../App.css'
import { extent } from 'd3-array'
import { rgb } from 'd3-color'
import { Delaunay } from "d3-delaunay"
import { interpolateRgb } from 'd3-interpolate'
import { scaleLinear} from 'd3-scale'
import { select } from 'd3-selection'
import { transition } from 'd3-transition'
import loadedData from '../assets/data/voronoi.json'

class Voronoi extends Component {
  constructor(props){
    super(props)
    this.createVoronoi = this.createVoronoi.bind(this);
    this.drawVoronoi = this.drawVoronoi.bind(this);
    this.updateTooltip = this.updateTooltip.bind(this);
    this.state = {'svg':null
      ,'g':null
      ,'voronoi':null
      ,'pts':null
      ,'genreColor':null
      ,'corrColor':null
      ,'colorToggle':true
    };
  }
  componentDidMount() {
    this.createVoronoi();
    this.drawVoronoi();
  }
  createVoronoi() {
    const that = this;
    const node = this.node;

    const margin = {top: 75, right: 75, bottom: 75, left: 75};
    const width = this.props.size[0] - margin.left - margin.right;
    const height = this.props.size[1] - margin.top - margin.bottom;

    that.state.genreColor = loadedData.map(d => d.color);
    that.state.pts = loadedData.map(d => [d.tsneCoordinatesNormalized[0]*height,d.tsneCoordinatesNormalized[1]*width]);
    const xv = extent(that.state.pts.map(d => d[0]));
    const yv = extent(that.state.pts.map(d => d[1]));
    console.log(xv);

    const delaunay = Delaunay.from(that.state.pts);
    that.state.voronoi = delaunay.voronoi([xv[0],yv[0],xv[1],yv[1]]);

    that.state.svg = select(node)
         .attr("id","voronoi-svg")
         .attr("width", this.props.size[0])
         .attr("height", this.props.size[1])
         .append("g")
         .attr("transform", `translate(${margin.left},${margin.top})`);

    that.state.g = that.state.svg.append("g")
        .attr("id","voronoi-group");

    that.state.svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("d", that.state.voronoi.renderBounds());

    that.state.svg.append("path")
        .attr("d", delaunay.renderPoints(null, 1.5));
  }
  drawVoronoi(){
    const that = this;
    var color = this.state.genreColor;
    if(!this.state.colorToggle) color = this.state.corrColor;

    const cs = scaleLinear()
       .domain([0,0.25,0.5])
       .interpolate(interpolateRgb)
       .range([rgb('#cc0000'),rgb(249, 247, 174),rgb(0, 104, 55)])
       .clamp(true);

    this.state.g.selectAll("path")
      .data(this.state.pts)
      .join("path")
      .attr("d", (d, i) => this.state.voronoi.renderCell(i))
      .attr("stroke-width",3)
      .on("mouseover", function(d, i){
        if(that.state.colorToggle){
          select(this)
            .attr("fill","lightgray");
        }else{
          that.state.corrColor = loadedData[i].similarityMatrix.map(c => cs(c));
          that.drawVoronoi();
        }
        that.updateTooltip(loadedData[i]);
      })
      .on("mouseout", function(d,i){
        if(that.state.colorToggle){
          select(this)
            .attr("fill",that.state.genreColor[i]);
          that.state.svg.selectAll(".voronoi-tooltip")
            .style("visibility", "hidden")
        }
      })
      .on("click", function(d,i){
        that.state.corrColor = loadedData[i].similarityMatrix.map(c => cs(c));
        that.state.colorToggle = !that.state.colorToggle;
        that.drawVoronoi();
      })
      .transition()
      .duration(100)
      .attr("fill", (d, i) => color[i]);
  }
  updateTooltip(d){
    var tooltip = this.state.svg.selectAll(".voronoi-tooltip")
        .data([`${d.label}`,`${d.genres}`]);
    tooltip.style("visibility", "hidden")
        .attr("opacity",1)
        .text(d => d);
    tooltip.enter()
        .append("text")
        // .attr("class", "voronoi-tooltip tooltip")
        .attr("x","0")
        .attr("y",(d,i) => `${i-2}em`)
        .attr("opacity",1)
        .text(d => d);
  }
  render() {
    return (
      <div>
        <svg
          ref={node => this.node = node}
          width={this.props.size[0]}
          height={this.props.size[1]}>
        </svg>
      </div>
    )
  }
}
export default Voronoi
