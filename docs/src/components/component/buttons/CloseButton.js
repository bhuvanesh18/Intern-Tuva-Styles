import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function CloseButton() {
  return (
    <React.Fragment>
      <Heading heading="Close button" id="close-button" />
      <Paragraph paragraph="When using the octicon-x icon for a close button, add .close-button to remove the default button styles." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="close-button" type="button">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                className="octicon octicon-x"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                />
              </svg>
            </button>
          </div>
        ]}
        codeline={[
          `
    <button class="close-button" type="button">
      <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" /></svg>
    </button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default CloseButton;
