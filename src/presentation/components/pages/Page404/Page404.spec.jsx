import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Page404 } from './Page404';

describe('<Page404 />', () => {
	afterEach(cleanup);

	const setup = overrides => {
		const props = {
			...overrides,
		}

		const { container, debug } = render(<Page404 {...props} />)

		return {
			props,
			debug,
			page404: () => container.querySelector('#page-404'),
		};
	}

  it('renders without errors', () => {
		const { page404, debug } = setup();
		expect(page404()).toBeInTheDocument();
		debug();
	});
});
