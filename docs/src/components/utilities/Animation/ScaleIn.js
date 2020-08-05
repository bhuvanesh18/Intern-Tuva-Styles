import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function ScaleIn() {
  return (
    <React.Fragment>
      <Heading heading="Scale In" id="scale-in" />
      <Paragraph paragraph="The .anim-scale-in class will scale the element in. This is useful on menus when you want them to appear more friendly." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <h5 className="anim-scale-in py-2 pl-4">
              This is an example for scale-in animation.
            </h5>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
        <h5 class="anim-scale-in py-2 pl-4">
          This is an example for scale-in animation.
        </h5>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ScaleIn;
