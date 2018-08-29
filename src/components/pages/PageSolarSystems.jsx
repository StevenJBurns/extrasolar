/* React and Redux Imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource, getLastFetch, setFilters } from "../../redux/actions";

/* Component Imports */
import { ListStars } from "../ui/ulStarList.jsx";
import { ListPlanets } from "../ui/ulPlanetList.jsx";
import InputRange from 'react-input-range';

/* Assets and Styles Imports */
import "../../styles/PageSolarSystems.css";
import "react-input-range/lib/css/index.css";
import AudioSolarSystems from '../../assets/audio/solarsystems.ogg';


export const PageSolarSystems = ({changeSource}) => {
  changeSource(AudioSolarSystems);

  const style_h5 = { margin: 24 + 'px ' + 0}

  return (
    <main id="main-solarsystems" style={{color: '#DFDFDF'}}>
      <h1>Solar Systems</h1>
      <div id="div-filters" style={{ display: 'flex', background: '#7F7F7F', padding: 24 + 'px'}}>
        <div id="div-filter-stars" style={{ minWidth: 288 + 'px', margin: "0 auto"}}>
          <h5 style={style_h5}>Stellar Mass</h5>
          {/* <InputRange draggableTrack minValue={0} maxValue={25} step={0.001}
            value={this.props.starMass}
            onChange={this.handleSliderChange}
            onChangeComplete={value => this.filterStarsByMass(value)} /> */}
          <h5 style={style_h5}>Stellar Radius</h5>
          {/* <InputRange /> */}
          <h5 style={style_h5}>Stellar Temperature</h5>
          {/* <InputRange /> */}
        </div>
        <div id="div-filter-planets" style={{ minWidth: 288 + 'px', margin: "0 auto", display: 'flex', flexDirection: 'column'}}>
          <h5 style={style_h5}>Planet Orbital Eccentricity</h5>
          {/* <InputRange draggableTrack minValue={0} maxValue={1} step={0.01}
              value={{min: 0.25, max: 0.75}}
              onChange={ value => this.setState({sliderPlanetEccMinMax: value})}
              onChangeComplete={value => this.filterPlanetsByEcc(value)} /> */}
          <h5 style={style_h5}>Planetary Orbit Semi-Major Axis</h5>
          {/* <InputRange /> */}
          <h5 style={style_h5}>Planetary Orbit Period</h5>
          {/* <InputRange /> */}
        </div>
      </div>
      <ListStars stars={[]} />
      <ListPlanets planets={[]} />
    </main>
  );
}

const mapStateToProps = state => {
  const { stars, planets } = state.data;
  // const { starMass } = state.filters;

  return { stars, planets };
};

const mapDispatchToProps = dispatch => {
  return {
    getLastFetch: () => dispatch(getLastFetch()),
    setFilters: newFilter => dispatch(setFilters(newFilter)),
    changeSource: source => dispatch(changeAudioSource(source))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);