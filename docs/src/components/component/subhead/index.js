import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import PlainSubhead from "./PlainSubhead";
import SpaciousSubhead from "./SpaciousSubhead";
import SubheadWithDescription from "./SubheadWithDescription";
import SubheadWithButtonAndLink from "./SubheadWithButtonAndLink";
import SubheadWithActionsAndDescription from "./SubheadWithActionsAndDescription";
import DangerZone from "./DangerZone";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Subhead"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/subhead"
      />
      <Content />
      <Paragraph paragraph="Use a heading element whenever possible as they can be used as navigation for assistive technologies, and avoid skipping levels." />

      <PlainSubhead />
      <SpaciousSubhead />
      <SubheadWithDescription />
      <SubheadWithButtonAndLink />
      <SubheadWithActionsAndDescription />
      <DangerZone />
    </div>
  );
}

export default index;
