import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SmallProgress() {
  return (
    <React.Fragment>
      <Heading heading="Small progress" id="small-progress" />
      <Paragraph paragraph="Large progress bars are shorter than the default." />
      <CodeBlocks
        htmlcoderender={[
          <span className="Progress Progress--small">
            <span className="bg-blue-4" style={{ width: 50 + "%" }}></span>
          </span>,
        ]}
        codeline={[
          `
        <span class="Progress Progress--small">
          <span class="bg-blue-4" style="width: 50%;"></span>
        </span>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SmallProgress;
