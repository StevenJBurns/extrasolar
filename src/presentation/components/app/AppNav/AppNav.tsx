import { NavLink } from 'react-router';
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
      {validNavigationPaths.map(p => (
        <li key={p.label}>
          <NavLink to={p.path} style={setActiveStyle}>
            {p.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </Container>
);
