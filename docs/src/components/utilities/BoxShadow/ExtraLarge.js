import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function ExtraLarge() {
  return (
    <React.Fragment>
      <Heading heading="Extra Large" id="extra-large" />
      <Paragraph paragraph="Extra large box shadows are even more diffused." />
      <CodeBlocks
        htmlcoderender={[
          <div className="box-shadow-extra-large p-3">
            .box-shadow-extra-large
          </div>
        ]}
        codeline={[
          `
          <div class="box-shadow-extra-large p-3">
            .box-shadow-extra-large
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ExtraLarge;
