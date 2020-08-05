import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function FlashBanner() {
  return (
    <React.Fragment>
      <Heading heading="Flash banner" id="flash-banner" />
      <Paragraph paragraph="A flash message that is fixed positioned at the top of the page. Use for more global events where the content of the page is unknown." />
      <CodeBlocks
        htmlcoderender={[
          <div className="mx-3" style={{ mineHight: 50 + "px" }}>
            <div className="flash flash-banner">Flash banner message.</div>
          </div>
        ]}
        codeline={[
          `
        <div class="mx-3" style="min-height: 50px">
          <div class="flash flash-banner">
            Flash banner message.
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FlashBanner;
