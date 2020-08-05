import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SelectedState() {
  return (
    <React.Fragment>
      <Heading heading="Selected state" id="selected-state" />
      <Paragraph paragraph="If the SelectMenu should show a check icon for selected items, use the SelectMenu-icon SelectMenu-icon--check classes. It will make the check icon show when aria-checked='true' is set." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/SelectedState_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "300" + "px",
              }}
              title="Select-Menu-SelectedState"
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
                <button class="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
                  <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
                  <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" ><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" /></svg>
                  Selected state
                </button>
                <button class="SelectMenu-item" role="menuitemcheckbox">
                  <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
                  <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" ><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" /></svg>
                  Default state
                </button>
                <button class="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
                  <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
                  <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" ><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" /></svg>
                  Selected state
                </button>
                <button class="SelectMenu-item" role="menuitemcheckbox">
                  <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
                  <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" ><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" /></svg>
                  Default state
                </button>
                <button class="SelectMenu-item" role="menuitemcheckbox">
                  <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
                  <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" ><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" /></svg>
                  Default state
                </button>
              </div>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 250px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SelectedState;
