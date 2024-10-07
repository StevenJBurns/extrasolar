import { createRoot } from 'react-dom/client';
import { App } from '../components/app/App';

it('renders without crashing', () => {
  const root = createRoot(document.createElement('div'));

  root.render(<App />,);
  root.unmount();
});
