import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import ColorVariables from "./ColorVariables";
import ColorSystemVariables from "./ColorSystemVariables";
import TypographyVariables from "./TypographyVariables";
import MiscVariables from "./MiscVariables";
import LayoutVariables from "./LayoutVariables";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Variables"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables"
      />
      <Content />
      <ColorVariables />
      <ColorSystemVariables />
      <TypographyVariables />
      <MiscVariables />
      <LayoutVariables />
    </div>
  );
}

export default index;
