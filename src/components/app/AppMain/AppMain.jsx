import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchStars } from "../../../redux/actions/actionAsyncFetchStars.js";
import { fetchPlanets } from "../../../redux/actions/actionAsyncFetchPlanets.js";
import { getLastDataFetch } from "../../../redux/actions/index.js";

import {
  PageHome,
  PageData,
  PageSystems,
  PageAbout,
  Page404,
} from '../../pages';
import './AppMain.scss';

export const AppMain = props => {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={() => <PageHome />} />
        <Route exact path='/data' render={() => <PageData />} />
        <Route exact path='/systems' render={() => <PageSystems />} />
        <Route exact path='/about' render={() => <PageAbout />} />
        <Route component={ Page404 } />
      </Switch>
    </main>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getLastDataFetch: () => dispatch(getLastDataFetch()),
    fetchStars: () => dispatch(fetchStars()),
    fetchPlanets: () => dispatch(fetchPlanets())
  }
};

export default withRouter(connect(null, mapDispatchToProps)(AppMain));