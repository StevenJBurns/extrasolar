/* React and Redux imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource } from "../redux/actions";

/* Assets and Styles Imports */
import "../styles/PageSolarSystems.css";
import AudioSolarSystems from '../assets/audio/solarsystems.ogg';


const PageSolarSystems = ({changeSource}) => {
  changeSource(AudioSolarSystems);

  return (
    <main id="main-solarsystems">
      <h1>Solar Systems</h1>
      <ul>

      </ul>
    </main>
  );

  // componentWillMount() {
  //   // store.dispatch(changeAudioSource(AudioSolarSystems));
  // }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSource: source => dispatch(changeAudioSource(source))
  }
}

export default connect(null, mapDispatchToProps)(PageSolarSystems);