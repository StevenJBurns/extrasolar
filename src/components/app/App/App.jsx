import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { mapRawDataToSolarSystems } from '../../../util/mapRawDataToSolarSystems';
import { actionTypes } from '../../../redux/actionTypes';
import { services } from '../../../services';
import { PageHeader, PageFooter } from '../../pages/';
import Pages from '../../pages';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { stars, planets } = services;

  React.useEffect(() => {
    Promise.all([stars.fetchAllStars, planets.fetchAllPlanets])
      .then(results => {
        const [stars, planets] = results;
        // console.log('stars: ', stars || 0);
        // console.log('planets: ', planets || 0);
        dispatch({
          type: actionTypes.ui.GET_LAST_DATA_FETCH_DATETIME,
          payload: new Date(),
        })
      });
  }, []);
  
  return (
    <Switch>
      <Route exact path='/'>
        <Pages.PageHome title="Home" />
      </Route>
      <Route exact path='/data'>
        <PageHeader />
        <Pages.PageData title="Data"/>
        <PageFooter />
      </Route>
      <Route exact path='/systems'>
        <PageHeader />
        <Pages.PageSolarSystems title="Solar Systems"/>
        <PageFooter />
      </Route>
      <Route exact path='/about'>
        <PageHeader />
        <Pages.PageAbout title="About" />
        <PageFooter />
      </Route>
      <Route>
        <PageHeader />
        <Pages.Page404 title="Not Found"/>
        <PageFooter />
      </Route>
    </Switch>
  );
};

export const AppMain = withRouter(App);

