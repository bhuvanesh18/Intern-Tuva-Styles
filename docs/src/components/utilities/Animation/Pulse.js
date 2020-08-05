import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Pulse() {
  return (
    <React.Fragment>
      <Heading heading="Pulse" id="pulse" />
      <Paragraph paragraph="The .anim-pulse class will pulse an element infinitely." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-pulse py-2 pl-4">
              This is an example for pulse animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box">
          <h5 class="anim-pulse py-2 pl-4">
            This is an example for pulse animation.
          </h5>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Pulse;
