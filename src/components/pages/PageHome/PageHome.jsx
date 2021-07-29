import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useOnlineStatus } from 'hooks/useOnlineStatus';
import { actionTypes } from 'state/actionTypes';
import { PageFooter } from 'components/pages/PageFooter/PageFooter';
import HomeOGG from 'assets/audio/home.ogg';
import { useStyles } from './PageHome.styles';

export const PageHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  React.useEffect(() => {
    dispatch({ type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: HomeOGG });
  }, [dispatch]);

  return (
    <Container component="main" maxWidth={false} className={classes.root}>
      <header className={classes.header} style={{ color: isOnline ? 'white': 'darkred' }}>
        <h1>ExtraSolar</h1>
        <h2>Exoplanet Data Visualization</h2>
      </header>
      <nav className={classes.nav}>
        <ul>
          <li><Link to="./data">DATA</Link></li>
          <li><Link to="./systems">SOLAR SYSTEMS</Link></li>
          <li><Link to="./bookmarks">BOOKMARKS</Link></li>
          <li><Link to="./about">ABOUT</Link></li>
        </ul>
      </nav>
      <PageFooter className={classes.footer} />
    </Container>
  );
};
