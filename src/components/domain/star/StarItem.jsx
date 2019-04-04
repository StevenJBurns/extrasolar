import React from "react";
import PropTypes from 'prop-types';
// import { Transition, CSSTransition } from "react-transition-group";
import ".StarItem.scss";

export const StarItem = ({ index, key, style }) => (
  <div key={key} style={style} className="row">
    <div className="content">
      <div>{this.list[index].name}</div>
      <div>{this.list[index].text}</div>
    </div>
  </div>
);