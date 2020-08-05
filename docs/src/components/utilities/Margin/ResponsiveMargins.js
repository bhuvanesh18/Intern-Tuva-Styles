import React from "react";
import { Heading, CodeBlocks } from "../../mini_components";
import { Link } from "react-router-dom";

function ResponsiveMargins() {
  return (
    <React.Fragment>
      <Heading heading="Responsive Margins" id="responsive-margins" />
      <p className="mt-2">
        All margin utilities, except mx-auto, can be adjusted per
        <Link to="/objects/grid#breakpoints"> breakpoint </Link>
        using the following formula: m[direction]-[breakpoint]-[spacer]. Each
        responsive style is applied to the specified breakpoint and up.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="d-inline-block margin-orange">
            <div className="mx-sm-2 mx-lg-4 d-inline-block block-blue">
              .mx-sm-2 .mx-lg-4
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="d-inline-block margin-orange">
          <div class="mx-sm-2 mx-lg-4 d-inline-block block-blue">
            .mx-sm-2 .mx-lg-4
          </div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsiveMargins;
