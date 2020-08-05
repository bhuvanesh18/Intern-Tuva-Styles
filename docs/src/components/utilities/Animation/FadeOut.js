import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function FadeOut() {
  return (
    <React.Fragment>
      <Heading heading="Fade Out" id="fade-out" />
      <Paragraph paragraph="The .anim-fade-out class is used to fade out an element on the page. This will run once when the element is revealed." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-fade-out py-2 pl-4">
              This is an example for fade-out animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box">
          <h5 class="anim-fade-out py-2 pl-4">
            This is an example for fade-out animation.
          </h5>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FadeOut;
