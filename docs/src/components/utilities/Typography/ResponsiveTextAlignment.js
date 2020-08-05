import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function ResponsiveTextAlignment() {
  return (
    <React.Fragment>
      <Heading
        heading="Responsive text alignment"
        id="responsive-text-alignment"
      />
      <Paragraph paragraph="Use the following formula to make a text alignment utility responsive: .text-[breakpoint]-[alignment]" />
      <CodeBlocks
        htmlcoderender={[
          <p className="text-left text-sm-right text-lg-center">
            Left in a small viewport, centered in mid-sized viewports, and right
            aligned in larger viewports
          </p>
        ]}
        codeline={[
          `
          <p class="text-left text-sm-right text-lg-center">Left in a small viewport, centered in mid-sized viewports, and right aligned in larger viewports</p>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsiveTextAlignment;
