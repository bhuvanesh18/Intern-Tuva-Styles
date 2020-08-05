import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function ResetMargins() {
  return (
    <React.Fragment>
      <Heading heading="Reset Margins" id="reset-margins" />
      <Paragraph paragraph="Reset margins built into typography elements or other components with m-0, mt-0, mr-0, mb-0, ml-0, mx-0, and my-0." />
      <CodeBlocks
        htmlcoderender={[
          <p className="mb-0 block-blue">No bottom margin on this paragraph.</p>
        ]}
        codeline={[
          `
          <p class="mb-0 block-blue">No bottom margin on this paragraph.</p>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResetMargins;
