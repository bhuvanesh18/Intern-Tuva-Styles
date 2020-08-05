import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function TruncateTarget() {
  return (
    <React.Fragment>
      <Heading heading="Truncate target" id="truncate-target" />
      <Paragraph paragraph="Combine the css-truncate and css-truncate-target classes for inline (or inline-block) elements with a fixed maximum width (default: 125px)." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            Some text with a&nbsp;&nbsp;
            <strong
              className="css-truncate css-truncate-target"
              title="branch-name-that-is-really-long"
            >
              branch-name-that-is-really-long
            </strong>
          </div>
        ]}
        codeline={[
          `
          Some text with a
          <strong class="css-truncate css-truncate-target"
            title="branch-name-that-is-really-long">
            branch-name-that-is-really-long
          </strong>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can override the maximum width of the truncated text with an inline style attribute:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            Some text with a&nbsp;&nbsp;
            <strong
              className="css-truncate css-truncate-target"
              style={{ maxWidth: 180 + "px" }}
              title="branch-name-that-is-really-long"
            >
              branch-name-that-is-really-long
            </strong>
          </div>
        ]}
        codeline={[
          `
          Some text with a
          <strong class="css-truncate css-truncate-target" style="max-width: 180px"
            title="branch-name-that-is-really-long">
            branch-name-that-is-really-long
          </strong>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can reveal the entire string on hover with the addition of .expandable." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            Some text with a&nbsp;&nbsp;
            <strong
              className="css-truncate css-truncate-target expandable"
              title="branch-name-that-is-really-long"
            >
              branch-name-that-is-really-long
            </strong>
          </div>
        ]}
        codeline={[
          `
          Some text with a
          <strong class="css-truncate css-truncate-target expandable"
            title="branch-name-that-is-really-long">
            branch-name-that-is-really-long
          </strong>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TruncateTarget;
