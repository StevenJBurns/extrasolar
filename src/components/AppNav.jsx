/* React imports */
import React from "react";
import { NavLink } from 'react-router-dom';


export const AppNav = ({ activeStyle }) => {
  return (
    <nav id="app-nav">
      <ul>
        <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
        <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
        <li><NavLink to="/visualization" activeStyle={activeStyle}>SOLAR SYSTEMS</NavLink></li>
        <li><NavLink to="/about" activeStyle={activeStyle}>ABOUT</NavLink></li>
      </ul>
    </nav>
  );
};