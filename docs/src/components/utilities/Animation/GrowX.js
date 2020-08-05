import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function GrowX() {
  return (
    <React.Fragment>
      <Heading heading="Grow X" id="grow-x" />
      <Paragraph paragraph="The .anim-grow-x class will grow an element width from 0-:100: real quick." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-grow-x py-2 pl-4">
              This is an example for grow-x animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box">
          <h5 class="anim-grow-x py-2 pl-4">
            This is an example for grow-x animation.
          </h5>
          </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default GrowX;
