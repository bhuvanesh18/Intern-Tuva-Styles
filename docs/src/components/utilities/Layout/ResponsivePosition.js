import React from "react";
import { SubHeading, Paragraph, CodeBlocks } from "../../mini_components";

function ResponsivePosition() {
  return (
    <React.Fragment>
      <SubHeading SubHeading="Responsive position" id="responsive-position" />
      <Paragraph paragraph="Position utilities can be applied or changed per breakpoint in responsive layouts. Each responsive position utility is applied to the specified breakpoint and up, using the following formula: position-[breakpoint]-[property]. For example: position-md-absolute." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../output/utilitiy/Layout/ResponsivePosition_output7.html"
              frameborder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "100" + "px",
              }}
              allowfullscreen="true"
              title="Responsive-position"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <div style="height: 64px;">
          <div class="border position-md-absolute top-0 right-0">
            .position-md-absolute .top-0 .right-0
          </div>
        </div>
          `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsivePosition;
