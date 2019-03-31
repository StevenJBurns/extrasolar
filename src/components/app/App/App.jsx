import React from 'react';
import './App.scss';

export const App = props => {
  return (
    <React.Fragment>
      { props.children }
    </React.Fragment>
  );
};
