import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Page } from '../Page/Page';
import { actionTypes } from '../../../redux/actionTypes';
import { AppFooter } from '../../app/AppFooter';
import HomeOGG from '../../../assets/audio/home.ogg';
import "./PageHome.scss";

export const PageHome = props => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: HomeOGG });
  }, []);

  return (
    <Page {...props}>
      <div className="page-home">
        <header>
          <h1>ExtraSolar</h1>
          <h2>Exoplanet Data Visualization</h2>
        </header>
        <nav>
          <ul>
            <li><Link to="./data">DATA</Link></li>
            <li><Link to="./systems">SOLAR SYSTEMS</Link></li>
            <li><Link to="./about">ABOUT</Link></li>
          </ul>
        </nav>
        <AppFooter />
      </div>
    </Page>
  );
};
