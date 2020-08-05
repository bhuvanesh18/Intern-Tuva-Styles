import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function ButtonStyleDetailSummary() {
  return (
    <React.Fragment>
      <Heading
        heading="Using button styles with the details summary element"
        id="using-button-styles-with-the-details-summary-element"
      />
      <Paragraph paragraph="You can add .btn and .btn-* classes to any <summary> element so that it gains the appearance of a button, and selected/active styles when the parent <details> element is open." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <details>
              <summary className="btn btn-primary">More</summary>
              <div className="border p-3 mt-2">Hidden text</div>
            </details>

            <details className="details-reset mt-3">
              <summary className="btn-link">
                More <span className="dropdown-caret"></span>
              </summary>
              <div className="border p-3 mt-2">Hidden text</div>
            </details>
          </div>
        ]}
        codeline={[
          `
      <details>
        <summary class="btn btn-primary">More</summary>
        <div class="border p-3 mt-2">Hidden text</div>
      </details>

      <details class="details-reset mt-3">
        <summary class="btn-link">More <span class="dropdown-caret"></summary>
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

export default ButtonStyleDetailSummary;
