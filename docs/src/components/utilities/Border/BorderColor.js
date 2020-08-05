import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BorderColor() {
  return (
    <React.Fragment>
      <Heading heading="Border colors" id="border-colors" />
      <Paragraph paragraph="Override default border colors with blue, red, yellow, and gray border color utilities." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="border border-blue mb-2">.border-blue</div>
            <div className="border border-blue-light mb-2">
              .border-blue-light
            </div>
            <div className="border border-red mb-2">.border-red</div>
            <div className="border border-red-light mb-2">
              .border-red-light
            </div>
            <div className="border border-yellow mb-2">.border-yellow</div>
            <div className="border border-gray-light mb-2">
              .border-gray-light
            </div>
            <div className="border border-gray-dark mb-2">
              .border-gray-dark
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="border border-blue mb-2">
          .border-blue
        </div>
        <div class="border border-blue-light mb-2">
          .border-blue-light
        </div>
        <div class="border border-red mb-2">
          .border-red
        </div>
        <div class="border border-red-light mb-2">
          .border-red-light
        </div>
        <div class="border border-yellow mb-2">
          .border-yellow
        </div>
        <div class="border border-gray-light mb-2">
          .border-gray-light
        </div>
        <div class="border border-gray-dark mb-2">
          .border-gray-dark
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BorderColor;
