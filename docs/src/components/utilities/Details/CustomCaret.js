import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function CustomCaret() {
  return (
    <React.Fragment>
      <Heading heading="Custom caret" id="custom-caret" />
      <Paragraph paragraph="Use .details-reset to remove the default caret (that little triangle on the left). You then can add the .dropdown-caret on the right of the text." />
      <CodeBlocks
        htmlcoderender={[
          <details className="details-reset">
            <summary className="btn">
              More <span className="dropdown-caret"></span>
            </summary>
            <div className="border p-3 mt-2">Hidden text</div>
          </details>
        ]}
        codeline={[
          `
        <details class="details-reset">
          <summary class="btn">More <span class="dropdown-caret"></summary>
          <div class="border p-3 mt-2">Hidden text</div>
        </details>
          `
        ]}
        lang="html"
        style="ml-4"
      />
    </React.Fragment>
  );
}

export default CustomCaret;
