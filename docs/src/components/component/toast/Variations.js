import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Variations() {
  return (
    <React.Fragment>
      <Heading heading="Variations" id="variations" />
      <Paragraph paragraph="Use the success, warning, and error modifiers to communicate different states." />
      <Paragraph paragraph="Always use the check octicon for success states." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-1">
            <div className="Toast Toast--success">
              <span className="Toast-icon">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  className="octicon octicon-check"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
                  />
                </svg>
              </span>
              <span className="Toast-content">Success message goes here.</span>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="p-1">
          <div class="Toast Toast--success">
            <span class="Toast-icon">
              <!-- <%= octicon "check" %> -->
              <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-check" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
              </svg>
            </span>
            <span class="Toast-content">Success message goes here.</span>
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Always use the alert octicon for warning states." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-1">
            <div className="Toast Toast--warning">
              <span className="Toast-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="octicon octicon-alert"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                  />
                </svg>
              </span>
              <span className="Toast-content">Warning message goes here.</span>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="p-1">
          <div class="Toast Toast--warning">
            <span class="Toast-icon">
              <!-- <%= octicon "alert" %> -->
              <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-alert" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                />
              </svg>
            </span>
            <span class="Toast-content">Warning message goes here.</span>
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Always use the stop octicon for error states." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-1">
            <div className="Toast Toast--error">
              <span className="Toast-icon">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  className="octicon octicon-stop"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"
                  />
                </svg>
              </span>
              <span className="Toast-content">Error message goes here</span>
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="p-1">
          <div class="Toast Toast--error">
            <span class="Toast-icon">
              <!-- <%= octicon "stop" %> -->
              <svg width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-stop" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"
                />
              </svg>
            </span>
            <span class="Toast-content">Error message goes here</span>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Variations;
