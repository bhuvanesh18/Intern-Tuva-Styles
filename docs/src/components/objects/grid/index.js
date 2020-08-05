import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import FloatBasedGrid from "./FloatBasedGrid";
import Nesting from "./Nesting";
import CenteringAColumn from "./CenteringAColumn";
import ColumnWidths from "./ColumnWidths";
import OffsetColumns from "./OffsetColumns";
import Gutters from "./Gutters";
import InlineBlockGrids from "./InlineBlockGrids";
import DisplayTableGrids from "./DisplayTableGrids";
import FlexboxGrids from "./FlexboxGrids";
import ResponsiveGrids from "./ResponsiveGrid";
import Containers from "./Container";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Grid"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/layout/grid.scss"
      />
      <Content />
      <Paragraph paragraph="The grid is 12 columns and percentage-based. The number of columns a container spans can be adjusted across breakpoints for responsive layouts. The grid system works with a variety of layout utilities to achieve different results." />

      <FloatBasedGrid />
      <Nesting />
      <CenteringAColumn />
      <ColumnWidths />
      <OffsetColumns />
      <Gutters />
      <InlineBlockGrids />
      <DisplayTableGrids />
      <FlexboxGrids />
      <ResponsiveGrids />
      <Containers />
    </div>
  );
}

export default index;
