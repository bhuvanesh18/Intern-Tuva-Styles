import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Display from "./Display";
import Visibility from "./Visibility";
import Overflow from "./Overflow";
import Floats from "./Floats";
import Alignment from "./Alignment";
import WidthHeight from "./WidthHeight";
import Position from "./Position";
import MediaObject from "./MediaObject";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Layout"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/layout.scss"
      />
      <Content />
      <Paragraph paragraph="Change the document layout with display, float, alignment, and other utilities." />
      <Display />
      <Visibility />
      <Overflow />
      <Floats />
      <Alignment />
      <WidthHeight />
      <Position />
      <MediaObject />
    </div>
  );
}

export default index;
