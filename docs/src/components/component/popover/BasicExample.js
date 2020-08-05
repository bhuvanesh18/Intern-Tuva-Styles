import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function BasicExample() {
  return (
    <React.Fragment>
      <Heading heading="Basic example" id="basic-example" />
      <Paragraph paragraph="Defaults to caret oriented top-center." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="position-relative text-center">
              <button className="btn btn-primary">UI</button>
              <div className="Popover right-0 left-0 position-relative">
                <div className="Popover-message text-left p-4 mt-2 mx-auto Box box-shadow-large">
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
        <div class="position-relative text-center">
          <button class="btn btn-primary">UI</button>
          <div class="Popover right-0 left-0 position-relative">
            <div class="Popover-message text-left p-4 mt-2 mx-auto Box box-shadow-large">
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

export default BasicExample;
