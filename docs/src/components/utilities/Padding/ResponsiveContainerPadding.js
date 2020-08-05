import React from "react";
import { Heading, CodeBlocks, Paragraph } from "../../mini_components";
import { Link } from "react-router-dom";

function ResponsiveContainerPadding() {
  return (
    <React.Fragment>
      <Heading
        heading="Responsive container padding"
        id="responsive-container-padding"
      />
      <Paragraph paragraph=".p-responsive is a padding class that adds padding on the left and right sides of an element. On small screens, it gives the element padding of $spacer-3, on mid-sized screens it gives the element padding of $spacer-6, and on large screens, it gives the element padding of $spacer-3." />
      <p className="mt-2">
        It is intended to be used with
        <Link to="/objects/grid#containers"> container styles </Link>.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="container-lg p-responsive">
            <div className="border">.container-lg .p-responsive</div>
          </div>
        ]}
        codeline={[
          `
        <div class="container-lg p-responsive">
          <div class="border">
            .container-lg .p-responsive
          </div>
        </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsiveContainerPadding;
