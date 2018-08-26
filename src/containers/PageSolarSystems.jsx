/* React and Redux imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, getLastFetch, fetchPlanetData } from "../redux/actions";

/* Component Imports */
import { ListStars } from "../components/ulStarList";
import { ListPlanets } from "../components/ulPlanetList";

/* Assets and Styles Imports */
import "../styles/PageSolarSystems.css";
import AudioSolarSystems from '../assets/audio/solarsystems.ogg';


class PageSolarSystems extends React.Component {

  componentDidMount() {
    changeAudioSource(AudioSolarSystems);  
  }

  render() {
    const { lastFetch, stars, planets } = this.props;

    return (
      <main id="main-solarsystems" style={{color: '#DFDFDF'}}>
        <h1>Solar Systems</h1>
        <h3>Last Fetch: { new Date(lastFetch).toString() } </h3>
        <div id="div-filters" style={{ background: '#7f7f7f', padding: 24 + 'px'}}>
          <div id="div-filter-stars">
            <input type="range" />
          </div>
          <div id="div-filter-planets">
            <input type="range" />
          </div>
        </div>
        <ListStars stars={stars} />
        <ListPlanets planets={planets} />
        <ul>
          { planets.map(planet => (<li key={Math.random()}>{planet}</li>)) }
        </ul>
      </main>
    );
  };
}

const mapStateToProps = state => {
  const { lastFetch, planets } = state.reducerData;
  const { stars } = state.reducerStars;
  return { lastFetch, stars, planets };
};

const mapDispatchToProps = dispatch => {
  return {
    getLastFetch: () => dispatch(getLastFetch()),
    fetchPlanets: urlPlanets => dispatch(fetchPlanetData(urlPlanets)),
    changeSource: source => dispatch(changeAudioSource(source))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);