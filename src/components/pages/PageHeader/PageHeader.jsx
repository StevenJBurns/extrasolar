import React from "react";
import AppLogo from "../../../assets/logo/extrasolar.png";
import { AudioToggleButton } from "../../ui/AudioToggleButton";
import './PageHeader.scss';

export const PageHeader = () => {
  return (
    <header id="app-header">
      <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
      <div id="divAppTaglines">
        <h1 id="h1-header">ExtraSolar</h1>
        <h4 id="h2-header">Visualization of exoplanets in distant solar systems</h4>
      </div>
      <AudioToggleButton />
    </header>
  );
};

export default PageHeader;
