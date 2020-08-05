import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import { Link } from "react-router-dom";
import ShortHand from "./ShortHand";
import UniformPadding from "./UniformPadding";
import DirectionalPadding from "./DirectionalPadding";
import ResponsivePadding from "./ResponsivePadding";
import ResponsiveContainerPadding from "./ResponsiveContainerPadding";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Padding"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/padding.scss"
      />
      <Content />
      <p className="mt-2">
        Padding utilities are based on a global
        <Link to="/support/spacing"> spacing scale </Link> which helps keep
        horizontal and vertical spacing consistent. These utilities help us
        reduce the amount of custom CSS that could share the same properties,
        and allows to achieve many different page layouts using the same styles.
      </p>
      <ShortHand />
      <UniformPadding />
      <DirectionalPadding />
      <ResponsivePadding />
      <ResponsiveContainerPadding />
    </div>
  );
}

export default index;
