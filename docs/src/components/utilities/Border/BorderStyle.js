import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BorderStyle() {
  return (
    <React.Fragment>
      <Heading heading="Border style" id="border-style" />
      <Paragraph paragraph="Use border-dashed to give an element a dashed border." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border border-dashed p-2">.border-dashed</div>
        ]}
        codeline={[
          `
          <div class="border border-dashed p-2">
            .border-dashed
          </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BorderStyle;
