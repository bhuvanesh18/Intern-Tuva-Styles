import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BlockButton() {
  return (
    <React.Fragment>
      <Heading heading="Block button" id="block-button" />
      <Paragraph paragraph="Make any button full-width by adding .btn-block. It adds width: 100%;, changes the display from inline-block to block, and centers the button text." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn btn-block mb-2" type="button">
              Block button
            </button>
            <button className="btn btn-sm btn-block" type="button">
              Small block button
            </button>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-block mb-2" type="button">Block button</button>
      <button class="btn btn-sm btn-block" type="button">Small block button</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BlockButton;
