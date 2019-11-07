import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { mapRawDataToSolarSystems } from '../../../util/mapRawDataToSolarSystems';
import { services } from '../../../services';
import {
  PageHome,
  PageData,
  PageSystems,
  PageAbout,
  Page404,
} from '../../pages';
import './App.scss';
import { actionTypes } from '../../../redux/actionTypes';

export const App = () => {
  const { stars, planets } = services;

  const dispatch = useDispatch();

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
        <Route exact path='/' render={() => <PageHome />} />
        <Route exact path='/data' render={() => <PageData />} />
        <Route exact path='/systems' render={() => <PageSystems />} />
        <Route exact path='/about' render={() => <PageAbout />} />
        <Route component={ Page404 } />
      </Switch>
  );
};

export const AppMain = withRouter(App);

