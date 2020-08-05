import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import { Link } from "react-router-dom";
import NamingConversion from "./NamingConversion";
import UniformMargin from "./UniformMargin";
import DirectionalMargin from "./DirectionalMargin";
import CenterElement from "./CenterElement";
import ResetMargins from "./ResetMargins";
import ResponsiveMargins from "./ResponsiveMargins";
import NegativeMargins from "./NegativeMargins";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Margin"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/margin.scss"
      />
      <Content />
      <p className="mt-2">
        Margin utilities are based on a global
        <Link to="/support/spacing"> spacing scale </Link> which helps keep
        horizontal and vertical spacing consistent. These utilities help us
        reduce the amount of custom CSS that share the same properties, and
        allows to achieve many different page layouts using the same styles.
      </p>
      <NamingConversion />
      <UniformMargin />
      <DirectionalMargin />
      <CenterElement />
      <ResetMargins />
      <ResponsiveMargins />
      <NegativeMargins />
    </div>
  );
}

export default index;
