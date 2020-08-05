import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import FlexContainer from "./FlexContainer";
import FlexDirection from "./FlexDirection";
import FlexWrap from "./FlexWrap";
import JustifyContent from "./JustifyContent";
import AlignItems from "./AlignItems";
import AlignContent from "./AlignContent";
import Flex from "./Flex";
import AlignSelf from "./AlignSelf";
import Order from "./Order";
import ResponsiveFlexUtility from "./ResponsiveFlexUtility";
import ExampleComponent from "./ExampleComponent";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Flex Box"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/flexbox.scss"
      />
      <Content />
      <FlexContainer />
      <FlexDirection />
      <FlexWrap />
      <JustifyContent />
      <AlignItems />
      <AlignContent />
      <Flex />
      <AlignSelf />
      <Order />
      <ResponsiveFlexUtility />
      <ExampleComponent />
    </div>
  );
}

export default index;
