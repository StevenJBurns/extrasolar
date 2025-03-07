import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router';
import { store, persistor } from './presentation/state/store/';
import { App } from './presentation/components/app';
import './index.scss';

const reactRoot = document.getElementById('react-root')!;

if (reactRoot) {
  const root = createRoot(reactRoot);

  root.render(
    <ReduxProvider store={store}>
      <ReduxPersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/extrasolar">
          <ThemeProvider theme={createTheme()}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ReduxPersistGate>
    </ReduxProvider>,
  );
}
