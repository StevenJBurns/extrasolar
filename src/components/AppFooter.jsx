/* React imports */
import React from "react";

/* App specific imports */
// import AudioButton from "./AudioButton";

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


export const AppFooter = (props) => {
  return (
    <footer id="app-footer">
      <div id="div-logo-wrapper">
        <FontAwesomeIcon className="fa-logo" icon={ faTwitter } size="2x" />
        <FontAwesomeIcon className="fa-logo" icon={ faGithub } size="2x" />
      </div>
      <h4>&copy;2018 &bull; Steven J Burns</h4>
    </footer>
  );
}