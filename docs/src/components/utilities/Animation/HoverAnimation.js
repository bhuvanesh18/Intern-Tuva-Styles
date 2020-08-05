import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function HoverAnimation() {
  return (
    <React.Fragment>
      <Heading heading="Hover animation" id="hover-animation" />
      <Paragraph paragraph="The .hover-grow class will increase the scale of the element upon hover." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box hover-grow">
            <h5 className="py-2 pl-4">
              This is an example for hover-grow animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
          <div class="Box hover-grow">
          <h5 class="py-2 pl-4">
            This is an example for hover-grow animation.
          </h5>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default HoverAnimation;
