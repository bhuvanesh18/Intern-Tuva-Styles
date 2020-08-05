import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import BasicExamples from "./BasicExamples";
import Options from "./Options";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Dropdown"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/dropdown"
      />
      <Content />
      <Paragraph paragraph="Dropdowns are lightweight context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu." />
      <BasicExamples />
      <Options />
    </div>
  );
}

export default index;
