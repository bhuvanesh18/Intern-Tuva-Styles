import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import BasicExample from "./BasicExample";
import CircleBadge from "./CircleBadge";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Avatars"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/avatars"
      />
      <Content />
      <Paragraph paragraph="Avatars are custom photos, uploaded by users, or generated as Identicons as a placeholder." />
      <BasicExample />
      <CircleBadge />
    </div>
  );
}

export default index;
