import React from "react";
import { Heading, Paragraph } from "../../mini_components";

function Overflow() {
  return (
    <React.Fragment>
      <Heading heading="Overflow" id="overflow" />
      <p className="mt-2">
        Adjust element overflow with .overflow-hidden, .overflow-scroll, and
        .overflow-auto, or use .overflow-visible to undo the effects of CSS with
        overflow issues. .overflow-hidden can also be used to create a new{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context">
          block formatting context
        </a>{" "}
        or clear floats.
      </p>
      <Paragraph paragraph="Overflow utilities can also target x- and y-axes independently via:" />
      <ol className="mt-2 ml-6">
        <li>.overflow-x-auto</li>
        <li>.overflow-x-hidden</li>
        <li>.overflow-x-scroll</li>
        <li>.overflow-x-visible</li>
        <li>.overflow-y-auto</li>
        <li>.overflow-y-hidden</li>
        <li>.overflow-y-scroll</li>
        <li>.overflow-y-visible</li>
      </ol>
    </React.Fragment>
  );
}

export default Overflow;
