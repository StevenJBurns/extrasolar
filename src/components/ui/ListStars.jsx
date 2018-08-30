/* React imports */
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* Component Imports */
import { StarItem } from "./StarItem.jsx";

/* Assets and Style Imports */
import "../../styles/ListStars.css";
import "../../styles/StarItem.css";


export const ListStars = ({ stars, isLoading, error }) => {
  if(stars) console.log(stars.length);

  if(!stars || isLoading) return (<h1>LOADING...</h1>);

  if(error) return (<h2>Data Error</h2>);

  // return (
  //   <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
  //     { stars.map(star => (<li key={Math.random()}>{star.pl_hostname}</li>)) }
  //   </ul>
  // );

  return (
    <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
      { stars.map(star => (<StarItem className="star" star={star} />)) }
    </ul>
  );
};