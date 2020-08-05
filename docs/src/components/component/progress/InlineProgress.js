import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function InlineProgress() {
  return (
    <React.Fragment>
      <Heading heading="Inline progress" id="inline-progress" />
      <Paragraph paragraph="For inline progress indicators, use the Progress and d-inline-flex with an inline element such as <span> and add a custom width style:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span className="text-small text-gray mr-2">4 of 16</span>
            <span
              className="Progress d-inline-flex"
              style={{ width: 160 + "px" }}
            >
              <div className="bg-blue-4" style={{ width: 25 + "%" }}></div>
            </span>
          </div>
        ]}
        codeline={[
          `
        <span class="text-small text-gray mr-2">4 of 16</span>
          <span class="Progress d-inline-flex" style="width: 160px">
            <div class="bg-blue-4" style="width: 25%"></div>
        </span>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default InlineProgress;
