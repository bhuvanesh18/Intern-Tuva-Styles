import React from "react";
import { Heading, CodeBlocks, SubHeading } from "./../../mini_components";

function Left() {
  return (
    <React.Fragment>
      <Heading heading="Left" id="left" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center flex-items-center">
              <button className="btn btn-primary">UI</button>
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--left p-4 ml-2 Box box-shadow-large">
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
        <div class="d-flex flex-justify-center flex-items-center">
          <button class="btn btn-primary">UI</button>
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--left p-4 ml-2 Box box-shadow-large">
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

      <SubHeading subheading="Left bottom" id="left-bottom" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center flex-items-end">
              <button className="btn btn-primary">UI</button>
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--left-bottom p-4 ml-2 Box box-shadow-large">
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
        <div class="d-flex flex-justify-center flex-items-end">
          <button class="btn btn-primary">UI</button>
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--left-bottom p-4 ml-2 Box box-shadow-large">
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

      <SubHeading subheading="Left top" id="left-top" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-justify-center flex-items-start">
              <button className="btn btn-primary">UI</button>
              <div className="Popover position-relative">
                <div className="Popover-message Popover-message--left-top p-4 ml-2 Box box-shadow-large">
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
        <div class="d-flex flex-justify-center flex-items-start">
          <button class="btn btn-primary">UI</button>
          <div class="Popover position-relative">
            <div class="Popover-message Popover-message--left-top p-4 ml-2 Box box-shadow-large">
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

export default Left;
