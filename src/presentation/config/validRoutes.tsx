import { ReactElement } from 'react';
import { Pages } from '../components/pages';

type ValidRoute = {
  path: string;
  element: ReactElement;
  index?: boolean;
};

export const validRoutes: Array<ValidRoute> = [
  { path: '/', element: <Pages.PageHome />, index: true },
  { path: 'data', element: <Pages.PageData data={[]} /> },
  { path: 'systems', element: <Pages.PageSystems /> },
  { path: 'bookmarks', element: <Pages.PageBookmarks /> },
  { path: 'about', element: <Pages.About /> },
  { path: '*', element: <Pages.NotFound /> },
];
