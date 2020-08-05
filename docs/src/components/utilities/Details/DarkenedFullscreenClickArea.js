import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function DarkenedFullscreenClickArea() {
  return (
    <React.Fragment>
      <Heading
        heading="Darkened fullscreen click area"
        id="darkened-fullscreen-click-area"
      />
      <Paragraph paragraph="Use .details-overlay-dark darken the click area overlay. Useful for modals." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/utilitiy/Details/DarkendFullScreenClickArea_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "50" + "px",
              }}
              title="Darkend Full Screen"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
       <details class="details-overlay details-overlay-dark">
          <summary class="btn">More</summary>
          <div class="border p-3 mt-2">Hidden text</div>
        </details>
          `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DarkenedFullscreenClickArea;
