/* React and Redux imports */
import React from 'react';
import { connect } from "react-redux";
import { changeAudioSource } from "../../redux/actions";

/* Assets and Styles Imports */
import AudioData from '../../assets/audio/data.ogg';
import "../../styles/PageData.css";


const PageData = ({changeSource}) => {
  changeSource(AudioData);

  return (
    <main id="main-data">
      <h1>Data</h1>
    </main>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    changeSource: source => dispatch(changeAudioSource(source))
  }
}

export default connect(null, mapDispatchToProps)(PageData);