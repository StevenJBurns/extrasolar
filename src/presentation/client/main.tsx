import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router';
import { store, persistor } from '../state/store';
import { App } from '../components/app';
import './index.css';

function main(): void {
  const reactRoot = document.getElementById('react-root');

  if (!reactRoot) {
    console.error('HTML root element #react-root not found in the DOM!');
    return;
  }

  createRoot(reactRoot).render(
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

main(); 