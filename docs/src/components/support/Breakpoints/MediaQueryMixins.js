import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function MediaQueryMixins() {
  return (
    <React.Fragment>
      <Heading heading="Media query mixins" id="media-query-mixins" />
      <Paragraph paragraph="Use media query mixins when you want to change CSS properties at a particular breakpoint. The media query mixin works by passing in a breakpoint value, such as breakpoint(md). Media queries are scoped from each breakpoint and upwards. In the example below, the font size is 28px until the viewport size meets the lg breakpoint, from there upwards—including through the xl breakpoint—the font size will be 32px." />
      <CodeBlocks
        codeline={[
          `
        .styles {
          font-size: 28px;
          @include breakpoint(md) {
            font-size: 32px;
          }
        }`
        ]}
        lang="scss"
      />
    </React.Fragment>
  );
}

export default MediaQueryMixins;
