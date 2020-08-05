import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Divider() {
  return (
    <React.Fragment>
      <Heading heading="Divider" id="divider" />
      <Paragraph paragraph="The select menu's list can be divided into multiple parts by adding a .SelectMenu-divider." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/Divider_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "320" + "px",
              }}
              title="Select-Menu-Divider"
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
                <div class="SelectMenu-divider">More options</div>
                <button class="SelectMenu-item" role="menuitem">Item 3</button>
                <button class="SelectMenu-item" role="menuitem">Item 4</button>
                <button class="SelectMenu-item" role="menuitem">Item 5</button>
              </div>
            </div>
          </div>
        </details>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Divider;
