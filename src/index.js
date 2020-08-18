import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from "state/store";
import { App } from 'components/app';
import './index.scss';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById("react-root")
  );
};

render();
