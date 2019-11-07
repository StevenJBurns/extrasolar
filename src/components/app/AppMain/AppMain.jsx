import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { services } from '../../../services';
import {
  PageHome,
  PageData,
  PageSystems,
  PageAbout,
  Page404,
} from '../../pages';
import './AppMain.scss';

export const AppMain = props => {
  const { stars, planets } = services;

  React.useEffect(() => {
    Promise.all([stars.fetchAllStars, planets.fetchAllPlanets])
      .then(results => console.log('results: ', results));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <PageHome />} />
        <Route exact path='/data' render={() => <PageData />} />
        <Route exact path='/systems' render={() => <PageSystems />} />
        <Route exact path='/about' render={() => <PageAbout />} />
        <Route component={ Page404 } />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  stars: state.data.stars,
  planets: state.data.planets,
  lastDataFetch: state.ui.lastDataFetch,
});

/* withRouter is a HoC for Router use with Redux */
export default withRouter(connect(mapStateToProps, null)(AppMain));
