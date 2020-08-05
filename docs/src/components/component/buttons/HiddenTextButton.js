import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function HiddenTextButton() {
  return (
    <React.Fragment>
      <Heading heading="Hidden text button" id="hidden-text-button" />
      <Paragraph paragraph="Use .hidden-text-expander to indicate and toggle hidden text." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix">
            <span className="hidden-text-expander">
              <button
                type="button"
                className="ellipsis-expander"
                aria-expanded="false"
              >
                &hellip;
              </button>
            </span>
          </div>
        ]}
        codeline={[
          `
          <span class="hidden-text-expander">
          <button type="button" class="ellipsis-expander" aria-expanded="false">&hellip;</button>
        </span>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can also make the expander appear inline by adding .inline." />
    </React.Fragment>
  );
}

export default HiddenTextButton;
