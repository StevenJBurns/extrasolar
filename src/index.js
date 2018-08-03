/* React & Router imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/* Redux imports */ 
import store from "./redux/store/index";

/* App specific imports */
import App from './App.jsx';

/* stylesheet imports */
import './styles/index.css';


const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root')
  );
}

render();

store.subscribe(render);
  
registerServiceWorker();
