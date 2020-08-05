import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading
} from "./../../mini_components";
import Alignment from "./Alignment";
import Dividers from "./Dividers";
import Headers from "./Headers";
import Dark from "./Dark";

function Options() {
  return (
    <React.Fragment>
      <Heading heading="Options" id="options" />
      <Alignment />
      <Dividers />
      <Headers />
      <Dark />
    </React.Fragment>
  );
}

export default Options;
