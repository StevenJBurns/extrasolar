import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useOnlineStatus } from 'hooks/useOnlineStatus';
import { actionTypes } from 'redux/actionTypes';
import { PageFooter } from 'components/pages/PageFooter/PageFooter';
import { Page } from 'components/pages/Page/Page';
import HomeOGG from 'assets/audio/home.ogg';
import "./PageHome.scss";

export const PageHome = props => {
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  React.useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: HomeOGG });
  }, [dispatch]);

  return (
    <Page>
      <header style={{ color: isOnline ? 'white': 'darkred' }}>
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
      <PageFooter />
    </Page>
  );
};
