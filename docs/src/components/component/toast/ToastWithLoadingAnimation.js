import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function ToastWithLoadingAnimation() {
  return (
    <React.Fragment>
      <Heading
        heading="Toast with loading animation"
        id="toast-with-loading-animation"
      />
      <Paragraph paragraph="Add the Toast--spinner modifier class on the Toast-icon svg to communicate a loading state." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-1">
            <div className="Toast Toast--loading">
              <span className="Toast-icon">
                <svg
                  className="Toast--spinner"
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#959da5"
                    d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
                  />
                  <path
                    fill="#ffffff"
                    d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
                  ></path>
                </svg>
              </span>
              <span className="Toast-content">Toast message goes here.</span>
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="p-1">
          <div class="Toast Toast--loading">
            <span class="Toast-icon">
              <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18">
                <path
                  fill="#959da5"
                  d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
                />
                <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
              </svg>
            </span>
            <span class="Toast-content">Toast message goes here.</span>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ToastWithLoadingAnimation;
