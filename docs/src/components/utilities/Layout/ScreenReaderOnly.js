import React from "react";
import { SubHeading, Paragraph, CodeBlocks } from "../../mini_components";

function ScreenReaderOnly() {
  return (
    <React.Fragment>
      <SubHeading subheading="Screen reader only" id="screen-reader-only" />
      <Paragraph paragraph="Use .sr-only to position an element outside of the viewport for screen reader access only. Even though the element can't be seen, make sure it still has a sensible tab order." />
      <CodeBlocks
        htmlcoderender={[
          <div className="js-details-container Details">
            <button type="button" className="btn">
              Tab once from this button, and press enter
            </button>
            <button type="button" className="sr-only js-details-target">
              Screen reader only button
            </button>
            <div className="Details-content--hidden">Button activated!</div>
          </div>
        ]}
        codeline={[
          `
        <div class="js-details-container Details">
          <button type="button" class="btn">Tab once from this button, and press enter</button>
          <button type="button" class="sr-only js-details-target">
            Screen reader only button
          </button>
          <div class="Details-content--hidden">
            Button activated!
          </div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ScreenReaderOnly;
