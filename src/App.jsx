/* React, Router and Redux Imports */
import React from 'react';
// import store from "./redux/store";
import { Switch, Route, NavLink } from 'react-router-dom';

/* App specific Imports */
import { AppHeader } from "./components/AppHeader.jsx";
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
    // const { isAudioMuted, currentAudioSource } = store.getState();
    const activeStyle = { backgroundColor : '#8F8F8F' };

    return (
      <div className="App">
        <AppHeader />
        {/* <header id="app-header">
          <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
          <div id="divAppTaglines">
            <h1 id="h1-header">ExtraSolar</h1>
            <h3 id="h2-header">Visualization of distant solar systems and their exoplanets</h3>
          </div>
          <AudioButton isAudioMuted={ isAudioMuted } audioSource={ currentAudioSource } />
        </header> */}
        <nav>
          <ul>
            <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
            <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
            <li><NavLink to="/visualization" activeStyle={activeStyle}>VISUALIZATION</NavLink></li>
            <li><NavLink to="/about" activeStyle={activeStyle}>ABOUT</NavLink></li>
          </ul>
        </nav>
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
