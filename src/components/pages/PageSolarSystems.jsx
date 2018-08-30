/* React and Redux Imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, changeFilters } from "../../redux/actions";

/* Component Imports */
import { ListStars } from "../ui/ListStars.jsx";
// import { ListPlanets } from "../ui/ListPlanets.jsx";
import InputRange from 'react-input-range';

/* Assets and Styles Imports */
import "../../styles/PageSolarSystems.css";
import "react-input-range/lib/css/index.css";
import AudioSolarSystems from '../../assets/audio/solarsystems.ogg';


const PageSolarSystems = (props) => {
  const {changeAudioSource, stars, planets, isLoading, error, changeFilters, planetCount} = props;
  changeAudioSource(AudioSolarSystems);

  let filteredStars = stars ? stars.filter(star => star.pl_pnum <= planetCount.max && star.pl_pnum >= planetCount.min) : [];

  return (
    <main id="main-solarsystems">
      <div id="div-filters">
        <div id="div-filter-stars">
          <h5 className="slider-label">Planet Count</h5>
          <InputRange draggableTrack allowSameValues
            minValue={1} maxValue={8} step={1}
            value={planetCount}
            onChange={value => changeFilters(value)}
            onChangeComplete={value => changeFilters(value)} />
          <h5 className="slider-label">Binary Star?</h5>
          <h5 className="slider-label">Stellar Mass</h5>
          {/* <InputRange draggableTrack minValue={0} maxValue={25} step={0.001}
            value={{min: 4, max: 17}}
            onChange={value => changeFilters(value)}
            onChangeComplete={value => changeFilters(value)} /> */}
          <h5 className="slider-label">Stellar Radius</h5>
          {/* <InputRange /> */}
          <h5 className="slider-label">Stellar Temperature</h5>
          {/* <InputRange /> */}
        </div>
        <div id="div-filter-planets">
          <h5 className="slider-label">Planet Orbital Eccentricity</h5>
          {/* <InputRange draggableTrack minValue={0} maxValue={1} step={0.01}
              value={{min: 0.25, max: 0.75}}
              onChange={value => changeFilters(value)}
              onChangeComplete={value => changeFilters(value)} /> */}
          <h5 className="slider-label">Planetary Orbit Semi-Major Axis</h5>
          {/* <InputRange /> */}
          <h5 className="slider-label">Planetary Orbit Period</h5>
          {/* <InputRange /> */}
        </div>
      </div>
      <ListStars stars={filteredStars} isloading={isLoading} error={error} />
    </main>
  );
}

const mapStateToProps = state => {
  const { stars, planets, isLoading, error } = state.data;
  const { planetCount } = state.filters;  
  return { stars, planets, isLoading, error, planetCount };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilters: newFilter => dispatch(changeFilters(newFilter)),
    changeAudioSource: audioSource => dispatch(changeAudioSource(audioSource))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);