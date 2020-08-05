import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function NegativeMargins() {
  return (
    <React.Fragment>
      <Heading heading="Negative Margins" id="negative-margins" />
      <Paragraph paragraph="You can add negative margins to the top, right, bottom, or left of an item by adding a negative margin utility. The formula for this is: m[direction]-n[spacer]. This also works responsively, with the following formula: m[direction]-[breakpoint]-n[spacer]." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-inline-block margin-orange p-3">
            <div className="d-inline-block block-blue mt-n4 mr-lg-n4">
              .mt-n4 .mr-lg-n6
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-inline-block margin-orange p-3">
        <div class="d-inline-block block-blue mt-n4 mr-lg-n4">
          .mt-n4 .mr-lg-n6
        </div>
      </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default NegativeMargins;
