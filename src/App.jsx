/* React, Router and Redux Imports */
import React from 'react';
// import store from "./redux/store";
import { Switch, Route, NavLink } from 'react-router-dom';

/* App specific Imports */
import { AppHeader } from "./components/AppHeader.jsx";
import { AppNav } from "./components/AppNav.jsx";
import { AppFooter } from "./components/AppFooter.jsx";

import PageHome from './containers/PageHome';
import PageData from './containers/PageData';
import PageVisualization from './containers/PageVisualization';
import PageAbout from "./containers/PageAbout"

/* Stylesheet Imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppFooter.css';
import './styles/AppNav.css';


class App extends React.Component {
  render() {
    const activeStyle = { backgroundColor : '#8F8F8F' };

    return (
      <div className="App">
        <AppHeader />
        <AppNav activeStyle={ activeStyle } />
        <Switch>
          <Route exact path='/' render={() => <PageHome />} />
          <Route exact path='/data' render={() => <PageData />} />
          <Route exact path='/visualization' render={() => <PageVisualization />} />
          <Route exact path='/about' render={() => <PageAbout />} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
