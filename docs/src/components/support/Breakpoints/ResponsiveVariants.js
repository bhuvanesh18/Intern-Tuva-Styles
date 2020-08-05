import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function ResponsiveVariants() {
  return (
    <React.Fragment>
      <Heading heading="Responsive varients" id="responsive-varients" />
      <Paragraph paragraph="The $responsive-variants variable is a mapping of breakpoints to classname variants, and should be used like so:" />
      <CodeBlocks
        codeline={[
          `
        @each $breakpoint, $variant in $responsive-variants {
          @include breakpoint($breakpoint) {
            // Note: the first iteration gets '$variant == ""'
            .overflow#{$variant}-auto {
              overflow: auto;
            }
          }
        }`
        ]}
        lang="scss"
      />
      <Paragraph paragraph="The resulting CSS would be:" />
      <CodeBlocks
        codeline={[
          `
          .overflow-auto {
            overflow: auto;
          }
          @media (min-width: 544px) {
            .overflow-sm-auto {
              overflow: auto;
            }
          }
          @media (min-width: 768px) {
            .overflow-md-auto {
              overflow: auto;
            }
          }
          @media (min-width: 1012px) {
            .overflow-lg-auto {
              overflow: auto;
            }
          }
          @media (min-width: 1280px) {
            .overflow-xl-auto {
              overflow: auto;
            }
          }`
        ]}
        lang="scss"
      />
      <b className="pt-2 pb-2">Caution!</b>
      <ol className="ml-4 my-2">
        <li>
          {`Don't precede the #{$variation} interpolation with a hyphen because
          the first value of $variant will be an empty string.`}
        </li>
        <li>
          For consistency, please put the @include breakpoint($breakpoint) call
          directly inside the $responsive-variants loop. This will help keep
          file sizes small by "batching" selectors in shared @media queries.
        </li>
      </ol>
    </React.Fragment>
  );
}

export default ResponsiveVariants;
