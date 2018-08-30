/* React imports */
import React from "react";
import { CSSTransition } from "react-transition-group";

/* Asset and Style Imports */
import "../../styles/StarItem.css";

export const StarItem = ({star}) => (
  <li className="star" key={Math.random()}>{star.pl_hostname}</li>
);