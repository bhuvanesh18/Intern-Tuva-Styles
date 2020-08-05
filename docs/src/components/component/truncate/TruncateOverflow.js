import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function TruncateOverflow() {
  return (
    <React.Fragment>
      <Heading heading="Truncate overflow" id="truncate-overflow" />
      <Paragraph paragraph="Combine the css-truncate and css-truncate-overflow classes to prevent text that overflows from wrapping." />
      <CodeBlocks
        htmlcoderender={[
          <div className="col-3">
            <div
              className="css-truncate css-truncate-overflow border p-3"
              title="branch-name-that-is-really-long"
            >
              branch-name-that-is-really-long
            </div>
            <div className="border p-3 mt-3">
              branch-name-that-is-really-long
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="col-3">
          <div class="css-truncate css-truncate-overflow border p-3"
            title="branch-name-that-is-really-long">
            branch-name-that-is-really-long
          </div>
          <div class="border p-3 mt-3">
            branch-name-that-is-really-long
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can also make the expander appear inline by adding .inline." />
    </React.Fragment>
  );
}

export default TruncateOverflow;
