import React from "react";
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions"; 

/* Style Imports */
import "../styles/PageAbout.css"
import AudioAbout from "../assets/audio/about.ogg";

export class PageAbout extends React.Component {
  render() {
    return(
    <main id="main-about">
      <div id="div-content-wrapper">
        <h1>About</h1>
        <hr></hr>
        <p>ExtraSolar has evolved as I've learned more about software development. The original version is <a href="http://stevenjburns-galvanize-q1-project.surge.sh">here</a>, my first major project as a student at <a href="https://www.galvanize.com/boulder">Galvanize</a> in Boulder, Colorado.</p>
        <p>Originally, this was a collection of chained HTML5 pages with a splash of jQuery and CSS3. Implementing HTML Canvas was an extremely daunting task especially as a new web development student.  Overall I was very proud of just getting it all to work but I knew I could make it better as I learned more.</p>
        <p>While learning <a href="https://reactjs.org/">React</a>, I knew immediately the modern SPA approach would achieve the native-like look, feel and performance I envisioned. I continued on, tossing in <a href="https://redux.js.org/">Redux</a> to handle the volume of data and <a href="https://d3js.org/">D3js</a> for a simple layer of data presentation.</p>
        <p>The only future feature I would still like to add is 3D rendering most likely via <a href="https://threejs.org/">ThreeJS</a>.</p>
        <p>The current source code is <a href="https://github.com/StevenJBurns/extrasolar">here</a> and the live version is hosted straight from Github Pages.</p>
      </div>
    </main>
    );
  };

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioAbout));
  }
};
