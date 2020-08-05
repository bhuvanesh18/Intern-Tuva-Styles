import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function ProgressWithMultipleValues() {
  return (
    <React.Fragment>
      <Heading
        heading="Progress with multiple values"
        id="progress-with-multiple-values"
      />
      <Paragraph paragraph='To show the progress of tasks in multiple states (such as "done", "in progress", and "open"), use distinct background color utilities and give each one a percentage width proportional to the total number. Children are stacked from left to right, so if your widths add up to 100%, your bars will too.' />
      <CodeBlocks
        htmlcoderender={[
          <div
            className="tooltipped tooltipped-n mt-2"
            aria-label="tasks: 80 done, 14 in progress, 6 open"
          >
            <span className="Progress">
              <span className="bg-blue" style={{ width: 80 + "%" }}></span>
              <span className="bg-yellow" style={{ width: 14 + "%" }}></span>
              <span className="bg-red" style={{ width: 6 + "%" }}></span>
            </span>
          </div>
        ]}
        codeline={[
          `
        <div class="tooltipped tooltipped-n" aria-label="tasks: 80 done, 14 in progress, 6 open">
          <span class="Progress">
            <span class="bg-blue" style="width: 80%;"></span>
            <span class="bg-yellow" style="width: 14%;"></span>
            <span class="bg-red" style="width: 6%;"></span>
          </span>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ProgressWithMultipleValues;
