import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NotFound } from './NotFound.component';

describe('<NotFound />', () => {
  afterEach(cleanup);

  // const setup = overrides => {
  //   const props = {
  //     ...overrides,
  //   };

  //   const { container, debug } = render(<NotFound {...props} />);

  //   return {
  //     props,
  //     debug,
  //     page404: () => container.querySelector('#page-404'),
  //   };
  // };

  // it('renders without errors', () => {
  //   const { page404, debug } = setup();
  //   expect(page404()).toBeInTheDocument();
  //   debug();
  // });
});
