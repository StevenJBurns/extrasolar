import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
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
  color: isActive ? 'darkgreen' : 'blue',
});

export const AppNav = () => (
  <Container component="nav">
    <ul>
      {validNavigationPaths.map(path => (
        <li key={path.label}>
          <NavLink to={path.path} style={setActiveStyle}>
            {path.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </Container>
);
