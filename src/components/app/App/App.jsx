import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getStarsThunk, getPlanetsThunk } from '../../../redux/actions/data';
import { PageHeader, PageFooter } from '../../pages/';
import {
  PageHome,
  PageData,
  PageSolarSystems,
  PageAbout,
  Page404
} from '../../pages/';
import HomeOGG from '../../../assets/audio/home.ogg';
import DataOGG from '../../../assets/audio/data.ogg';
import SolarSystemsOGG from '../../../assets/audio/solarsystems.ogg';
import AboutOGG from "../../../assets/audio/about.ogg";
import CanvasComponent from "../../canvas/CanvasComponent";
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStarsThunk());
    dispatch(getPlanetsThunk());
  }, []);
  
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
        <Page404 title="Not Found"/>
        <PageFooter />
      </Route>
    </Switch>
  );
};
