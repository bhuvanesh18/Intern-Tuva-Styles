import React from "react";
import { CodeBlocks } from "./../../mini_components";

function Example() {
  return (
    <React.Fragment>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="TableObject">
              <div className="TableObject-item TableObject-item--primary">
                <input
                  className="input-block form-control"
                  type="text"
                  placeholder="Long elastic input form"
                  aria-label="Long elastic input form"
                />
              </div>
              <div className="TableObject-item">
                <button className="btn ml-2" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="TableObject">
          <div class="TableObject-item TableObject-item--primary">
            <input
              class="input-block form-control"
              type="text"
              placeholder="Long elastic input form"
              aria-label="Long elastic input form"
            />
          </div>
          <div class="TableObject-item">
            <button class="btn ml-2" type="button">Button</button>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Example;
