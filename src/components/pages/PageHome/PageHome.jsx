import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../../redux/actionTypes';
import HomeOGG from '../../../assets/audio/home.ogg';
import "./PageHome.scss";

export const PageHome = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: HomeOGG });
  }, []);

  return (
    <div id="div-content-wrapper" className="main-home">
      <h1>ExtraSolar</h1>
      <hr></hr>
      <p>Since 1992, over 3,500 <a href="https://en.wikipedia.org/wiki/Exoplanet">extrasolar planets</a> have been observed through various means. Less than two dozen have been <a href="https://en.wikipedia.org/wiki/List_of_directly_imaged_exoplanets">directly imaged</a> but several thousand more have been catalogued by non-visual means. If complete, that data lends itself to creating an abstract picture of what these distant solar systems look like.</p>
      <p>The data in this project comes directly from NASA and IPAC at Caltech, the majority of which was collected by the <a href="https://en.wikipedia.org/wiki/Kepler_(spacecraft)">Kepler and K2</a> missions since being launched in 2009. NASA maintains a list of over 5,000 potential stellar candidates for future observations.</p>
      <p>Scientists estimate there are roughly 100 billion exoplanets in our galaxy alone. Further extrapolation predicts there are 10 billion earth size planets, and of those 1 billion may lie in its host star's <a href="https://en.wikipedia.org/wiki/Circumstellar_habitable_zone">habitable zone</a>.</p>
      <p>Browse the project to see visual plots of the solar systems with valid data... </p>
    </div>
  );
};
