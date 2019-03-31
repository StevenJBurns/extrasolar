/* React imports */
import React from "react";
// import { Transition, CSSTransition } from "react-transition-group";

/* Asset and Style Imports */
// import "../../styles/StarItem.css";

export const StarItem = ({ index, key, style }) => (
    // <div className="star" key={Math.random()}>{star.pl_hostname}</div>

    <div key={key} style={style} className="row">
      <div className="content">
        <div>{this.list[index].name}</div>
        <div>{this.list[index].text}</div>
      </div>
    </div>
);