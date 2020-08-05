import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function CenteringAColumn() {
  return (
    <React.Fragment>
      <Heading heading="Centering a column" id="centering-a-column" />
      <Paragraph paragraph="Use .mx-auto to center columns within a container." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="border">
              <div className="col-6 p-2 mx-auto border">
                This column is the center of my world.
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="border">
          <div class="col-6 p-2 mx-auto border">
            This column is the center of my world.
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default CenteringAColumn;
