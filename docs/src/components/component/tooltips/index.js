import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import ImplementationAndAccessibility from "./ImplementationAndAccessibility";
import TooltipDirection from "./TooltipDirection";
import TooltipAlignment from "./TooltipAlignment";
import TooltipWithMultipleLines from "./TooltipWithMultipleLines";
import TooltipWithNoDelay from "./TooltipWithNoDelay";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Tooltips"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/tooltips"
      />
      <Content />
      <Paragraph paragraph="Add tooltips built entirely in CSS to nearly any element." />
      <ImplementationAndAccessibility />
      <TooltipDirection />
      <TooltipAlignment />
      <TooltipWithMultipleLines />
      <TooltipWithNoDelay />
    </div>
  );
}

export default index;
