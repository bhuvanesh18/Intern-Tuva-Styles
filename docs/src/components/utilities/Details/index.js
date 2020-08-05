import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import FullscreenClickArea from "./FullscreenClickArea";
import DarkenedFullscreenClickArea from "./DarkenedFullscreenClickArea";
import CustomCaret from "./CustomCaret";
import ButtonStyleDetailSummary from "./ButtonStyleDetailSummary";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Details"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/details.scss"
      />
      <Content />
      <Paragraph paragraph="Details classes are created to enhance the native behaviors of <details>." />
      <FullscreenClickArea />
      <DarkenedFullscreenClickArea />
      <CustomCaret />
      <ButtonStyleDetailSummary />
    </div>
  );
}

export default index;
