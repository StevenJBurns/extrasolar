/* React & Router imports */
import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

/* app specific imports */
import PageHome from './containers/PageHome';
import PageData from './containers/PageData';
import PageVisualization from './containers/PageVisualization';
import AudioButton from "./components/AudioButton";
import AppLogo from './images/extrasolar.png';

/* stylesheet imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppFooter.css';
import './styles/AppNav.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    let activeStyle = { backgroundColor : '#8F8F8F' };

    return (
      <div className="App">
        <header id="app-header">
          <img id="app-logo" src={AppLogo} alt="ExtraSolar Logo" />
          <div id="divAppTaglines">
            <h1 id="h1-header">ExtraSolar</h1>
            <h3 id="h2-header">Visualization of distant solar systems and their exoplanets</h3>
          </div>
          <AudioButton isAudioMuted={this.props.isAudioMuted} />
        </header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
            <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
            <li><NavLink to="/visualization" activeStyle={activeStyle}>VISUALIZATION</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <PageHome />} />
          <Route exact path='/data' render={() => <PageData />} />
          <Route exact path='/visualization' render={() => <PageVisualization />} />
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
