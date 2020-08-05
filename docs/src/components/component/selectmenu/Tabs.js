import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Tabs() {
  return (
    <React.Fragment>
      <Heading heading="Tabs" id="tabs" />
      <Paragraph paragraph="Sometimes you need two or more lists of items in your select menu, e.g. branches and tags. Select menu lists can be tabbed with the addition of .SelectMenu-tabs above the menu." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/Tabs_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "380" + "px",
              }}
              title="Select-Menu-Tabs"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <details class="details-reset details-overlay" open>
          <summary class="btn" aria-haspopup="true">
            Choose an item
          </summary>
          <div class="SelectMenu SelectMenu--hasFilter">
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
              <form class="SelectMenu-filter">
                <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter" />
              </form>
              <nav class="SelectMenu-tabs">
                <button class="SelectMenu-tab" aria-selected="true">Branches</button>
                <button class="SelectMenu-tab">Tags</button>
              </nav>
              <div class="SelectMenu-list">
                <button class="SelectMenu-item" role="menuitem">Branch 1</button>
                <button class="SelectMenu-item" role="menuitem">Branch 2</button>
                <button class="SelectMenu-item" role="menuitem">Branch 3</button>
                <button class="SelectMenu-item" role="menuitem">Branch 4</button>
                <button class="SelectMenu-item" role="menuitem">Branch 5</button>
              </div>
              <div class="SelectMenu-list" hidden>
                <button class="SelectMenu-item" role="menuitem">Tag 1</button>
                <button class="SelectMenu-item" role="menuitem">Tag 2</button>
                <button class="SelectMenu-item" role="menuitem">Tag 3</button>
              </div>
              <footer class="SelectMenu-footer">Showing 5 of 5</footer>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 380px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Tabs;
