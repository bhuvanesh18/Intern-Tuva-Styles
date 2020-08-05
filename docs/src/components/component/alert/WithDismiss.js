import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function WithDismiss() {
  return (
    <React.Fragment>
      <Heading heading="With dismiss" id="with-dismiss" />
      <Paragraph paragraph="Add a JavaScript enabled dismiss (close) icon on the right of any flash message." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash">
            <button className="flash-close js-flash-close" type="button">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                className="octicon octicon-x"
                aria-label="Close"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                />
              </svg>
            </button>
            Dismissable flash message goes here.
          </div>
        ]}
        codeline={[
          `
        <div class="flash">
          <button class="flash-close js-flash-close" type="button">
            <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-label="Close" role="img">
              <path
                fill-rule="evenodd"
                d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
              />
            </svg>
          </button>
          Dismissable flash message goes here.
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default WithDismiss;
