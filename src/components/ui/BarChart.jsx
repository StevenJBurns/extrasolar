/* React and D3 imports */
import React from 'react';
import * as D3 from "d3";

export const BarChart = (props) => {
  const { planetData } = props;
  const w = 320, h = 320;

  if (!planetData) return null;

  const planetCounts = planetData.map((val) => val["count"]);
  let svg = D3.select("#div-chart-categorical")
  
  svg.selectAll("*").remove();

  svg = D3.select("#div-chart-categorical")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

  svg.selectAll("rect")
      .data(planetCounts)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 28)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 20)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "navy");

  return (
    <div id="div-chart-categorical"></div>
  );
};