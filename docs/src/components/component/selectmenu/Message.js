import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Message() {
  return (
    <React.Fragment>
      <Heading heading="Message" id="message" />
      <Paragraph paragraph="A SelectMenu-message can be used to show different kind of messages to a user. Use utility classes to further style the message." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/Message_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "250" + "px",
              }}
              title="Select-Menu-Message"
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
                <div class="SelectMenu-message bg-red-0 text-red p-2">Message goes here</div>
                <button class="SelectMenu-item" role="menuitem">Item 3</button>
              </div>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 200px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Message;
