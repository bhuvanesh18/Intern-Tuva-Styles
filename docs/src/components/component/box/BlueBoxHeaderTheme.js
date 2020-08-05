import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BlueBoxHeaderTheme() {
  return (
    <React.Fragment>
      <Heading heading="Blue box header theme" id="blue-box-header-theme" />
      <Paragraph paragraph="Use Box-header--blue to add to change the header border and background to blue." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header Box-header--blue">
              <h3 className="Box-title">Box with blue header</h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header Box-header--blue">
            <h3 class="Box-title">Box with blue header</h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BlueBoxHeaderTheme;
