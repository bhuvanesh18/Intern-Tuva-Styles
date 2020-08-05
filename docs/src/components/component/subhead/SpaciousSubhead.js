import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SpaciousSubhead() {
  return (
    <React.Fragment>
      <Heading heading="Spacious subhead" id="spacious-subhead" />
      <Paragraph paragraph="To add a top margin to the Subhead, use .Subhead--spacious. This is useful for separating sections on a settings page." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead Subhead--spacious">
              <div className="Subhead-heading">Spacious subhead</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="Subhead Subhead--spacious">
          <div class="Subhead-heading">Spacious subhead</div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SpaciousSubhead;
