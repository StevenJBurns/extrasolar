import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { actionTypes } from '../../../redux/actionTypes';
import { services } from '../../../services';
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
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { stars, planets } = services;

  React.useEffect(() => {
    Promise.all([stars.fetchAllStars, planets.fetchAllPlanets])
      .then(results => {
        const [stars, planets] = results;
        console.log('stars: ', stars || 0);
        console.log('planets: ', planets || 0);
        dispatch({
          type: actionTypes.ui.GET_LAST_DATA_FETCH_DATETIME,
          payload: new Date(),
        })
      });
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

export const AppMain = withRouter(App);

