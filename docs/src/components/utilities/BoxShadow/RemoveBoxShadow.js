import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function RemoveBoxShadow() {
  return (
    <React.Fragment>
      <Heading heading="Remove a box shadow" id="remove-a-box-shadow" />
      <Paragraph paragraph="Additionally there is a box-shadow-none class that removes box-shadow:" />
      <CodeBlocks
        htmlcoderender={[
          <div className="box-shadow-large box-shadow-none p-3">
            .box-shadow-none
          </div>
        ]}
        codeline={[
          `
          <div class="box-shadow-large box-shadow-none p-3">
            .box-shadow-none
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default RemoveBoxShadow;
