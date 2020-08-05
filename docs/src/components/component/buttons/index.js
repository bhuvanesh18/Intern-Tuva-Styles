import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import DefaultButton from "./DefaultButton";
import PrimaryButton from "./PrimaryButton";
import DangerButton from "./DangerButton";
import OutlineButton from "./OutlineButton";
import LargeButton from "./LargeButton";
import DisabledButton from "./DisabledButton";
import BlockButton from "./BlockButton";
import LinkButton from "./LinkButton";
import InvisibleButton from "./InvisibleButton";
import OcticonButton from "./OcticonButton";
import CloseButton from "./CloseButton";
import ButtonWithCount from "./ButtonWithCount";
import ButtonGroups from "./ButtonGroups";
import HiddenTextButton from "./HiddenTextButton";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Buttons"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/buttons"
      />
      <Content />
      <Paragraph paragraph="Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another." />
      <DefaultButton />
      <PrimaryButton />
      <DangerButton />
      <OutlineButton />
      <LargeButton />
      <DisabledButton />
      <BlockButton />
      <LinkButton />
      <InvisibleButton />
      <OcticonButton />
      <CloseButton />
      <ButtonWithCount />
      <ButtonGroups />
      <HiddenTextButton />
    </div>
  );
}

export default index;
