/* React, Router and Redux Imports */
import React from 'react';
import store from "./redux/store";
import { Switch, Route, NavLink } from 'react-router-dom';

/* App specific Imports */
import PageHome from './containers/PageHome';
import PageData from './containers/PageData';
import PageVisualization from './containers/PageVisualization';
import PageAbout from "./containers/PageAbout"
import AudioButton from "./components/AudioButton";
import AppLogo from './assets/logo/extrasolar.png';

/* Stylesheet Imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppFooter.css';
import './styles/AppNav.css';


class App extends React.Component {
  render() {
    const { isAudioMuted, currentAudioSource } = store.getState();
    const activeStyle = { backgroundColor : '#8F8F8F' };

    return (
      <div className="App">
        <header id="app-header">
          <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
          <div id="divAppTaglines">
            <h1 id="h1-header">ExtraSolar</h1>
            <h3 id="h2-header">Visualization of distant solar systems and their exoplanets</h3>
          </div>
          <AudioButton isAudioMuted={ isAudioMuted } audioSource={ currentAudioSource } />
        </header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
            <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
            <li><NavLink to="/visualization" activeStyle={activeStyle}>VISUALIZATION</NavLink></li>
            <li><NavLink to="/about" activeStyle={activeStyle}>ABOUT</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='${process.env.PUBLIC_URL}/' render={() => <PageHome />} />
          <Route exact path='${process.env.PUBLIC_URL}/data' render={() => <PageData />} />
          <Route exact path='${process.env.PUBLIC_URL}/visualization' render={() => <PageVisualization />} />
          <Route exact path='${process.env.PUBLIC_URL}/about' render={() => <PageAbout />} />
        </Switch>

        <footer id="app-footer">
          {/* <h4 id="footer-h4">Steven J Burns &#8226; Galvanize Boulder &#8226; WDI g62</h4> */}
          <h4>&copy;2018 &bull; Steven J Burns</h4>
        </footer>
      </div>
    );
  }
}

export default App;
