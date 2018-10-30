/* React and D3 Imports */
import React from "react";
import * as D3 from "d3";


export const StarsPieChart = (props) => {
  if (!props.starData) return null;

  D3.select("#div-chart-circumbinaries").selectAll("*").remove();

  const { starData } = props;
  const w = 320, h = 320;
  const margin = { top: 8, bottom: 8, left: 8, right: 8 };

  const dataCircumbinaries = {
    nonBinary: 0,
    binary: 0,
    unknown: 0
  };


  return (<div id="div-chart-circumbinaries"></div>);
};