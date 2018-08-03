/* React and Redux imports */
import React, { Component } from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Page specific imports */
import AudioData from '../audio/data.ogg';


class PageData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1>Data</h1>
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioData));
  }
}

export default PageData;