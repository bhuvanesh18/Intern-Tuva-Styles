import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function FadeIn() {
  return (
    <React.Fragment>
      <Heading heading="Fade In" id="fade-in" />
      <Paragraph paragraph="The .anim-fade-in class is used to fade in an element on the page. This will run once when the element is revealed." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-fade-in py-2 pl-4">
              This is an example for fade-in animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box">
          <h5 class="anim-fade-in py-2 pl-4">
            This is an example for fade-in animation.
          </h5>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FadeIn;
