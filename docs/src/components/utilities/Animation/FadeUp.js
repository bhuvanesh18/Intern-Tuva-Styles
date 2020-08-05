import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function FadeUp() {
  return (
    <React.Fragment>
      <Heading heading="Fade Up" id="fade-up" />
      <Paragraph paragraph="The .anim-fade-up class is used to reveal an element on the page by sliding it up from below the fold. You should use this in a container with overflow: hidden; or on the bottom of the page." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-fade-up py-2 pl-4">
              This is an example for fade-up animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box">
          <h5 class="anim-fade-up py-2 pl-4">
            This is an example for fade-up animation.
          </h5>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FadeUp;
