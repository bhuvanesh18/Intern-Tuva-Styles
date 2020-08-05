import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function CenterElement() {
  return (
    <React.Fragment>
      <Heading heading="Center elements" id="center-elements" />
      <Paragraph paragraph="Use mx-autoto center block elements with a set width." />
      <CodeBlocks
        htmlcoderender={[
          <div className="margin-orange">
            <div
              className="block-blue mx-auto text-center"
              style={{ width: "5" + "rem" }}
            >
              .mx-auto
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="margin-orange">
          <div class="block-blue mx-auto text-center" style="width: 5rem;">.mx-auto</div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default CenterElement;
