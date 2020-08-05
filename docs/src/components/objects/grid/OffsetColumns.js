import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function OffsetColumns() {
  return (
    <React.Fragment>
      <Heading heading="Offset columns" id="offset-columns" />
      <p>
        Using column offset classes can push a div over X number of columns.
        They work responsively using the{" "}
        <a href="#responsive-grids">breakpoints outlined below</a>.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="clearfix">
              <div className="offset-1 col-3 border p-3">.offset-1</div>
              <div className="offset-2 col-3 border p-3">.offset-2</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="clearfix">
          <div class="offset-1 col-3 border p-3">.offset-1</div>
          <div class="offset-2 col-3 border p-3">.offset-2</div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default OffsetColumns;
