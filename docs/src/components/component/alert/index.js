import React from "react";
import Content from "./Content";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Default from "./Default";
import Variations from "./Variations";
import WithIcon from "./WithIcon";
import WithDismiss from "./WithDismiss";
import WithActionIcon from "./WithActionIcon";
import FullWidthFlash from "./FullWidthFlash";
import FlashBanner from "./FlashBanner";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Alerts"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/alerts"
      />
      <Content />
      <Paragraph paragraph="Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time." />
      <Default />
      <Variations />
      <WithIcon />
      <WithDismiss />
      <WithActionIcon />
      <FullWidthFlash />
      <FlashBanner />
    </div>
  );
}

export default index;
