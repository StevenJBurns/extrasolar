/* React imports */
import React from "react";


export const ItemStar = ({star}) => {
  return (
    <li key={Math.random()}>{star.name}</li>
  );
};