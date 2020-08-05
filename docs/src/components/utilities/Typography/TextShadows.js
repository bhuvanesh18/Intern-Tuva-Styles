import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function TextShadows() {
  return (
    <React.Fragment>
      <Heading heading="Text shadows" id="text-shadows" />
      <Paragraph paragraph="Text shadows can be used to help readability and to add some depth on colored backgrounds." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="bg-gray-dark p-5">
              <h3 className="text-white text-shadow-dark">
                .text-shadow-dark helps white text stand out on dark or
                photographic backgrounds
              </h3>
            </div>
            <div className="bg-gray p-5">
              <h3 className="text-shadow-light">
                .text-shadow-light creates an embossed effect for dark text
              </h3>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="bg-gray-dark p-5">
          <h3 class="text-white text-shadow-dark">.text-shadow-dark helps white text stand out on dark or photographic backgrounds</h3>
        </div>
        <div class="bg-gray p-5">
          <h3 class="text-shadow-light">.text-shadow-light creates an embossed effect for dark text</h3>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TextShadows;
