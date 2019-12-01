import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { mapRawDataToSolarSystems } from '../../../util/mapRawDataToSolarSystems';
import { actionTypes } from '../../../redux/actionTypes';
import { services } from '../../../services';
import {
  PageHome,
  PageData,
  PageSystems,
  PageAbout,
  Page404,
} from '../../pages';
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
          type: actionTypes.data
        })
      });
  }, []);
  
  return (
      <Switch>
        <Route exact path='/'>
          <PageHome />
        </Route>
        <Route exact path='/data'>
          <PageData />
        </Route>
        <Route exact path='/systems'>
          <PageSystems />
        </Route>
        <Route exact path='/about'>
          <PageAbout />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
  );
};

export const AppMain = withRouter(App);

