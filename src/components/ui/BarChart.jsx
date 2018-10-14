/* React and D3 imports */
import React from 'react';
import * as D3 from "d3";

export const BarChart = (props) => {
  const { data } = props;

  const svg = D3.select("#section-chart-categorical")
                .append("svg")
                .attr("width", 320)
                .attr("height", 320);  

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 28)
      .attr("y", (d, i) => d)
      .attr("width", 20)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "navy");

  return (
    <React.Fragment />
  );
};