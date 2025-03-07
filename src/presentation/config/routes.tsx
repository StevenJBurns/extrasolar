import { ReactElement } from 'react';
import {
  PageHome,
  PageData,
  PageSystems,
  PageBookmarks,
  PageAbout,
  Page404,
} from '../components/pages';

type ValidRoute = {
  path: string;
  element: ReactElement;
  index?: boolean;
};

export const routes: Array<ValidRoute> = [
  { path: '/', element: <PageHome />, index: true },
  { path: 'data', element: <PageData data={[]} /> },
  { path: 'systems', element: <PageSystems /> },
  { path: 'bookmarks', element: <PageBookmarks /> },
  { path: 'about', element: <PageAbout /> },
  { path: '*', element: <Page404 title="Page Not Found" /> },
];
