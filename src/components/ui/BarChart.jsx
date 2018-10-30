/* React and D3js imports */
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
  const scaleY = D3.scalePow().exponent(0.5).domain([domainMin , domainMax]).range([0, 240]);
  const scaleAxisY = D3.scalePow().exponent(0.5).domain([domainMax, domainMin]).range([0, 240]);

  const svg = D3.select("#div-chart-categorical")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#E2E2E2")

  svg.selectAll("rect")
      .data(planetCounts)
      .enter()
      .append("rect")
      .attr("x", (d, i) => (scaleX(i) + 1) + 40)
      .attr("y", (d, i) => scaleY(d) > 4 ? (280 - scaleY(d)) : 276)
      .attr("width", 28)
      .attr("height", (d, i) => scaleY(d) < 4 ? d * 4 : scaleY(d))
      .attr("fill", "grey");        

  const xAxis = D3.axisBottom(scaleX).tickSize(8).tickValues([...planetOrdinals]).tickFormat(d => d);
  const yAxis = D3.axisLeft(scaleAxisY).tickSize(4).tickValues([100, 500, 1000, 1500, 2000]).tickFormat(d => d);
    
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(24, ${h - 40})`)
      .call(xAxis);

  svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(36, 40)`)
      .call(yAxis);

  svg.append("text")
      .attr("x", w / 2)
      .attr("y", 24)
      .style("font-size", "14px")
      .attr("text-anchor", "middle")
      .text("SUMMED CATEGORICAL PLANET COUNTS")

  return (<div id="div-chart-categorical"></div>);
};