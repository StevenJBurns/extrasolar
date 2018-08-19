/* React imports */
import React from "react";

/* Redux imports */
import store from "../redux/store";

/* App specific imports */
import AppLogo from "../assets/logo/extrasolar.png";
import AudioButton from "./AudioButton.jsx";

export const AppHeader = (props) => {
  const { isAudioMuted, currentAudioSource } = store.getState();

  return (
    <header id="app-header">
      <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
      <div id="divAppTaglines">
        <h1 id="h1-header">ExtraSolar</h1>
        <h3 id="h2-header">Visualization of exoplanets in distant solar systems</h3>
      </div>
      <AudioButton isAudioMuted={ isAudioMuted } audioSource={ currentAudioSource } />
    </header>
  );
}