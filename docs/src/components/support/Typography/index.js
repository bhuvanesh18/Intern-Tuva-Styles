import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import TypeScale from "./TypeScale";
import TypographyVariables from "./TypographyVariables";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Typography"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/typography.scss"
      />
      <Content />
      <TypeScale />
      <TypographyVariables />
    </div>
  );
}

export default index;
