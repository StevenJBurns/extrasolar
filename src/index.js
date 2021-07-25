import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'state/store';
import { App } from 'components/app';
import './index.scss';

const render = () => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <ReduxPersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </ReduxPersistGate>
    </ReduxProvider>,
    document.querySelector('#react-root')
  );
};

render();
