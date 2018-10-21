/* React and D3 imports */
import React from 'react';
import * as D3 from "d3";

export const BarChart = (props) => {
  if (!props.planetData) return null;

  D3.select("#div-chart-categorical").selectAll("*").remove();

  const { planetData } = props;
  const w = 320, h = 320;
  const margin = { top: 8, bottom: 8, left: 16, right: 16 };

  const planetCounts = planetData.map((val) => val["count"]);
  const planetOrdinals = planetData.map((val) => val["planetCount"]);

  const domainMax = D3.max(planetCounts);
  const domainMin = D3.min(planetCounts);
  
  const scaleX = D3.scaleLinear().domain([0, D3.max(planetOrdinals) + 1]).range([0, 270]);
  const scaleAxisY = D3.scalePow().exponent(0.5).domain([domainMax, domainMin]).range([1, 280]);
  const scaleY = D3.scalePow().exponent(0.5).domain([domainMin , domainMax]).range([1, 240]);

  const svg = D3.select("#div-chart-categorical")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "lavender")

  svg.selectAll("rect")
      .data(planetCounts)
      .enter()
      .append("rect")
      .attr("x", (d, i) => (scaleX(i) + 1) + 40)
      .attr("y", (d, i) => scaleY(d) > 8 ? (280 - scaleY(d)) : 272)
      .attr("width", 28)
      .attr("height", (d, i) => scaleY(d) < 8 ? d * 8 : scaleY(d))
      .attr("fill", "grey");        

  const xAxis = D3.axisBottom(scaleX).tickSize(8).tickValues([...planetOrdinals]).tickFormat(d => d);
  const yAxis = D3.axisLeft(scaleAxisY).tickSize(8).tickValues([0, 1000, 2000, 3000]).tickFormat(d => d);
    
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(24, ${h - 40})`)
      .call(xAxis);

  svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(36, -6)`)
      .call(yAxis);

  return (<div id="div-chart-categorical"></div>);
};