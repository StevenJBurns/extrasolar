import { RouteProps } from 'react-router';
import { Pages } from '../components/pages';

export const validRoutes: Array<RouteProps> = [
  { path: '/', element: <Pages.Home />, index: true },
  { path: 'data', element: <Pages.Data data={[]} /> },
  { path: 'systems', element: <Pages.SolarSystems /> },
  { path: 'bookmarks', element: <Pages.Bookmarks /> },
  { path: 'about', element: <Pages.About /> },
  { path: '*', element: <Pages.NotFound /> },
];
