/* React & Router imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/* Redux imports */ 
import store from "./redux/index";
import { Provider } from "react-redux";

/* app specific imports */
import App from './App.jsx';

/* stylesheet imports */
import './styles/index.css';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
  );
  
registerServiceWorker();
