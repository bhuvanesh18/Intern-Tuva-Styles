import React from "react";
import { Heading, CodeBlocks } from "./../mini_components";

function Buttons() {
  return (
    <React.Fragment>
      <Heading heading="Buttons" id="buttons" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="mb-2">
              <button className="btn-mkt btn-large-mkt" type="button">
                Large Button
              </button>
            </div>
            <div className="mb-2">
              <button className="btn-mkt btn-wide-mkt" type="button">
                Extra Wide Button
              </button>
            </div>
            <div className="mb-2">
              <button
                className="btn-mkt btn-large-mkt btn-outline-mkt"
                type="button"
              >
                Outline Button
              </button>
            </div>
            <div className="mb-2">
              <button className="btn-mkt" type="button">
                Medium Button
              </button>
            </div>
            <div className="mb-2">
              <button className="btn-mkt btn-primary-mkt" type="button">
                Medium Button
              </button>
            </div>
            <div className="mb-2">
              <button className="btn-mkt btn-small-mkt" type="button">
                Small Button
              </button>
            </div>
            <div className="mb-2">
              <button className="btn-mkt btn-tiny-mkt" type="button">
                Tiny Button
              </button>
            </div>
          </div>,
        ]}
        codeline={[
          `
            <div class="mb-2">
              <button class="btn-mkt btn-large-mkt" type="button">
                Large Button
              </button>
            </div>
            <div class="mb-2">
              <button class="btn-mkt btn-wide-mkt" type="button">
                Extra Wide Button
              </button>
            </div>
            <div class="mb-2">
              <button class="btn-mkt btn-large-mkt btn-outline-mkt" type="button">
                Outline Button
              </button>
            </div>
            <div class="mb-2">
              <button class="btn-mkt" type="button">
                Medium Button
              </button>
            </div>
            <div class="mb-2">
              <button class="btn-mkt btn-primary-mkt" type="button">
                Medium Button
              </button>
            </div>
            <div class="mb-2">
              <button class="btn-mkt btn-small-mkt" type="button">
                Small Button
              </button>
            </div>
            <div class="mb-2">
              <button class="btn-mkt btn-tiny-mkt" type="button">
                Tiny Button
              </button>
            </div>
          `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Buttons;
