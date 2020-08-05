import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function LargeProgress() {
  return (
    <React.Fragment>
      <Heading heading="Large progress" id="large-progress" />
      <Paragraph paragraph="Large progress bars are slightly taller than the default." />
      <CodeBlocks
        htmlcoderender={[
          <span className="Progress Progress--large">
            <span className="bg-blue-4" style={{ width: 50 + "%" }}></span>
          </span>
        ]}
        codeline={[
          `
        <span class="Progress Progress--large">
          <span class="bg-blue-4" style="width: 50%;"></span>
        </span>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default LargeProgress;
