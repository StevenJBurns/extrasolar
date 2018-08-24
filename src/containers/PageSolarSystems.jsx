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


class PageSolarSystems extends React.Component { // ({changeSource, lastFetch, stars, planets}) => {

  componentDidMount() {
    changeAudioSource(AudioSolarSystems);  
  }

  render() {
    const { lastFetch, stars, planets } = this.props;

    return (
      <main id="main-solarsystems" style={{color: '#DFDFDF'}}>
        <h1>Solar Systems</h1>
        <h3>Last Fetch: { new Date(lastFetch).toString() } </h3>
        <ListStars star={stars} />
        <ListPlanets planets={planets} />
        <ul>
          { planets.map(planet => (<li key={Math.random()}>{planet}</li>)) }
        </ul>
      </main>
    );
  };
}

const mapStateToProps = state => {
  const { lastFetch, stars, planets } = state.reducerData;
  return { lastFetch, stars, planets };
};

const mapDispatchToProps = dispatch => {
  return {
    getLastFetch: () => dispatch(getLastFetch()),
    // fetchStars: urlStars => dispatch(fetchStarData()),
    fetchPlanets: urlPlanets => dispatch(fetchPlanetData(urlPlanets)),
    changeSource: source => dispatch(changeAudioSource(source))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);