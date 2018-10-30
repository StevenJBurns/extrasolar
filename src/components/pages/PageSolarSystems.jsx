/* React and Redux Imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, changeFilters, changeSelectedSystem } from "../../redux/actions";

/* Component Imports */
import CanvasComponent from "../ui/CanvasComponent.jsx";
import InputRange from 'react-input-range';
import VirtualList from 'react-tiny-virtual-list';

/* Assets and Styles Imports */
import "../../styles/PageSolarSystems.css";
import "react-input-range/lib/css/index.css";
import AudioSolarSystems from '../../assets/audio/solarsystems.ogg';


const PageSolarSystems = (props) => {
  const { changeAudioSource,
          changeSelectedSystem,
          stars,
          planets,
          selectedSolarSystem,
          isLoading,
          error,
          changeFilters,
          planetCount } = props;
  
  changeAudioSource(AudioSolarSystems);

  if (stars) console.log(stars.filter(star => star.st_mass != null).map(star => star.st_mass).sort())
  
  let filteredStars = stars ? stars.filter(star => star.pl_pnum <= planetCount.max && star.pl_pnum >= planetCount.min) : [];
  let relatedPlanets = (planets && selectedSolarSystem) ? planets.filter(p => p["pl_hostname"] === selectedSolarSystem["pl_hostname"]) : null;

  let itemStyle = {
    fontSize: "16px",
    cursor: "default"
  }
  return (
    <main id="main-solarsystems">
      <CanvasComponent />
      <h3>SELECTED SOLAR SYSTEM: {selectedSolarSystem ? selectedSolarSystem["pl_hostname"] : null}</h3>
      <div id="div-filters">
        <div id="div-filter-stars">
          <h5 className="slider-label">Planet Count</h5>
          <InputRange draggableTrack allowSameValues minValue={1} maxValue={8} step={1} value={planetCount} onChange={value => changeFilters(value)} onChangeComplete={value => changeFilters(value)} />
          <h5 className="slider-label">Binary Star?</h5>
          <h5 className="slider-label">Stellar Mass</h5>
          <h5 className="slider-label">Stellar Radius</h5>
          <h5 className="slider-label">Stellar Temperature</h5>
          <section id="section-container">
          <VirtualList
            className="div-virtual-list"
            width='100%'
            height={160}
            style={itemStyle}
            itemCount={filteredStars.length}
            itemSize={40}
            renderItem={({index, style}) => (
              <p key={index} className="div-virtual-item" style={style} onClick={() => changeSelectedSystem(filteredStars[index])}>{filteredStars[index].pl_hostname}</p>
            )
            } />
          </section>
        </div>
        <div id="div-filter-planets">
          <h5 className="slider-label">Planet Orbital Eccentricity</h5>
          <h5 className="slider-label">Planetary Orbit Semi-Major Axis</h5>
          <h5 className="slider-label">Planetary Orbit Period</h5>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = state => {
  const { stars, planets, selectedSolarSystem, isLoading, error } = state.data;
  const { planetCount } = state.filters;  
  return { stars, planets, selectedSolarSystem, isLoading, error, planetCount };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilters: newFilter => dispatch(changeFilters(newFilter)),
    changeSelectedSystem: newSystem => dispatch(changeSelectedSystem(newSystem)),
    changeAudioSource: audioSource => dispatch(changeAudioSource(audioSource))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);