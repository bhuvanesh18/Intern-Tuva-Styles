import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function OutlineButton() {
  return (
    <React.Fragment>
      <Heading heading="Outline button" id="outline-button" />
      <Paragraph paragraph="Outline buttons downplay an action as they appear like boxy links. Just add .btn-outline and go." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn btn-outline mr-2" type="button">
              Outline button
            </button>
            <button className="btn btn-sm btn-outline" type="button">
              Outline button
            </button>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-outline mr-2" type="button">Outline button</button>
      <button class="btn btn-sm btn-outline" type="button">Outline button</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default OutlineButton;
