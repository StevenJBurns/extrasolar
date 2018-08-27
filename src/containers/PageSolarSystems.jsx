/* React and Redux imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, getLastFetch, fetchPlanetData } from "../redux/actions";

/* Component Imports */
import { ListStars } from "../components/ulStarList";
import { ListPlanets } from "../components/ulPlanetList";
import InputRange from 'react-input-range';

/* Assets and Styles Imports */
import "../styles/PageSolarSystems.css";
import AudioSolarSystems from '../assets/audio/solarsystems.ogg';
import "react-input-range/lib/css/index.css";


class PageSolarSystems extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sliderValueTeff: 10,
      sliderMassMinMax: {min: 4, max: 12},
      massLimit: 78,
      filteredPlanets: [],
      planets: [
        { name: "Mercury", mass: 0.0553 },
        { name: "Venus", mass: 0.815 },
        { name: "Earth", mass: 1.000 },
        { name: "Mars", mass: 0.107 },
        // { name: "Jupiter", mass: 317.8 },
        // { name: "Saturn", mass: 95.2 },
        { name: "Uranus", mass: 14.5 },
        { name: "Neptune", mass: 17.1 },
        { name: "Pluto", mass: 0.0025 }
      ]
    };
  }

  componentDidMount() {
    changeAudioSource(AudioSolarSystems);
    this.setState({filteredPlanets: this.state.planets})
  }

  filterPlanetsByMass(val) {    
    let filteredPlanets = this.state.planets.filter(planet => planet.mass <= val.max && planet.mass >= val.min)

    this.setState({filteredPlanets})
  }

  render() {
    const { lastFetch, stars, planets } = this.props;

    return (
      <main id="main-solarsystems" style={{color: '#DFDFDF'}}>
        <h1>Solar Systems</h1>
        <h3>Last Fetch: { new Date(lastFetch).toString() } </h3>
        <div id="div-filters" style={{ background: '#7f7f7f', padding: 24 + 'px'}}>
          <div id="div-filter-stars" style={{ width: 50+"%", margin: "0 auto"}}>
            <InputRange draggableTrack
              minValue={0}
              maxValue={20}
              step={0.1}
              value={this.state.sliderMassMinMax}
              onChange={ value => this.setState({sliderMassMinMax: value})}
              onChangeComplete={value => this.filterPlanetsByMass(value)} />
          </div>
          <div id="div-filter-planets">
          </div>
        </div>
        <ListStars stars={ [] } />
        {/* <ListPlanets planets={this.state.planets} /> */}
        <ul>
          { this.state.filteredPlanets.map(planet => (<li key={Math.random().toString()}>{planet.name} : {planet.mass}</li>)) }
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