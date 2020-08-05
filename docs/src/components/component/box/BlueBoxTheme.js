import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BlueBoxTheme() {
  return (
    <React.Fragment>
      <Heading heading="Blue box theme" id="blue-box-theme" />
      <Paragraph paragraph="Use Box--blue to style the box borders and box header in blue." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box Box--blue">
            <div className="Box-header">Box header</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box Box--blue">
          <div class="Box-header">
            Box header
          </div>
          <ul>
            <li class="Box-row">
              Box row one
            </li>
            <li class="Box-row">
              Box row two
            </li>
          </ul>
          <div class="Box-footer">
            Box footer
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BlueBoxTheme;
