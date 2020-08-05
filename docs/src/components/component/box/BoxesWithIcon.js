import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BoxesWithIcon() {
  return (
    <React.Fragment>
      <Heading heading="Boxes with icon" id="boxes-with-icon" />
      <Paragraph paragraph="Use Box-btn-octicon with btn-octicon when you want the icon to maintain the same padding as other box elements. This selector offsets margin to ensure it lines up on the left and right sides of the box so you may need to add padding neighboring elements." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-body">
              <span className="pr-6">Box body</span>
              <button href="#" className="Box-btn-octicon btn-octicon">
                <svg
                  className="octicon octicon-pencil"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-body">
            <span class="pr-2">Box body</span>
            <button href="#" class="Box-btn-octicon btn-octicon">
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
            </button>
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="It's common to want to float icons to the far left or right and stop the Box-titlefrom wrapping underneath. To do this you'll need to create a media object with utilities. Add clearfix to the surrounding div (this could be the header, body, or rows), add overflow-hidden to the title (or other text element), and float the icons as desired." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header clearfix">
              <button
                href="#"
                className="Box-btn-octicon btn-octicon float-right"
              >
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
              <h3 className="Box-title overflow-hidden pr-3">
                A very long title that wraps onto multiple lines without
                overlapping or wrapping underneath the icon to it's right
              </h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header clearfix">
            <button href="#" class="Box-btn-octicon btn-octicon float-right">
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
            </button>
            <h3 class="Box-title overflow-hidden pr-3">A very long title that wraps onto multiple lines without overlapping or wrapping underneath the icon to it's right</h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-row clearfix">
              <button
                href="#"
                className="Box-btn-octicon btn-octicon float-left"
              >
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
              </button>
              <p className="overflow-hidden pl-3">
                A very long paragraph that wraps onto multiple lines without
                overlapping or wrapping underneath the icon to it's left
              </p>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-row clearfix">
            <button href="#" class="Box-btn-octicon btn-octicon float-left">
              <svg class="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
            </button>
            <p class="overflow-hidden pl-3">A very long paragraph that wraps onto multiple lines without overlapping or wrapping underneath the icon to it's left</p>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BoxesWithIcon;
