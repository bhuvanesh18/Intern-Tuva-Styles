import React from "react";
import {
  Heading,
  CodeBlocks,
  Paragraph,
  SubHeading,
} from "./../../mini_components";

function Bottom() {
  return (
    <React.Fragment>
      <Heading heading="Bottom" id="bottom" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="position-relative text-center">
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--bottom p-4 mx-auto mb-2 text-left Box box-shadow-large">
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
              <button className="btn btn-primary">UI</button>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="position-relative text-center">
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--bottom p-4 mx-auto mb-2 text-left Box box-shadow-large">
              <h4 class="mb-2">Popover heading</h4>
              <p>Message about this particular piece of UI.</p>
              <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
            </div>
          </div>
          <button class="btn btn-primary">UI</button>
        </div>
        `,
        ]}
        lang="html"
      />

      <SubHeading subheading="Bottom right" id="bottom-right" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="position-relative text-right pr-2">
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--bottom-right p-4 mb-2 text-left Box box-shadow-large">
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
              <button className="btn btn-primary">UI</button>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="position-relative text-right pr-2">
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--bottom-right p-4 mb-2 text-left Box box-shadow-large">
              <h4 class="mb-2">Popover heading</h4>
              <p>Message about this particular piece of UI.</p>
              <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
            </div>
          </div>
          <button class="btn btn-primary">UI</button>
        </div>
        `,
        ]}
        lang="html"
      />

      <SubHeading subheading="Bottom left" id="bottom-left" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Popover position-relative pl-2">
              <div className="Popover-message Popover-message--bottom-left p-4 mb-2 Box box-shadow-large">
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button
                  type="submit"
                  className="btn btn-outline mt-2 text-bold"
                >
                  Got it!
                </button>
              </div>
              <button className="btn btn-primary">UI</button>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="Popover position-relative pl-2">
          <div class="Popover-message Popover-message--bottom-left p-4 mb-2 Box box-shadow-large">
            <h4 class="mb-2">Popover heading</h4>
            <p>Message about this particular piece of UI.</p>
            <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
          </div>
          <button class="btn btn-primary">UI</button>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Bottom;
