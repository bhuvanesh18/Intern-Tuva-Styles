import React from "react";
import { Heading, CodeBlocks } from "../../mini_components";
import { Link } from "react-router-dom";

function ResponsivePadding() {
  return (
    <React.Fragment>
      <Heading heading="Responsive padding" id="responsive-padding" />
      <p className="mt-2">
        All padding utilities can be adjusted per
        <Link to="/support/breakpoints"> breakpoint </Link>
        using the following formula: p-[direction]-[breakpoint]-[spacer]. Each
        responsive style is applied to the specified breakpoint and up.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="px-sm-2 px-lg-4 d-inline-block padding-green">
            <div className="d-inline-block block-blue">.px-sm-2 .px-lg-4</div>
          </div>
        ]}
        codeline={[
          `
        <div class="px-sm-2 px-lg-4 d-inline-block padding-green">
          <div class="d-inline-block block-blue">
            .px-sm-2 .px-lg-4
          </div>
        </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsivePadding;
