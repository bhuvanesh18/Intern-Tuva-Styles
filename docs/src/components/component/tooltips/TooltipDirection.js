import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function TooltipDirection() {
  return (
    <React.Fragment>
      <Heading heading="Tooltip direction" id="tooltip-direction" />
      <Paragraph paragraph="Specify the direction of a tooltip with north, south, east, and west directions:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center pt-4">
              <span
                className="tooltipped tooltipped-nw m-2 p-2 border"
                aria-label="This is the tooltip on the North West side."
              >
                .tooltipped-nw
              </span>
              <span
                className="tooltipped tooltipped-n m-2 p-2 border"
                aria-label="This is the tooltip on the North side."
              >
                .tooltipped-n
              </span>
              <span
                className="tooltipped tooltipped-ne m-2 p-2 border"
                aria-label="This is the tooltip on the North East side."
              >
                .tooltipped-ne
              </span>
            </div>
            <div className="d-flex flex-justify-center">
              <span
                className="tooltipped tooltipped-w m-2 p-2 border"
                aria-label="This is the tooltip on the West side."
              >
                .tooltipped-w
              </span>
              <span
                className="tooltipped tooltipped-e m-2 p-2 border"
                aria-label="This is the tooltip on the East side."
              >
                .tooltipped-e
              </span>
            </div>
            <div className="d-flex flex-justify-center pb-4">
              <span
                className="tooltipped tooltipped-sw m-2 p-2 border"
                aria-label="This is the tooltip on the South West side."
              >
                .tooltipped-sw
              </span>
              <span
                className="tooltipped tooltipped-s m-2 p-2 border"
                aria-label="This is the tooltip on the South side."
              >
                .tooltipped-s
              </span>
              <span
                className="tooltipped tooltipped-se m-2 p-2 border"
                aria-label="This is the tooltip on the South East side."
              >
                .tooltipped-se
              </span>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="d-flex flex-justify-center pt-4">
          <span class="tooltipped tooltipped-nw m-2 p-2 border" aria-label="This is the tooltip on the North West side.">
            .tooltipped-nw
          </span>
          <span class="tooltipped tooltipped-n m-2 p-2 border" aria-label="This is the tooltip on the North side.">
            .tooltipped-n
          </span>
          <span class="tooltipped tooltipped-ne m-2 p-2 border" aria-label="This is the tooltip on the North East side.">
            .tooltipped-ne
          </span>
        </div>
        <div class="d-flex flex-justify-center">
          <span class="tooltipped tooltipped-w m-2 p-2 border" aria-label="This is the tooltip on the West side.">
            .tooltipped-w
          </span>
          <span class="tooltipped tooltipped-e m-2 p-2 border" aria-label="This is the tooltip on the East side.">
            .tooltipped-e
          </span>
        </div>
        <div class="d-flex flex-justify-center pb-4">
          <span class="tooltipped tooltipped-sw m-2 p-2 border" aria-label="This is the tooltip on the South West side.">
            .tooltipped-sw
          </span>
          <span class="tooltipped tooltipped-s m-2 p-2 border" aria-label="This is the tooltip on the South side.">
            .tooltipped-s
          </span>
          <span class="tooltipped tooltipped-se m-2 p-2 border" aria-label="This is the tooltip on the South East side.">
            .tooltipped-se
          </span>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TooltipDirection;
