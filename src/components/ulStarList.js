/* React imports */
import React from "react";

/* */
import "../styles/ListStars.css";


export const ListStars = (props) => {
  const { stars } = props;
  // console.log(stars);


  return (
    <ul id="ul-star-list" style={{ backgroundColor: "#5F5F5F", margin: 64 + "px", padding: 12 + "px" }}>
      { stars.map(star => (<li key={Math.random()}>{star.pl_hostname}</li>)) }
    </ul>
  );
};