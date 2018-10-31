/* React and D3 Imports */
import React from "react";
import * as D3 from "d3";


export const StarsPieChart = (props) => {
  if (!props.starData) return null;

  D3.select("#div-chart-circumbinaries").selectAll("*").remove();

  const { starData } = props;
  const w = 320, h = 320, r = 120;
  const margin = { top: 8, bottom: 8, left: 8, right: 8 };

  const dataCircumbinaries = [
    { group: "nonBinary", count: 0 },
    { group: "binary", count: 0 },
    { group: "unknown", count: 0 }
  ];

  if (props.starData) starData.forEach(star => {
    switch (star["pl_cbflag"]) {
      case 0:
      dataCircumbinaries[0]["count"]++;
        break;
      case 1:
      dataCircumbinaries[1]["count"]++;
        break;
      default:
        dataCircumbinaries[2]["count"]++;
        break;
    }
  })

  console.log(dataCircumbinaries)

  return (<div id="div-chart-circumbinaries"></div>);
};