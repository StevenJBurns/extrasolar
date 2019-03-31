import React from "react";

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { fetchStars } from "../../../redux/actions/actionAsyncFetchStars.js";
import { fetchPlanets } from "../../../redux/actions/actionAsyncFetchPlanets.js";
import { getLastDataFetch } from "../../../redux/actions/index.js";

import PageHome from '../../pages/PageHome.jsx';
import PageData from '../../pages/PageData.jsx';
import PageSolarSystems from '../../pages/PageSolarSystems.jsx';
import PageAbout from "../../pages/PageAbout.jsx";
import { Page404 } from "../../pages/Page404.jsx"

export const AppMain = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={() => <PageHome />} />
        <Route exact path='/data' render={() => <PageData />} />
        <Route exact path='/solarsystems' render={() => <PageSolarSystems />} />
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