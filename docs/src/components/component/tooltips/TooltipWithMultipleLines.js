import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function TooltipWithMultipleLines() {
  return (
    <React.Fragment>
      <Heading
        heading="Tooltip with multiple lines"
        id="tooltip-with-multiple-lines"
      />
      <Paragraph paragraph="Use .tooltipped-multiline when you have long content. This style has some limitations: you cannot pre-format the text with newlines, and tooltips are limited to a max-width of 250px." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-flex flex-justify-center pt-6">
            <span
              className="tooltipped tooltipped-n tooltipped-multiline m-2 p-2 border"
              aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines."
            >
              .tooltipped-multiline
            </span>
          </div>
        ]}
        codeline={[
          `
        <div class="d-flex flex-justify-center pt-6">
          <span class="tooltipped tooltipped-n tooltipped-multiline m-2 p-2 border" aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines.">
            .tooltipped-multiline
          </span>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TooltipWithMultipleLines;
