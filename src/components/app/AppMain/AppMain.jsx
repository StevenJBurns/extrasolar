import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { services } from '../../../services';
import Pages from '../../pages';
import './AppMain.scss';

export const AppMain = props => {
  const { stars, planets } = services;

  React.useEffect(() => {
    Promise.all([stars.fetchAllStars, planets.fetchAllPlanets])
      .then(results => console.log('results: ', results));
  }, []);

  return (
    <Switch>
      <Route exact path='/'>
        <Pages.PageHome />
      </Route>
      <Route exact path='/data'>
        <Pages.PageData />
      </Route>
      <Route exact path='/systems'>
        <Pages.PageSolarSystems />
      </Route>
      <Route exact path='/about'>
        <Pages.PageAbout />
      </Route>
      <Route>
        <Pages.Page404 />
      </Route>
    </Switch>
  );
};

const mapStateToProps = state => ({
  stars: state.data.stars,
  planets: state.data.planets,
  lastDataFetch: state.ui.lastDataFetch,
});

/* withRouter is a HoC for Router use with Redux */
export default withRouter(connect(mapStateToProps, null)(AppMain));
