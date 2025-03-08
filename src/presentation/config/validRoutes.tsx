import { RouteProps } from 'react-router';
import { Pages } from '../components/pages';

export const validRoutes: Array<RouteProps> = [
  { path: '/', element: <Pages.PageHome />, index: true },
  { path: 'data', element: <Pages.Data data={[]} /> },
  { path: 'systems', element: <Pages.SolarSystems /> },
  { path: 'bookmarks', element: <Pages.PageBookmarks /> },
  { path: 'about', element: <Pages.About /> },
  { path: '*', element: <Pages.NotFound /> },
];
