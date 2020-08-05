import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function DefaultBorder() {
  return (
    <React.Fragment>
      <Heading heading="Default Border" id="default-border" />
      <Paragraph paragraph="The default border utility applies a solid, 1px border, with a default gray color." />
      <CodeBlocks
        htmlcoderender={[<div className="border">.border</div>]}
        codeline={[
          `
        <div class="border">
        .border
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Borders can be applied to a specific edge or to the X and Y axes individually:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex mb-3">
              <div className="border-left col-3">.border-left</div>
              <div className="border-top col-3">.border-top</div>
              <div className="border-bottom col-3">.border-bottom</div>
              <div className="border-right col-3">.border-right</div>
            </div>
            <div className="border-x">.border-x</div>
            <div className="border-y">.border-y</div>
          </div>
        ]}
        codeline={[
          `
          <div class="d-flex mb-3">
          <div class="border-left col-3">
            .border-left
          </div>
          <div class="border-top col-3">
            .border-top
          </div>
          <div class="border-bottom col-3">
            .border-bottom
          </div>
          <div class="border-right col-3">
            .border-right
          </div>
          </div>
          <div class="border-x">
            .border-x
          </div>
          <div class="border-y">
            .border-y
          </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Remove borders from all sides or a single side with .border-0, .border-top-0, .border-right-0, .border-bottom-0, .border-left-0." />
      <CodeBlocks
        htmlcoderender={[<div className="Box border-top-0">.border-top-0</div>]}
        codeline={[
          `
    <div class="Box border-top-0">
    .border-top-0
    </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DefaultBorder;
