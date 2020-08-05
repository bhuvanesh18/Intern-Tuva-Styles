import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks
} from "../../mini_components";

function ResponsiveFlexUtility() {
  return (
    <React.Fragment>
      <Heading
        heading="Responsive Flex Utilities"
        id="responsive-flex-utilities"
      />
      <p className="mt-2">
        All flexbox utilities can be adjusted per breakpoint using the following
        formulas:
      </p>
      <ul className="mt-2 ml-6">
        <li>d-[breakpoint]-[property] for display</li>
        <li>
          flex-[breakpoint]-[property]-[behavior] for various flex properties
        </li>
      </ul>
      <Paragraph paragraph="Each responsive style is applied to the specified breakpoint and up." />
      <SubHeading subheading="Example classes" id="example-classes" />
      <CodeBlocks
        codeline={[
          `
          /* Example classes */

          .d-sm-flex {}
          .d-md-inline-flex {}

          .flex-lg-row {}
          .flex-xl-column {}

          .flex-sm-wrap {}
          .flex-lg-nowrap {}

          .flex-lg-self-start {}
      `
        ]}
        lang="css"
      />
      <SubHeading subheading="Example usage" id="example-usage" />
      <Paragraph paragraph="Mixing flex properties:" />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-start flex-md-items-center flex-justify-start flex-lg-justify-between"
          >
            <div className="p-5 border bg-gray-light flex-md-self-stretch">
              .flex-self-stretch
            </div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex flex-items-start flex-md-items-center flex-justify-start flex-lg-justify-between">
          <div class="p-5 border bg-gray-light flex-md-self-stretch">.flex-self-stretch</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
        </div>
     `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsiveFlexUtility;
