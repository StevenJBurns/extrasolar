/* React and Redux Imports */
import React from "react";

/* App specific imports */
import AppLogo from "../assets/logo/extrasolar.png";
import ConnectedAudioButton from "../containers/ConnectedAudioButton.js";

export const AppHeader = () => {
  return (
    <header id="app-header">
      <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
      <div id="divAppTaglines">
        <h1 id="h1-header">ExtraSolar</h1>
        <h4 id="h2-header">Visualization of exoplanets in distant solar systems</h4>
      </div>
      <ConnectedAudioButton />
      {/* <AudioButton /> */}
    </header>
  );
}