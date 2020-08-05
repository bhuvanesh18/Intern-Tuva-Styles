import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function WithActionIcon() {
  return (
    <React.Fragment>
      <Heading heading="With action icon" id="with-action-button" />
      <Paragraph paragraph="A flash message with an action button." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash">
            <button type="submit" className="btn btn-sm primary flash-action">
              Complete action
            </button>
            Flash message with action here.
          </div>
        ]}
        codeline={[
          `
        <div class="flash">
          <button type="submit" class="btn btn-sm primary flash-action">Complete action</button>
          Flash message with action here.
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default WithActionIcon;
