import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Page } from '../Page/Page';
import { changeAudioSource, changeSelectedSolarSystem } from '../../../redux/actions/ui';

import CanvasComponent from "../../canvas/CanvasComponent";
// import InputRange from 'react-input-range';
// import VirtualList from 'react-tiny-virtual-list';

import "./PageSolarSystems.scss";
import "react-input-range/lib/css/index.css";
import SolarSystemsOGG from '../../../assets/audio/solarsystems.ogg';
import { LinearProgress } from '@material-ui/core';

export const PageSolarSystems = (props) => {
  const dispatch = useDispatch();

  const stars = useSelector(state => state.data.stars.list);
  const isFetchingStars = useSelector(state => state.data.stars.isFetching);
  const planets = useSelector(state => state.data.planets);

  const {
    selectedSolarSystem,
    changeSelectedSystem,
  } = props;
  
  React.useEffect(() => {
    dispatch(changeAudioSource(SolarSystemsOGG));
  }, []);

  return (
    <Page {...props}>
      { isFetchingStars && <LinearProgress />}
      <div id="main-solarsystems">
        {/* <CanvasComponent selectedSolarSystem={selectedSolarSystem} /> */}
        <h3>SELECTED SOLAR SYSTEM: {selectedSolarSystem ? selectedSolarSystem["pl_hostname"] : null}</h3>
        <div id="div-filters">
          <div id="div-filter-stars">
            <h5 className="slider-label">Planet Count</h5>
            <h5 className="slider-label">Binary Star?</h5>
            <h5 className="slider-label">Stellar Mass</h5>
            <h5 className="slider-label">Stellar Radius</h5>
            <h5 className="slider-label">Stellar Temperature</h5>
            <section id="section-container">
            </section>
          </div>
          <div id="div-filter-planets">
            <h5 className="slider-label">Planet Orbital Eccentricity</h5>
            <h5 className="slider-label">Planetary Orbit Semi-Major Axis</h5>
            <h5 className="slider-label">Planetary Orbit Period</h5>
          </div>
          <ul></ul>
        </div>
      </div>
    </Page>
  );
}

const mapStateToProps = state => {
  const { selectedSolarSystem } = state.ui;
  const { stars, planets } = state.data;
  return { stars, planets, selectedSolarSystem };
};

const mapDispatchToProps = dispatch => ({
  changeSelectedSystem: newSystem => dispatch(changeSelectedSolarSystem(newSystem)),
  changeAudioSource: audioSource => dispatch(changeAudioSource(audioSource))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);