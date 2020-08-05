import React from "react";
import { CodeBlocks, SubHeading } from "./../../mini_components";

function Top() {
  return (
    <React.Fragment>
      <SubHeading subheading="Top left" id="top-left" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="position-relative pl-2">
              <button className="btn btn-primary">UI</button>
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--top-left p-4 mt-2 Box box-shadow-large">
                  <h4 className="mb-2">Popover heading</h4>
                  <p>Message about this particular piece of UI.</p>
                  <button
                    type="submit"
                    className="btn btn-outline mt-2 text-bold"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="position-relative pl-2">
          <button class="btn btn-primary">UI</button>
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--top-left p-4 mt-2 Box box-shadow-large">
              <h4 class="mb-2">Popover heading</h4>
              <p>Message about this particular piece of UI.</p>
              <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
            </div>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />

      <SubHeading subheading="Top right" id="top-right" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="position-relative text-right pr-2">
              <button className="btn btn-primary">UI</button>
              <div className="Popover right-0 position-relative">
                <div className="Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large">
                  <h4 className="mb-2">Popover heading</h4>
                  <p>Message about this particular piece of UI.</p>
                  <button
                    type="submit"
                    className="btn btn-outline mt-2 text-bold"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="position-relative text-right pr-2">
          <button class="btn btn-primary">UI</button>
          <div class="Popover right-0 position-relative">
            <div class="Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large">
              <h4 class="mb-2">Popover heading</h4>
              <p>Message about this particular piece of UI.</p>
              <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
            </div>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Top;
