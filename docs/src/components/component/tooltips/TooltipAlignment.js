import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function TooltipAlignment() {
  return (
    <React.Fragment>
      <Heading heading="Tooltip alignment" id="tooltip-alignment" />
      <Paragraph paragraph="Align tooltips to the left or right of an element, combined with a directional class to specify north or south. Use a modifier of 1 or 2 to choose how much the tooltip's arrow is indented." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center pt-4">
              <span
                className="tooltipped tooltipped-nw tooltipped-align-right-1 m-2 p-2 border"
                aria-label="Tooltipped NW and aligned right."
              >
                .tooltipped-nw .tooltipped-align-right-1
              </span>
              <span
                className="tooltipped tooltipped-ne tooltipped-align-left-1 m-2 p-2 border"
                aria-label="Tooltipped NE and aligned left."
              >
                .tooltipped-ne .tooltipped-align-left-1
              </span>
            </div>
            <div className="d-flex flex-justify-center">
              <span
                className="tooltipped tooltipped-nw tooltipped-align-right-2 m-2 p-2 border"
                aria-label="Tooltipped NW and aligned right."
              >
                .tooltipped-nw .tooltipped-align-right-2
              </span>
              <span
                className="tooltipped tooltipped-ne tooltipped-align-left-2 m-2 p-2 border"
                aria-label="Tooltipped NE and aligned left."
              >
                .tooltipped-ne .tooltipped-align-left-2
              </span>
            </div>
            <div className="d-flex flex-justify-center">
              <span
                className="tooltipped tooltipped-sw tooltipped-align-right-1 m-2 p-2 border"
                aria-label="Tooltipped SE and aligned right."
              >
                .tooltipped-sw .tooltipped-align-right-1
              </span>
              <span
                className="tooltipped tooltipped-se tooltipped-align-left-1 m-2 p-2 border"
                aria-label="Tooltipped SW and aligned left."
              >
                .tooltipped-se .tooltipped-align-left-1
              </span>
            </div>
            <div className="d-flex flex-justify-center pb-4">
              <span
                className="tooltipped tooltipped-sw tooltipped-align-right-2 m-2 p-2 border"
                aria-label="Tooltipped SE and aligned right."
              >
                .tooltipped-sw .tooltipped-align-right-2
              </span>
              <span
                className="tooltipped tooltipped-se tooltipped-align-left-2 m-2 p-2 border"
                aria-label="Tooltipped SW and aligned left."
              >
                .tooltipped-se .tooltipped-align-left-2
              </span>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="d-flex flex-justify-center pt-4">
          <span class="tooltipped tooltipped-nw tooltipped-align-right-1 m-2 p-2 border" aria-label="Tooltipped NW and aligned right.">
            .tooltipped-nw .tooltipped-align-right-1
          </span>
          <span class="tooltipped tooltipped-ne tooltipped-align-left-1 m-2 p-2 border" aria-label="Tooltipped NE and aligned left.">
            .tooltipped-ne .tooltipped-align-left-1
          </span>
        </div>
        <div class="d-flex flex-justify-center">
          <span class="tooltipped tooltipped-nw tooltipped-align-right-2 m-2 p-2 border" aria-label="Tooltipped NW and aligned right.">
            .tooltipped-nw .tooltipped-align-right-2
          </span>
          <span class="tooltipped tooltipped-ne tooltipped-align-left-2 m-2 p-2 border" aria-label="Tooltipped NE and aligned left.">
            .tooltipped-ne .tooltipped-align-left-2
          </span>
        </div>
        <div class="d-flex flex-justify-center">
          <span class="tooltipped tooltipped-sw tooltipped-align-right-1 m-2 p-2 border" aria-label="Tooltipped SE and aligned right.">
            .tooltipped-sw .tooltipped-align-right-1
          </span>
          <span class="tooltipped tooltipped-se tooltipped-align-left-1 m-2 p-2 border" aria-label="Tooltipped SW and aligned left.">
            .tooltipped-se .tooltipped-align-left-1
          </span>
        </div>
        <div class="d-flex flex-justify-center pb-4">
          <span class="tooltipped tooltipped-sw tooltipped-align-right-2 m-2 p-2 border" aria-label="Tooltipped SE and aligned right.">
            .tooltipped-sw .tooltipped-align-right-2
          </span>
          <span class="tooltipped tooltipped-se tooltipped-align-left-2 m-2 p-2 border" aria-label="Tooltipped SW and aligned left.">
            .tooltipped-se .tooltipped-align-left-2
          </span>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TooltipAlignment;
