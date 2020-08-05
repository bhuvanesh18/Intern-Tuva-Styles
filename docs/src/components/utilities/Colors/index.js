import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import BackgroundColors from "./BackgroundColors";
import TextColor from "./TextColor";
import WhiteBackground from "./WhiteBackground";
import LinkColors from "./LinkColors";
import BorderColors from "./BorderColors";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Colors"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/colors.scss"
      />
      <Content />
      <Paragraph paragraph="Use color utilities to apply color to the background of elements, text, and borders." />
      <BackgroundColors />
      <TextColor />
      <WhiteBackground />
      <LinkColors />
      <BorderColors />
    </div>
  );
}

export default index;
