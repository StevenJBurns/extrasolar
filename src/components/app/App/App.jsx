/* React, Router and Redux Imports */
import React from 'react';

/* Component Imports */
import { AppHeader } from "../AppHeader/AppHeader.jsx/index.js";
import { AppNav } from "../AppNav/AppNav.jsx/index.js";
import { AppMain } from "../AppMain/AppMain.jsx/index.js";
import { AppFooter } from "../AppFooter/AppFooter.jsx/index.js";

/* Stylesheet Imports */
import "./styles/App.css";
import "./styles/AppHeader.css";
import "./styles/AppMain.css";
import "./styles/AppFooter.css";
import "./styles/AppNav.css";


const activeStyle = { backgroundColor : '#8F8F8F' };

export const App = ({fetchStars, fetchPlanets}) => {
  fetchStars();
  fetchPlanets();

  return (
    <React.Fragment>
      <AppHeader />
      <AppNav activeStyle={ activeStyle } />
      <AppMain />
      <AppFooter />
    </React.Fragment>
  )
}

// const mapStateToProps = state => {
//   const { lastFetch, stars, planets } = state.data;
//   return { lastFetch, stars, planets };
// };

