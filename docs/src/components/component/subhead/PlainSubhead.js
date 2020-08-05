import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function PlainSubhead() {
  return (
    <React.Fragment>
      <Heading heading="Plain Subhead" id="plain-subhead" />
      <Paragraph paragraph="The basic Subhead consists of a .Subhead container, which has a light gray bottom border. Use .Subhead-heading for the heading itself. It's an <h2> sized heading with normal font-weight." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead">
              <div className="Subhead-heading">Plain subhead</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="Subhead">
          <div class="Subhead-heading">Plain subhead</div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default PlainSubhead;
