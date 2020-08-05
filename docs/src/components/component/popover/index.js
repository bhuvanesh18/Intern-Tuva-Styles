import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import Notes from "./Notes";
import BasicExample from "./BasicExample";
import LargeExample from "./LargeExample";
import Bottom from "./Bottom";
import Left from "./Left";
import Right from "./Right";
import Top from "./Top";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Popover"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/popover"
      />
      <Content />
      <Notes />
      <BasicExample />
      <LargeExample />
      <Bottom />
      <Left />
      <Right />
      <Top />
    </div>
  );
}

export default index;
