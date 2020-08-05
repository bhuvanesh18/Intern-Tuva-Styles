import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function DashedBorder() {
  return (
    <React.Fragment>
      <Heading heading="Dashed border" id="dashed-border" />
      <Paragraph paragraph="Use the border-dashed utility to apply a dashed border to a box." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box border-dashed p-2">
            A box with a dashed border
          </div>
        ]}
        codeline={[
          `
        <div class="Box border-dashed p-2">
          A box with a dashed border
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DashedBorder;
