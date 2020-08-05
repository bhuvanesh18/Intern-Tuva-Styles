import React from "react";
import { Heading, CodeBlocks, SubHeading } from "./../../mini_components";

function Right() {
  return (
    <React.Fragment>
      <Heading heading="Right" id="right" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center flex-items-center">
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--right p-4 mr-2 Box box-shadow-large">
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
        <div class="d-flex flex-justify-center flex-items-center">
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--right p-4 mr-2 Box box-shadow-large">
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

      <SubHeading subheading="Right bottom" id="right-bottom" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center flex-items-end">
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--right-bottom p-4 mr-2 Box box-shadow-large">
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
        <div class="d-flex flex-justify-center flex-items-end">
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--right-bottom p-4 mr-2 Box box-shadow-large">
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

      <SubHeading subheading="Right top" id="right-top" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center flex-items-start">
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--right-top p-4 mr-2 Box box-shadow-large">
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
        <div class="d-flex flex-justify-center flex-items-start">
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--right-top p-4 mr-2 Box box-shadow-large">
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
    </React.Fragment>
  );
}

export default Right;
