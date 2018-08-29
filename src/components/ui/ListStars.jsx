/* React imports */
import React from "react";

/* Assets and Style Imports */
import "../../styles/ListStars.css";


export const ListStars = ({ stars, isLoading, error }) => {
  if(!stars || isLoading) return (<h1>LOADING...</h1>);

  if(error) return (<h2>Data Error</h2>);

  return (
    <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
      { stars.map(star => (<li key={Math.random()}>{star.pl_hostname}</li>)) }
    </ul>
  );
};