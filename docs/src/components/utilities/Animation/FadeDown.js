import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function FadeDown() {
  return (
    <React.Fragment>
      <Heading heading="Fade Down" id="fade-down" />
      <Paragraph paragraph="The .anim-fade-down class is used to slide an element down hiding it. You should use this in a container with overflow: hidden; or on the bottom of the page." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-fade-down py-2 pl-4">
              This is an example for fade-down animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box">
          <h5 class="anim-fade-down py-2 pl-4">
            This is an example for fade-down animation.
          </h5>
          </div>`
        ]}
        lang="html"
        style="overflow-scroll"
      />
    </React.Fragment>
  );
}

export default FadeDown;
