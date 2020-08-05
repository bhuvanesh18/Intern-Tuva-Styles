import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import Usage from "./Usage";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Breadcrumbs"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/breadcrumb"
      />
      <Content />
      <Paragraph paragraph="Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:" />
      <ul className="ml-6">
        <li>Are many levels deep on a site</li>
        <li>Do not have a section-level navigation</li>
        <li>
          May need the ability to quickly go back to the previous (parent) page
        </li>
      </ul>
      <Usage />
    </div>
  );
}

export default index;
