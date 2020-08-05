import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import DefaultBorder from "./DefaultBorder";
import BorderColor from "./BorderColor";
import BorderWithAlphaTransparency from "./BorderWithAlphaTransparency";
import BorderStyle from "./BorderStyle";
import RoundedCorner from "./RoundedCorner";
import ResponsiveBorder from "./ResponsiveBorder";
import BorderColorUtility from "./BorderColorUtility";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Border"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/borders.scss"
      />
      <Content />
      <DefaultBorder />
      <BorderColor />
      <BorderWithAlphaTransparency />
      <BorderStyle />
      <RoundedCorner />
      <ResponsiveBorder />
      <BorderColorUtility />
    </div>
  );
}

export default index;
