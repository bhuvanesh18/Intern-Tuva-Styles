import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Default from "./Default";
import Medium from "./Medium";
import Large from "./Large";
import ExtraLarge from "./ExtraLarge";
import RemoveBoxShadow from "./RemoveBoxShadow";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Box Shadow"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/box-shadow.scss"
      />
      <Content />
      <Paragraph paragraph="Box shadows are used to make content appear elevated. They are typically applied to containers of content that users need to pay attention to or content that appears on top of (overlapping) other elements on the page (like a pop-over or modal)." />
      <Default />
      <Medium />
      <Large />
      <ExtraLarge />
      <RemoveBoxShadow />
    </div>
  );
}

export default index;
