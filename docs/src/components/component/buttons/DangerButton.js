import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function DangerButton() {
  return (
    <React.Fragment>
      <Heading heading="Danger button" id="danger-button" />
      <Paragraph paragraph="Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add .btn-danger." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn btn-danger mr-2" type="button">
              Danger button
            </button>
            <button className="btn btn-sm btn-danger" type="button">
              Small danger button
            </button>
          </div>
        ]}
        codeline={[
          `
    <button class="btn btn-danger mr-2" type="button">Danger button</button>
    <button class="btn btn-sm btn-danger" type="button">Small danger button</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DangerButton;
