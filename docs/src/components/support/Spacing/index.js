import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import SpacingScale from "./SpacingScale";
import EmBasedSpacing from "./EmBasedSpacing";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Spacing"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/layout.scss"
      />
      <Content />
      <SpacingScale />
      <EmBasedSpacing />
    </div>
  );
}

export default index;
