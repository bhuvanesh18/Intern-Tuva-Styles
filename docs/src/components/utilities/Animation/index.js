import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import FadeIn from "./FadeIn";
import FadeOut from "./FadeOut";
import FadeUp from "./FadeUp";
import FadeDown from "./FadeDown";
import ScaleIn from "./ScaleIn";
import GrowX from "./GrowX";
import Pulse from "./Pulse";
import HoverAnimation from "./HoverAnimation";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Animations"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/animations.scss"
      />
      <Content />
      <Paragraph paragraph='Animations are reusable animation classes that you can use to emphasize an element. All of these animations will animate if you toggle their visibility using the "Toggle" button.' />
      <FadeIn />
      <FadeOut />
      <FadeUp />
      <FadeDown />
      <ScaleIn />
      <GrowX />
      <Pulse />
      <HoverAnimation />
    </div>
  );
}

export default index;
