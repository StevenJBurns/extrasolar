/* React imports */
import React from "react";
import { Switch, Route, NavLink } from 'react-router-dom';

/* App specific imports */
// import AudioButton from "./AudioButton";


export const AppNav = ({ activeStyle }) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink></li>
        <li><NavLink to="/data" activeStyle={activeStyle}>DATA</NavLink></li>
        <li><NavLink to="/visualization" activeStyle={activeStyle}>VISUALIZATION</NavLink></li>
        <li><NavLink to="/about" activeStyle={activeStyle}>ABOUT</NavLink></li>
      </ul>
    </nav>
  );
};