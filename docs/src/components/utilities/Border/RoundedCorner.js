import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function RoundedCorner() {
  return (
    <React.Fragment>
      <Heading heading="Rounded corners" id="rounded-corners" />
      <Paragraph paragraph="Use the following utilities to add or remove rounded corners: rounded-0 removes rounded corners, rounded-1 applies a border radius of 3px, rounded-2 applies a border radius of 6px. .circle applies a border radius of 50%, which turns square elements into perfect circles." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Box rounded-0 mb-2">.rounded-0</div>
            <div className="border rounded-1 mb-2">.rounded-1</div>
            <div className="border rounded-2 mb-2">.rounded-2</div>
            <div
              className="border circle p-3"
              style={{ width: "100px", height: "100px" }}
            >
              .circle
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box rounded-0 mb-2">
          .rounded-0
        </div>
        <div class="border rounded-1 mb-2">
          .rounded-1
        </div>
        <div class="border rounded-2 mb-2">
          .rounded-2
        </div>
        <div class="border circle p-3" style="width: 100px; height: 100px;">
          .circle
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can also add rounded corners to each edge (top, right, bottom, left) with the following utilities:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="border rounded-top-1 mb-2">.rounded-top-1</div>
            <div className="border rounded-right-1 mb-2">.rounded-right-1</div>
            <div className="border rounded-bottom-1 mb-2">
              .rounded-bottom-1
            </div>
            <div className="border rounded-left-1 mb-2">.rounded-left-1</div>
          </div>
        ]}
        codeline={[
          `
          <div class="border rounded-top-1 mb-2">
            .rounded-top-1
          </div>
          <div class="border rounded-right-1 mb-2">
            .rounded-right-1
          </div>
          <div class="border rounded-bottom-1 mb-2">
            .rounded-bottom-1
          </div>
          <div class="border rounded-left-1 mb-2">
            .rounded-left-1
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default RoundedCorner;
