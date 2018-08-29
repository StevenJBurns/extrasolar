/* React and Redux Imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, setFilters } from "../../redux/actions";

/* Component Imports */
import { ListStars } from "../ui/ListStars.jsx";
// import { ListPlanets } from "../ui/ListPlanets.jsx";
// import InputRange from 'react-input-range';

/* Assets and Styles Imports */
import "../../styles/PageSolarSystems.css";
import "react-input-range/lib/css/index.css";
import AudioSolarSystems from '../../assets/audio/solarsystems.ogg';


export const PageSolarSystems = (props) => {
  const {changeAudioSource, stars, planets, isLoading, error} = props;

  changeAudioSource(AudioSolarSystems);

  return (
    <main id="main-solarsystems">
      <h1>Solar Systems</h1>
      <div id="div-filters">
        <div id="div-filter-stars">
          <h5 className="slider-label">Stellar Mass</h5>
          {/* <InputRange draggableTrack minValue={0} maxValue={25} step={0.001}
            value={this.props.starMass}
            onChange={this.handleSliderChange}
            onChangeComplete={value => this.filterStarsByMass(value)} /> */}
          <h5 className="slider-label">Stellar Radius</h5>
          {/* <InputRange /> */}
          <h5 className="slider-label">Stellar Temperature</h5>
          {/* <InputRange /> */}
        </div>
        <div id="div-filter-planets">
          <h5 className="slider-label">Planet Orbital Eccentricity</h5>
          {/* <InputRange draggableTrack minValue={0} maxValue={1} step={0.01}
              value={{min: 0.25, max: 0.75}}
              onChange={ value => this.setState({sliderPlanetEccMinMax: value})}
              onChangeComplete={value => this.filterPlanetsByEcc(value)} /> */}
          <h5 className="slider-label">Planetary Orbit Semi-Major Axis</h5>
          {/* <InputRange /> */}
          <h5 className="slider-label">Planetary Orbit Period</h5>
          {/* <InputRange /> */}
        </div>
      </div>
      <ListStars stars={stars} isloading={isLoading} error={error} />
    </main>
  );
}

const mapStateToProps = state => {
  const { stars, planets, isLoading, error } = state.data;
  
  return { stars, planets, isLoading, error };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilters: newFilter => dispatch(setFilters(newFilter)),
    changeAudioSource: audioSource => dispatch(changeAudioSource(audioSource))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);