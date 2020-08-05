import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Loading() {
  return (
    <React.Fragment>
      <Heading heading="Loading" id="loading" />
      <Paragraph paragraph="When fetching large lists, consider showing a .SelectMenu-loading animation." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/Loading_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "250" + "px",
              }}
              title="Select-Menu-Loading"
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
              <div class="SelectMenu-list">
                <div class="SelectMenu-loading">
                  <!-- <%= octicon "octoface", class: "anim-pulse", width: 32 %> -->
                  <svg
                    width="32 "
                    height="32"
                    viewBox="0 0 16 16"
                    class="octicon octicon-octoface anim-pulse"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                    />
                  </svg>
                </div>
              </div>
              <footer class="SelectMenu-footer">Loading...</footer>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 220px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Loading;
