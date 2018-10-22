/* React, Router and Redux Imports */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getLastDataFetch } from "./redux/actions/index.js";
import { fetchStars } from "./redux/actions/actionAsyncFetchStars.js";
import { fetchPlanets } from "./redux/actions/actionAsyncFetchPlanets.js";

/* Component Imports */
import { AppHeader } from "./components/app/AppHeader.jsx";
import { AppNav } from "./components/app/AppNav.jsx";
import { AppFooter } from "./components/app/AppFooter.jsx";
import PageHome from './components/pages/PageHome.jsx';
import PageData from './components/pages/PageData.jsx';
import PageSolarSystems from './components/pages/PageSolarSystems.jsx';
import PageAbout from "./components/pages/PageAbout.jsx";
import { Page404 } from "./components/pages/Page404.jsx"

/* Stylesheet Imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppFooter.css';
import './styles/AppNav.css';


const activeStyle = { backgroundColor : '#8F8F8F' };

export const App = ({fetchStars, fetchPlanets}) => {
  fetchStars();
  fetchPlanets();

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
  )
}

// const mapStateToProps = state => {
//   const { lastFetch, stars, planets } = state.data;
//   return { lastFetch, stars, planets };
// };

const mapDispatchToProps = dispatch => {
  return {
    getLastDataFetch: () => dispatch(getLastDataFetch()),
    fetchStars: () => dispatch(fetchStars()),
    fetchPlanets: () => dispatch(fetchPlanets())
  }
};

export default withRouter(connect(null, mapDispatchToProps)(App));
