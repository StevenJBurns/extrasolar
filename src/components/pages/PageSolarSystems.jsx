/* React and Redux Imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, changeFilters } from "../../redux/actions";

/* Component Imports */
import InputRange from 'react-input-range';
import VirtualList from 'react-tiny-virtual-list';
import { StarList } from "../ui/StarList";

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
          <InputRange draggableTrack allowSameValues minValue={1} maxValue={8} step={1} value={planetCount} onChange={value => changeFilters(value)} onChangeComplete={value => changeFilters(value)} />
          <h5 className="slider-label">Binary Star?</h5>
          <h5 className="slider-label">Stellar Mass</h5>
          <h5 className="slider-label">Stellar Radius</h5>
          <h5 className="slider-label">Stellar Temperature</h5>
          <section id="section-container">
          <VirtualList
            width='100%'
            height={160}
            itemCount={filteredStars.length}
            itemSize={40} // Also supports variable heights (array or function getter)
            renderItem={({index, style}) => (
              <div key={index} style={style}>{filteredStars[index].pl_hostname}</div>
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