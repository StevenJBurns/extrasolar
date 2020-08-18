import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getStarsThunk, getPlanetsThunk } from 'state/actions/data';
import { PageHeader, PageFooter } from 'components/pages';
import {
  PageHome,
  PageData,
  PageSolarSystems,
  PageAbout,
  Page404
} from 'components/pages';
import HomeOGG from 'assets/audio/home.ogg';
import DataOGG from 'assets/audio/data.ogg';
import SolarSystemsOGG from 'assets/audio/solarsystems.ogg';
import AboutOGG from "assets/audio/about.ogg";
import CanvasComponent from "components/canvas/CanvasComponent";
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStarsThunk());
    dispatch(getPlanetsThunk());
  }, [dispatch]);
  
  return (
    <Switch>
      <Route exact path='/'>
        <PageHome title="Home" audioSource={HomeOGG} />
      </Route>
      <Route exact path='/data'>
        <PageHeader />
        <PageData title="Data" audioSource={DataOGG} />
        <PageFooter />
      </Route>
      <Route exact path='/systems'>
        <PageHeader />
        <CanvasComponent selectedSolarSystem={{}} />
        <PageSolarSystems title="Solar Systems" audioSource={SolarSystemsOGG} />
        <PageFooter />
      </Route>
      <Route exact path='/about'>
        <PageHeader />
        <PageAbout title="About" audioSource={AboutOGG} />
        <PageFooter />
      </Route>
      <Route>
        <PageHeader />
        <Page404 title="Page Not Found"/>
        <PageFooter />
      </Route>
    </Switch>
  );
};
