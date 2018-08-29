/* React & Router imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/* Redux imports */ 
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

/* App specific imports */
import App from './App.jsx';

/* stylesheet imports */
import './styles/index.css';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render();
  
registerServiceWorker();
