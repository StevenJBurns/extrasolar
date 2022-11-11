import { NavLink } from 'react-router-dom';
import './AppNav.scss';

type NavigationPath = {
  path: string;
  label: string;
};

const validNavigationPaths: Array<NavigationPath> = [
  { path: '/', label: 'HOME' },
  { path: '/data', label: 'DATA' },
  { path: '/systems', label: 'SOLAR SYSTEMS' },
  { path: '/bookmarks', label: 'BOOKMARKS' },
  { path: '/about', label: 'ABOUT' },
];

const setActiveStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'green' : 'blue',
});

export const AppNav = () => (
  <nav id="app-nav">
    <ul>
      {validNavigationPaths.map(path => (
        <li key={path.label}>
          <NavLink to={path.path} style={setActiveStyle}>
            {path.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
