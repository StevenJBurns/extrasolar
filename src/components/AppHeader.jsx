/* React imports */
import React from "react";

/* App specific imports */
import AudioButton from "./AudioButton";

export const AppHeader = (props) => {
  return (
    <header id="app-header">
      <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
      <div id="divAppTaglines">
        <h1 id="h1-header">ExtraSolar</h1>
        <h3 id="h2-header">Visualization of distant solar systems and their exoplanets</h3>
      </div>
      <AudioButton isAudioMuted={ isAudioMuted } audioSource={ currentAudioSource } />
    </header>
  );
}