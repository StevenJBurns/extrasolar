import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import AppLogo from './images/extrasolar.png';
import PageHome from './containers/PageHome';
import PageData from './containers/PageData';
import PageVisualization from './containers/PageVisualization';
import AudioButton from "./components/AudioButton";

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { audioMuted : false };

    this.toggleSound = this.toggleSound.bind(this);
  }

  toggleSound() {
    this.setState({ audioMuted : !this.state.audioMuted });
  }

  render() {
    let activeStyle = { backgroundColor : '#8F8F8F' };

    return (
      <div className="App">
        <header id="app-header">
          <img id="app-logo" src={AppLogo} alt="ExtraSolar Logo" />
          <div>
            <h1 id="h1-header">ExtraSolar</h1>
            <h3 id="h2-header">Visualization of distant solar systems and their exoplanets</h3>
          </div>
          <AudioButton />
          <button type="button" id="button-audio" name="buttonAudio" onClick={this.toggleSound}>
            <span className="fas fa-volume-up fa-2x" aria-hidden="true"></span>
          </button>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
            <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
            <li><NavLink to="/visualization" activeStyle={activeStyle}>VISUALIZATION</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact render={() => <PageHome isMuted={this.state.audioMuted} />} />
          <Route path='/data' exact render={() => <PageData isMuted={this.state.audioMuted} />} />
          <Route path='/visualization' exact render={() => <PageVisualization isMuted={this.state.audioMuted} />} />
        </Switch>

        <footer id="app-footer">
          <h4 id="footer-h4">Steven J Burns &#8226; Galvanize Boulder &#8226; WDI g62</h4>
          <h5 id="footer-h5">&copy; 2018</h5>
        </footer>
      </div>
    );
  }
}

export default App;
