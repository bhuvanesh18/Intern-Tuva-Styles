import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Accessibility() {
  return (
    <React.Fragment>
      <Heading heading="Accessibility" id="accessibility" />
      <Paragraph paragraph="In cases where it's not possible to describe the progress in text, provide an aria-label attribute that does so:" />
      <CodeBlocks
        htmlcoderender={[
          <div
            className="tooltipped tooltipped-s"
            aria-label="tasks: 8 of 10 complete"
          >
            <span className="Progress">
              <span className="bg-blue-4" style={{ width: 80 + "%" }}></span>
            </span>
          </div>
        ]}
        codeline={[
          `
        <div class="tooltipped tooltipped-s" aria-label="tasks: 8 of 10 complete">
          <span class="Progress">
            <span class="bg-green" style="width: 80%;"></span>
          </span>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Accessibility;
