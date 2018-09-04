/* React and Redux imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource } from "../../redux/actions";

/* Assets and Styles Imports */
import AudioData from '../../assets/audio/data.ogg';
import "../../styles/PageData.css";


const PageData = ({changeSource, stars, planets}) => {
  changeSource(AudioData);

  let setPlanetCount = new Set();
  let arrPlanetCount = [];

  if (stars) {
    stars.forEach((star) => setPlanetCount.add(star.pl_pnum));
    arrPlanetCount = [...setPlanetCount].sort().map((count, index) => ({"planetCount" : count, "count" : 0}))

    for (let size of arrPlanetCount) {
      for (let star of stars) {
        if (star.pl_pnum === size["planetCount"]) size["count"]++;
      }
    }
    console.log(arrPlanetCount);
  }

  return (
    <main id="main-data">
      <div id="div-content-wrapper">
        <h1>Data</h1>
        <hr></hr>
        <p>The available data from NASA comes from a SQL table view that combines star and planet data together. While this allows for compact and less-effort storage, the hierarchical or relationship of planets to stars is lost. Those relationships are rebuilt in JavaScript files of these web pages.</p>
        <p>Some exoplanet data is incomplete, as is the stellar data of their host stars. The aim of this simple web site is to visually plot and animate a rough estimation of the geometry and scale of these distant star systems. Without some of the variables, a section of stars and planets can not be plotted and therefore are not included in the snapshot of data used here.</p>
        <hr></hr>
        <p>Total Star Count: {stars ? stars.length : 0}</p>
        <p>Total Planet Count: {planets ? planets.length : 0}</p>
        <hr></hr>
        <table>
          <caption>Categorical Planet Counts</caption>
          <thead>
            <tr colSpan={2}>
              <th>Planet Count</th>
              <th># of Systems</th>
            </tr>
          </thead>
          <tbody>
            {
              arrPlanetCount.map(x => {
                return (<tr key={x["planetCount"]}>
                  <td>{x["planetCount"]}</td>
                  <td>{x["count"]}</td>
                </tr>)
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>Total Planets: {planets ? planets.length: 0}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}

const MapStateToProps = state => {
  const {stars, planets} = state.data
  
  return {
    stars, planets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSource: source => dispatch(changeAudioSource(source))
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(PageData);