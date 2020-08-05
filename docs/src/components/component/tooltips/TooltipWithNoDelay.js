import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function TooltipWithNoDelay() {
  return (
    <React.Fragment>
      <Heading heading="Tooltip with no delay" id="tooltip-with-no-delay" />
      <Paragraph paragraph="By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a .tooltipped-no-delay modifier class you can use to override this." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-flex flex-justify-center pt-4">
            <span
              className="tooltipped tooltipped-n tooltipped-no-delay m-2 p-2 border"
              aria-label="This is the tooltip on the no delay side."
            >
              .tooltipped-no-delay
            </span>
          </div>
        ]}
        codeline={[
          `
        <div class="d-flex flex-justify-center pt-4">
          <span class="tooltipped tooltipped-n tooltipped-no-delay m-2 p-2 border" aria-label="This is the tooltip on the no delay side.">
            .tooltipped-no-delay
          </span>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TooltipWithNoDelay;
