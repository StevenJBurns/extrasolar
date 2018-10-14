/* React and D3 imports */
import React from 'react';
import * as D3 from "d3";

export const BarChart = (props) => {
  if (!props.planetData) return null;

  D3.select("#div-chart-categorical").selectAll("*").remove();

  const { planetData } = props;
  const w = 320, h = 320;

  const planetCounts = planetData.map((val) => val["count"]);

  const domainMax = D3.max(planetCounts);
  const domainMin = D3.min(planetCounts);
  
  const chartScaleLinear = D3.scaleLinear();
  const chartScaleSPow = D3.scalePow().exponent(0.5).domain([domainMin , domainMax]).range([1, 240]);

  // const axisX;
  // const axisy;

  const div = D3.select("#div-chart-categorical")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  div.selectAll("rect")
      .data(planetCounts)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 28)
      .attr("y", (d, i) => chartScaleSPow(d) > 8 ? (280 - chartScaleSPow(d)) : 272)
      .attr("width", 24)
      .attr("height", (d, i) => chartScaleSPow(d) < 8 ? d * 8 : chartScaleSPow(d))
      .attr("fill", "grey");

  return (<div id="div-chart-categorical"></div>);
};