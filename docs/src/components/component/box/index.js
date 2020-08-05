import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import Box from "./Box";
import BoxElements from "./BoxElements";
import BoxPaddingDensity from "./BoxPaddingDensity";
import BlueBoxTheme from "./BlueBoxTheme";
import BlueBoxHeaderTheme from "./BlueBoxHeaderTheme";
import BoxDangerTheme from "./BoxDangerTheme";
import RowThemes from "./RowThemes";
import DashedBorder from "./DashedBorder";
import BoxesWithFlashAlerts from "./BoxesWithFlashAlerts";
import BoxesWithIcon from "./BoxesWithIcon";
import BoxHeaderWithCounter from "./BoxHeaderWithCounter";
import FormElementsAndButtonsInBoxes from "./FormElementsAndButtonsInBoxes";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Box"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/box"
      />
      <Content />
      <Paragraph paragraph="The .Box component can be used for something as simple as a rounded corner box, or more complex lists and forms. It includes optional modifiers for padding density and color themes." />
      <Box />
      <BoxElements />
      <BoxPaddingDensity />
      <BlueBoxTheme />
      <BlueBoxHeaderTheme />
      <BoxDangerTheme />
      <RowThemes />
      <DashedBorder />
      <BoxesWithFlashAlerts />
      <BoxesWithIcon />
      <BoxHeaderWithCounter />
      <FormElementsAndButtonsInBoxes />
    </div>
  );
}

export default index;
