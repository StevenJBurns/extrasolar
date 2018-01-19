import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import AppLogo from './images/extrasolar.png';
import PageHome from './containers/PageHome';
import PageData from './containers/PageData';
import PageVisualization from './containers/PageVisualization';

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  toggleSound() {
    let buttonAudio = document.getElementById("buttonAudio");
    let audioBackground = document.getElementById("audioBackground");

    console.log(buttonAudio, audioBackground);

    //audioBackground.muted ? audioBackground.muted = false : audioBackground.muted = true;
    //$("#buttonAudio").toggleClass("button-success button-warning")
    //audioBackground.muted ? localStorage.setItem("sound", "off") : localStorage.setItem("sound", "on");
  }

  render() {
    return (
      <div className="App">
        <header id="app-header">
          <img id="app-logo" src={AppLogo} alt="ExtraSolar Logo" />
          <div>
            <h1 id="h1-header">ExtraSolar</h1>
            <h3 id="h2-header">Visualization of distant solar systems and their exoplanets</h3>
          </div>
          <button type="button" id="button-audio" name="buttonAudio" onClick={this.toggleSound()}>
            <span className="fas fa-volume-up fa-2x" aria-hidden="true"></span>
          </button>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/data">Data</Link></li>
            <li><Link to="/visualization">Visualization</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={PageHome} />
          <Route path='/data' exact component={PageData} />
          <Route path='/visualization' exact component={PageVisualization} />
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
