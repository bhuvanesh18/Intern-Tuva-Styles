import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function InvisibleButton() {
  return (
    <React.Fragment>
      <Heading heading="Invisible button" id="invisible-button" />
      <Paragraph paragraph='When you want a link, but you want it padded and line heighted like a button best for "cancel" actions on forms.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn btn-invisible" type="button">
              Cancel
            </button>
            <button className="btn" type="button">
              Submit
            </button>
          </div>
        ]}
        codeline={[
          `
          <button class="btn btn-invisible" type="button">Cancel</button>
          <button class="btn" type="button">Submit</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default InvisibleButton;
