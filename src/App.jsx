/* React, Router and Redux Imports */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* App specific Imports */
import { AppHeader } from "./components/AppHeader.jsx";
import { AppNav } from "./components/AppNav.jsx";
import { AppFooter } from "./components/AppFooter.jsx";

import { PageHome } from './containers/PageHome.jsx';
import { PageData } from './containers/PageData.jsx';
import { PageSolarSystems } from './containers/PageSolarSystems';
import { PageAbout } from "./containers/PageAbout.jsx";
import { Page404 } from "./containers/Page404.jsx"

/* Stylesheet Imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppFooter.css';
import './styles/AppNav.css';

// const urlDistinctStars = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json";
// const urlDistinctPlanets = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper&format=json";

export const App = () => {
  const activeStyle = { backgroundColor : '#8F8F8F' };

  return (
    <div className="App">
      <AppHeader />
      <AppNav activeStyle={ activeStyle } />
      <Switch>
        <Route exact path='/' render={() => <PageHome />} />
        <Route exact path='/data' render={() => <PageData />} />
        <Route exact path='/solarsystems' render={() => <PageSolarSystems />} />
        <Route exact path='/about' render={() => <PageAbout />} />
        <Route component={ Page404 } />
      </Switch>
      <AppFooter />
    </div>
  );
}
