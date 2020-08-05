import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BreakpointsVarients() {
  return (
    <React.Fragment>
      <Heading heading="Breakpoints variables" id="breakpoints-variables" />
      <Paragraph paragraph="The above values are defined as variables, and then put into a Sass map that generates the media query mixin." />
      <CodeBlocks
        codeline={[
          `
          // Breakpoint widths
          $width-xs: 0 !default;
          // Small screen / phone
          $width-sm: 544px !default;
          // Medium screen / tablet
          $width-md: 768px !default;
          // Large screen / desktop (980 + (16 * 2)) <= container + gutters
          $width-lg: 1012px !default;
          // Extra large screen / wide desktop
          $width-xl: 1280px !default;

          // Responsive container widths
          $container-sm: $width-sm !default;
          $container-md: $width-md !default;
          $container-lg: $width-lg !default;
          $container-xl: $width-xl !default;`
        ]}
        lang="scss"
      />
    </React.Fragment>
  );
}

export default BreakpointsVarients;
