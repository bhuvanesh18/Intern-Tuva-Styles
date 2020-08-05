import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Variations() {
  return (
    <React.Fragment>
      <Heading heading="Variations" id="variations" />
      <Paragraph paragraph="Add .flash-warn, .flash-error, or .flash-success to the flash message to make it yellow, red, or green, respectively." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash flash-warn">Flash message goes here.</div>
        ]}
        codeline={[
          `
        <div class="flash flash-warn">
          Flash message goes here.
         </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash flash-error">Flash message goes here.</div>
        ]}
        codeline={[
          `
          <div class="flash flash-error">
           Flash message goes here.
          </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash flash-success">Flash message goes here.</div>
        ]}
        codeline={[
          `
          <div class="flash flash-success">
          Flash message goes here.
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Variations;
