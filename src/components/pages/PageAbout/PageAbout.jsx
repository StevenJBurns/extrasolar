import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Page } from '../Page/Page';
import { actionTypes } from '../../../redux/actionTypes';
import { Bookmarks } from '../../ui/Bookmarks';
import AboutOGG from "../../../assets/audio/about.ogg";
import "./PageAbout.scss";

export const PageAbout = props => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: AboutOGG});
  }, []);

  return (
    <Page {...props}>
      <div id="div-content-wrapper">
        <h1>About</h1>
        <hr></hr>
        <p>Since 1992, over 3,500 <a href="https://en.wikipedia.org/wiki/Exoplanet">extrasolar planets</a> have been observed through various means. Less than two dozen have been <a href="https://en.wikipedia.org/wiki/List_of_directly_imaged_exoplanets">directly imaged</a> but several thousand more have been catalogued by non-visual means. If complete, that data lends itself to creating an abstract picture of what these distant solar systems look like.</p>
        <p>The data in this project comes directly from NASA and IPAC at Caltech, the majority of which was collected by the <a href="https://en.wikipedia.org/wiki/Kepler_(spacecraft)">Kepler and K2</a> missions since being launched in 2009. NASA maintains a list of over 5,000 potential stellar candidates for future observations.</p>
        <p>Scientists estimate there are roughly 100 billion exoplanets in our galaxy alone. Further extrapolation predicts there are 10 billion earth size planets, and of those 1 billion may lie in its host star's <a href="https://en.wikipedia.org/wiki/Circumstellar_habitable_zone">habitable zone</a>.</p>
        <p>Browse the project to see visual plots of the solar systems with valid data... </p>
        <hr></hr>
        <p>ExtraSolar has evolved as I've learned more about software development. The original version is <a href="http://stevenjburns-galvanize-q1-project.surge.sh">here</a>, my first major project as a student at <a href="https://www.galvanize.com/boulder">Galvanize</a> in Boulder, Colorado.</p>
        <p>Originally, this was a collection of chained HTML5 pages with a splash of jQuery and CSS3. Implementing HTML Canvas was an extremely daunting task especially as a new web development student.  Overall I was very proud of just getting it all to work but I knew I could make it better as I learned more.</p>
        <p>While learning <a href="https://reactjs.org/">React</a>, I knew immediately the modern SPA approach would achieve the native-like look, feel and performance I envisioned. I continued on, tossing in <a href="https://redux.js.org/">Redux</a> to handle the volume of data and <a href="https://d3js.org/">D3js</a> for a simple layer of data presentation.</p>
        <p>The only future feature I would still like to add is 3D rendering most likely via <a href="https://threejs.org/">ThreeJS</a>.</p>
        <p>The current source code is <a href="https://github.com/StevenJBurns/extrasolar">here</a> and the live version is hosted straight from Github Pages.</p>
        <Bookmarks />
      </div>
    </Page>
  );
};
