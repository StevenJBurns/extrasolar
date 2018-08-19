/* React, Router and Redux Imports */
import React from 'react';
// import store from "./redux/store";
import { Switch, Route, NavLink } from 'react-router-dom';

/* App specific Imports */
import { AppHeader } from "./components/AppHeader.jsx";
import { AppNav } from "./components/AppNav.jsx";
import { AppFooter } from "./components/AppFooter.jsx";

import PageHome from './containers/PageHome.jsx';
import PageData from './containers/PageData.jsx';
import PageVisualization from './containers/PageVisualization.jsx';
import PageAbout from "./containers/PageAbout.jsx";
import { Page404 } from "./containers/Page404.jsx"

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
          <Route component={ Page404 } />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
