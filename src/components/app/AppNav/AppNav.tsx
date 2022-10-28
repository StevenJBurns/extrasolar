import { NavLink } from 'react-router-dom';
import './AppNav.scss';

const setActiveStyle = ({ isActive }: { isActive: boolean}) => (
  { color: isActive ? 'green' : 'blue' }
);

export const AppNav = () => (
  <nav id="app-nav">
    <ul>
      <li>
        <NavLink to="/" style={setActiveStyle} end>HOME</NavLink>
      </li>
      <li>
        <NavLink to="/data" style={setActiveStyle}>DATA</NavLink>
      </li>
      <li>
        <NavLink to="/systems" style={setActiveStyle}>SOLAR SYSTEMS</NavLink>
      </li>
      <li>
        <NavLink to="/bookmarks" style={setActiveStyle}>BOOKMARKS</NavLink>
      </li>
      <li>
        <NavLink to="/about" style={setActiveStyle}>ABOUT</NavLink>
      </li>
    </ul>
  </nav>
);
