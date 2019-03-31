/* React imports */
import React from "react";
import { NavLink } from 'react-router-dom';
import './AppNav.scss';

export const AppNav = props => {
  const { activeStyle } = props;

  return (
    <nav id="app-nav">
      <ul>
        <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
        <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
        <li><NavLink to="/systems" activeStyle={activeStyle}>SOLAR SYSTEMS</NavLink></li>
        <li><NavLink to="/about" activeStyle={activeStyle}>ABOUT</NavLink></li>
      </ul>
    </nav>
  );
};