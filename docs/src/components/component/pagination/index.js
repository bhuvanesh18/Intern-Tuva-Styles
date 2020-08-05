import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import PreviousNextPagination from "./PreviousNextPagination";
import NumberedPagination from "./NumberedPagination";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Pagination"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/pagination"
      />
      <Content />
      <Paragraph paragraph="Use the pagination component to apply button styles to a connected set of links that go to related pages (for example, previous, next, or page numbers)." />
      <PreviousNextPagination />
      <NumberedPagination />
    </div>
  );
}

export default index;
