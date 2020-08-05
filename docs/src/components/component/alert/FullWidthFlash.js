import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function FullWidthFlash() {
  return (
    <React.Fragment>
      <Heading heading="Full width flash" id="full-width-flash" />
      <Paragraph paragraph="A flash message that is full width and removes border and border radius." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash flash-full">
            <div className="container">Full width flash message.</div>
          </div>
        ]}
        codeline={[
          `
        <div class="flash flash-full">
          <div class="container">
            Full width flash message.
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FullWidthFlash;
