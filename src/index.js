import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/index";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
  );
  
registerServiceWorker();
