/* React imports */
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* Component Imports */
import { StarItem } from "./StarItem";

/* Assets and Style Imports */
import "../../styles/StarList.css";
import "../../styles/StarItem.css";


export const StarList = ({ stars, isLoading, error }) => {
  if(stars) console.log(stars.length);

  if(!stars || isLoading) return (<h1>LOADING...</h1>);

  if(error) return (<h2>Data Error</h2>);

  // return (
  //   <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
  //     { stars.map(star => (<li className="star" key={Math.random()}>{star.pl_hostname}</li>)) }
  //   </ul>
  // );

  return (
    <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
      <TransitionGroup className="star-list">
        {
          stars.map(star => (
            <CSSTransition classNames="star" key={star.pl_hostname} timeout={500}>
              <li className="star">{star.pl_hostname}</li>
            </CSSTransition>
            )
          )
        }
      </TransitionGroup>
    </ul>
  );
};