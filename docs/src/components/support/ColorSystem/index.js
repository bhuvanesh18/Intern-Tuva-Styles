import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import ColorPalette from "./ColorPalette";
import ColorUtilities from "./ColorUtilities";
import ColorVariables from "./ColorVariables";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Color System"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/color-system.scss"
      />
      <Content />
      <ColorPalette />
      <ColorUtilities />
      <ColorVariables />
    </div>
  );
}

export default index;
