/* React imports */
import React from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

import { AutoSizer, List } from "react-virtualized";

/* Component Imports */
// import { StarItem } from "./StarItem";

/* Assets and Style Imports */
import "../../styles/StarList.css";
// import "../../styles/StarItem.css";


export const StarList = ({ stars, isLoading, error }) => {
  if (!stars || isLoading) return (<h1>LOADING...</h1>);

  if (error) return (<h2>Data Error</h2>);
  
  const rowRenderer = ({ key, index, isScrolling, isVisible, style}) => {
    return (
      <div key={key} className="div-star-item" style={null}>{stars[index]["pl_hostname"]}</div>
    );
  }

  console.log(stars.length);
  
  return (
    <AutoSizer>
      {
        width => (<List width={320} height={240} rowHeight={60} rowCount={stars.length} rowRenderer={rowRenderer} />)
      }
    </AutoSizer>
  );
};