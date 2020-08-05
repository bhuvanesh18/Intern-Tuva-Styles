import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";
import { Link } from "react-router-dom";

function BoxesWithFlashAlerts() {
  return (
    <React.Fragment>
      <Heading heading="Boxes with flash alerts" id="boxes-with-flash-alerts" />
      <Paragraph paragraph="Use flash-full for flash alert inside a box to remove the rounded corners. Place the flash alert above the Box-body and underneath the Box-header." />
      <p>
        Flash alerts come in three different colors and can be used with icons
        and buttons, see the{" "}
        <Link to="/components/alert"> alert documentation </Link> for more
        information.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">Box header</div>
            <div className="flash flash-full">
              <button className="flash-close js-flash-close">
                <svg
                  className="octicon octicon-x"
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="12"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                  ></path>
                </svg>
              </button>
              <span>Flash message with close button.</span>
            </div>
            <div className="flash flash-full flash-success">
              <svg
                className="octicon octicon-check"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
                ></path>
              </svg>
              <span>Flash success with an icon.</span>
            </div>
            <div className="flash flash-full flash-warn">
              <svg
                className="octicon octicon-alert"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                ></path>
              </svg>
              <span>Flash warning with an icon.</span>
            </div>
            <div className="flash flash-full flash-error">
              Flash error inside a Box.
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header">
            Box header
          </div>
          <div class="flash flash-full">
            <button class="flash-close js-flash-close">
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
            </button>
            <span>Flash message with close button.</span>
          </div>
          <div class="flash flash-full flash-success">
            <svg class="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
            <span>Flash success with an icon.</span>
          </div>
          <div class="flash flash-full flash-warn">
            <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
            <span>Flash warning with an icon.</span>
          </div>
          <div class="flash flash-full flash-error">
            Flash error inside a Box.
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BoxesWithFlashAlerts;
