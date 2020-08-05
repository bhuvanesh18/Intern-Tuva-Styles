import React from "react";
import { Heading, SubHeading, CodeBlocks } from "../../mini_components";

function TypographyVariables() {
  return (
    <React.Fragment>
      <Heading heading="Typography variables" id="typography-variables" />
      <SubHeading subheading="Font size variables" id="font-size-variables" />
      <CodeBlocks
        codeline={[
          `
          // Heading sizes - mobile
          $h0-size-mobile: 46px !default;
          $h1-size-mobile: 40px !default;
          $h2-size-mobile: 28px !default;
          $h3-size-mobile: 22px !default;

          // Heading sizes - desktop
          $h0-size: 54px !default;
          $h1-size: 46px !default;
          $h2-size: 30px !default;
          $h3-size: 24px !default;
          $h4-size: 20px !default;
          $h5-size: 18px !default;
          $h6-size: 16px !default;`
        ]}
        lang="scss"
      />
      <SubHeading
        subheading="Font weight variables"
        id="font-weight-variables"
      />
      <CodeBlocks
        codeline={[
          `
          // Font weights
          $font-weight-black: 900 !default;
          $font-weight-bold: 700 !default;
          $font-weight-semibold: 600 !default;
          $font-weight-medium: 500 !default;
          $font-weight-normal: 400 !default;
          $font-weight-light: 300 !default;`
        ]}
        lang="scss"
      />
      <SubHeading
        subheading="Line height variables"
        id="line-height-variables"
      />
      <CodeBlocks
        codeline={[
          `
          // Line heights
          $lh-condensed-ultra: 1 !default;
          $lh-condensed: 1.25 !default;
          $lh-default: 1.5 !default;`
        ]}
        lang="scss"
      />
    </React.Fragment>
  );
}

export default TypographyVariables;
