/* React imports */
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { List } from "react-virtualized";

/* Component Imports */
import { StarItem } from "./StarItem";

/* Assets and Style Imports */
import "../../styles/StarList.css";
import "../../styles/StarItem.css";


export const StarList = ({ stars, isLoading, error }) => {
  if (!stars || isLoading) return (<h1>LOADING...</h1>);

  if (error) return (<h2>Data Error</h2>);
  
  const rowRenderer = ({ key, index, isScrolling, isVisible, style}) =>
    (<div key={key} style={style}>{stars[index]["pl_hostname"]}</div>);
  
  return (
      <List width={400} height={240} rowHeight={40} rowCount={stars.length} rowRenderer={rowRenderer} />
    // <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
    //   <TransitionGroup className="star-list">
    //     {
    //       stars.map(star => (
    //         <CSSTransition classNames="star" key={star.pl_hostname} timeout={500}>
    //           <li className="star">{star.pl_hostname}</li>
    //         </CSSTransition>
    //         )
    //       )
    //     }
    //   </TransitionGroup>
    // </ul>
  );
};