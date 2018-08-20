import React from "react";

/* Style Imports */
import "../styles/PageAbout.css"

export const PageAbout = (props) => {
  return (
    <main id="main-about">
      <div id="div-content-wrapper">
        <h1>About</h1>
        <p>ExtraSolar has evolved as I've learned more about software development. The original version is <a href="http://stevenjburns-galvanize-q1-project.surge.sh">here</a>, my first major project as a student at <a href="https://www.galvanize.com/boulder">Galvanize</a> in Boulder, Colorado.</p>
        <p>Originally a collection of chained HTML5 pages with a splash of jQuery and CSS3, I was proud of getting it to work but not satisifed overall.</p>
        <p>While learning <a href="https://reactjs.org/">React</a>, I knew immediately the modern SPA approach would achieve the native-like look, feel and performance I envisioned. Toss in Redux to handle the volume of data, D3js for a simple layer of data presentation</p>
        <p>The current source code is <a href="https://github.com/StevenJBurns/extrasolar">here</a> and the live version is hosted straight from Github Pages.</p>
      </div>
    </main>
  );
};
