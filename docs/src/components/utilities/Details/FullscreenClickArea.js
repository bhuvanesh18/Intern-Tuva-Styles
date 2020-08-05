import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function FullscreenClickArea() {
  return (
    <React.Fragment>
      <Heading heading="Fullscreen click area" id="fullscreen-click-area" />
      <Paragraph paragraph="Use .details-overlay to expand the click area of <summary> to cover the full screen, so user can click anywhere on a page to close <details>." />
      <CodeBlocks
        htmlcoderender={[
          <details className="details-overlay px-4 py-2">
            <summary className="btn">More</summary>
            <div className="border p-3 mt-2">Hidden text</div>
          </details>
        ]}
        codeline={[
          `
        <details class="details-overlay">
          <summary class="btn">More</summary>
          <div class="border p-3 mt-2">Hidden text</div>
        </details>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FullscreenClickArea;
