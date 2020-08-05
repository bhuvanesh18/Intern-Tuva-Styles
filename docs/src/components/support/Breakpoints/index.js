import React from "react";
import Content from "./Content";
import {
  ComponentHeading,
  Paragraph,
  TableData,
  TableHeading
} from "../../mini_components";
import { Link } from "react-router-dom";
import BreakpointsVarients from "./BreakpointsVarients";
import MediaQueryMixins from "./MediaQueryMixins";
import ResponsiveVariants from "./ResponsiveVariants";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Breakpoints"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/mixins/layout.scss"
      />
      <Content />
      <Paragraph paragraph="Our breakpoints are based on screen widths where our content starts to break. Since most of GitHub is currently a fixed-width with we use pixel widths to make it easy for us to match page widths for responsive and non-responsive pages." />
      <b>
        Our breakpoints may change as we move more of the product into
        responsive layouts.
      </b>
      <Paragraph paragraph="We use abbreviations for each breakpoint to keep the class names concis e. This abbreviated syntax is used consistently across responsive styles. Responsive styles allow you to change the styles properties at each breakpoint. For example, when using column widths for grid layouts, you can change specify that the width is 12 columns wide at the small breakpoint, and 6 columns wide from the large breakpoint:" />
      <pre className="p2 bg-gray">
        &lt;div class="col-sm-12 col-lg-6"&gt; ... &lt;/div&gt;
      </pre>
      <table className="border my-3">
        <thead>
          <tr>
            <TableHeading th="Breakpoint" />
            <TableHeading th="Syntax" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td="Small" />
            <TableData td="sm" />
            <TableData td="min-width: 544px" />
          </tr>
          <tr>
            <TableData td="Medium" />
            <TableData td="md" />
            <TableData td="min-width: 768px" />
          </tr>
          <tr>
            <TableData td="Large" />
            <TableData td="lg" />
            <TableData td="min-width: 1012px" />
          </tr>
          <tr>
            <TableData td="Extra-large" />
            <TableData td="xl" />
            <TableData td="min-width: 1280px" />
          </tr>
        </tbody>
      </table>
      <b>Note:</b>
      <Paragraph paragraph="The lg breakpoint matches our current page width of 980px including left and right padding of 16px ($spacer-3). This is so that content doesn't touch the edges of the window when resized." />
      <p>
        Responsive styles are available for
        <Link to="/utilities/margin"> margin</Link>,
        <Link to="/utilities/padding"> padding</Link>,
        <Link to="/utilities/layout"> layout</Link>,
        <Link to="/utilities/flexbox"> flexbox</Link>, and the
        <Link to="/utilities/grid"> grid </Link>
        system.
      </p>
      <BreakpointsVarients />
      <MediaQueryMixins />
      <ResponsiveVariants />
    </div>
  );
}

export default index;
