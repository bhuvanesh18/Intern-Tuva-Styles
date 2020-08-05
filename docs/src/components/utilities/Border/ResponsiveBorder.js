import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";
function ResponsiveBorder() {
  return (
    <React.Fragment>
      <Heading heading="Responsive borders" id="responsive-borders" />
      <Paragraph paragraph="You can adjust border widths on all sides or each side individually with responsive border utilities:" />
      <ul className="mt-2 ml-4">
        <li>
          border-(sm|md|lg|xl) adds borders on all sides at and above the
          breakpoint. The border-(sm|md|lg|xl) shorthand is also supported.
        </li>
        <li>
          border-(sm|md|lg|xl)-0 removes borders from all sides at and above the
          breakpoint.
        </li>
        <li>
          border-(sm|md|lg|xl)-(top|right|bottom|left) adds a border on the
          given side at and above the breakpoint.
        </li>
        <li>
          border-(sm|md|lg|xl)-(top|right|bottom|left)-0 the border from the
          given side at and above the breakpoint.
        </li>
      </ul>
      <CodeBlocks
        htmlcoderender={[
          <div className="border-top border-sm-right border-md-bottom border-md-top-0">
            .border-top
            <span className="d-none d-sm-inline">.border-sm-right </span>
            <span className="d-none d-md-inline">.border-md-bottom </span>
            <span className="d-none d-lg-inline">.border-md-top-0 </span>
          </div>
        ]}
        codeline={[
          `
          <div class="border-top border-sm-right border-md-bottom border-md-top-0">
            .border-top
            <span class="d-none d-sm-inline">.border-sm-right </span>
            <span class="d-none d-md-inline">.border-md-bottom </span>
            <span class="d-none d-lg-inline">.border-md-top-0 </span>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsiveBorder;
