import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function ListItems() {
  return (
    <React.Fragment>
      <Heading heading="List items" id="list-items" />
      <Paragraph paragraph="The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any interactive content. List items are also customizable with options for avatars, additional icons, and multiple lines of text. Use utility classes in case more custom styling is needed." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/ListItem_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "320" + "px",
              }}
              title="Select-Menu-ListItems"
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
                  <!--%= octicon "x" %-->
                  <svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                    />
                  </svg>
                </button>
              </header>
              <div class="SelectMenu-list">
                <button class="SelectMenu-item" role="menuitem">
                  Text only
                </button>
                <button class="SelectMenu-item" role="menuitem">
                  <img
                    class="avatar avatar-small mr-2"
                    src="https://avatars.githubusercontent.com/hubot?s=40"
                    alt="hubot"
                    height="20"
                    width="20"
                  />
                  With an avatar
                </button>
                <button class="SelectMenu-item flex-justify-between" role="menuitem">
                  With a status icon
                  <!-- <%= octicon "primitive-dot", class: "color-green-5 ml-2" %> -->
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    class="octicon octicon-primitive-dot color-green-5 ml-2"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                  </svg>
                </button>
                <button class="SelectMenu-item d-block" role="menuitem">
                  With a <span class="Label bg-blue" title="Label: label">label</span>
                </button>
                <button class="SelectMenu-item" role="menuitem">
                  With a counter <span class="Counter bg-gray-2 ml-1">16</span>
                </button>
                <button class="SelectMenu-item d-block" role="menuitem">
                  <h5>With a heading</h5>
                  <span>and some longer description</span>
                </button>
              </div>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 320px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ListItems;
