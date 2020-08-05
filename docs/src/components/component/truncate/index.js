import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import TruncateOverflow from "./TruncateOverflow";
import TruncateTarget from "./TruncateTarget";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Truncate"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/truncate"
      />
      <Content />
      <Paragraph paragraph="The css-truncate class will shorten text with an ellipsis. Always add a title attribute to the truncated element so the full text remains accessible." />
      <TruncateOverflow />
      <TruncateTarget />
    </div>
  );
}

export default index;
