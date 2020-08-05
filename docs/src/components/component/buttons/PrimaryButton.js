import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function PrimaryButton() {
  return (
    <React.Fragment>
      <Heading heading="Primary button" id="primary-button" />
      <Paragraph paragraph="Primary buttons are green and are used to indicate the primary action on a page. When you need your buttons to stand out, use .btn.btn-primary. You can use it with both button sizes—just add .btn-primary." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn btn-primary mr-2" type="button">
              Primary button
            </button>
            <button className="btn btn-sm btn-primary" type="button">
              Small primary button
            </button>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-primary mr-2" type="button">Primary button</button>
      <button class="btn btn-sm btn-primary" type="button">Small primary button</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default PrimaryButton;
