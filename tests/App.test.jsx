import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { App } from '@presentation/components/app/App/App.component.tsx';

const mockStore = configureStore({ reducer: () => ({}) });

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
  });
});
