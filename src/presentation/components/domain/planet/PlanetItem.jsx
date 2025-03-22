/* React imports */
import React from 'react';

export const ItemPlanet = ({ planet }) => {
  return <li key={Math.random()}>{planet.name}</li>;
};
