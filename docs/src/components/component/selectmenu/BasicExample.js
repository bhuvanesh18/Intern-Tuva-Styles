import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function BasicExample() {
  return (
    <React.Fragment>
      <Heading heading="Basic example" id="basic-example" />
      <Paragraph paragraph="Use a <details> element to toggle the select menu. The <summary> element can be styled in many ways. In the example below it's a .btn." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/BasicExample_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "250" + "px",
              }}
              title="Select-Menu-BasicExample"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <details class="details-reset details-overlay" open>
          <summary class="btn" aria-haspopup="true">
            Choose an item
          </summary>
          <div class="SelectMenu">
            <div class="SelectMenu-modal">
              <header class="SelectMenu-header">
                <h3 class="SelectMenu-title">Title</h3>
                <button class="SelectMenu-closeButton" type="button">
                  <!-- <%= octicon "x" %> -->
                  <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                    />
                  </svg>
                </button>
              </header>
              <div class="SelectMenu-list">
                <button class="SelectMenu-item" role="menuitem">Item 1</button>
                <button class="SelectMenu-item" role="menuitem">Item 2</button>
                <button class="SelectMenu-item" role="menuitem">Item 3</button>
              </div>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 180px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="Add a .SelectMenu-header to house a clear title and a close button. Note that the close button is only shown on narrow screens (mobile)." />
    </React.Fragment>
  );
}

export default BasicExample;
