import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

import {
  App,
  AppHeader,
  AppNav,
  AppMain,
  AppFooter
} from './components/app/';
import './index.scss';

/* for React Routers Link components to style the active menu button */
const activeStyle = { backgroundColor : '#8F8F8F' };

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App>
          <AppHeader>
            <AppNav activeStyle={activeStyle} />
          </AppHeader>
          <AppMain />
          <AppFooter />
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById("react-root")
  );
}

render();
  
registerServiceWorker();
