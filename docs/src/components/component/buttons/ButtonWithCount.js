import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function ButtonWithCount() {
  return (
    <React.Fragment>
      <Heading heading="Button with count" id="button-with-counts" />
      <Paragraph paragraph="You can easily append a count to a small button. Add the .with-count class to the .btn-sm and then add the .social-count after the button." />
      <Paragraph paragraph="Be sure to clear the float added by the additional class." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix">
            <a className="btn btn-sm btn-with-count" href="#url" role="button">
              <svg
                className="octicon octicon-eye"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                ></path>
              </svg>
              <span>Watch</span>
            </a>
            <a className="social-count" href="#url">
              6
            </a>
          </div>
        ]}
        codeline={[
          `
    <div class="clearfix">
      <a class="btn btn-sm btn-with-count" href="#url" role="button">
        <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
          <span>Watch</span>
        </a>
      <a class="social-count" href="#url">6</a>
    </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can also use the counter component within buttons:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn mr-2" type="button">
              Button <span class="Counter">12</span>
            </button>

            <button className="btn btn-primary mr-2" type="button">
              Button <span class="Counter">12</span>
            </button>

            <button className="btn btn-danger mr-2" type="button">
              Button <span class="Counter">12</span>
            </button>

            <button className="btn btn-outline" type="button">
              Button <span class="Counter">12</span>
            </button>
          </div>
        ]}
        codeline={[
          `
        <button class="btn mr-2" type="button">
          Button <span class="Counter">12</span>
        </button>

        <button class="btn btn-primary mr-2" type="button">
          Button <span class="Counter">12</span>
        </button>

        <button class="btn btn-danger mr-2" type="button">
          Button <span class="Counter">12</span>
        </button>

        <button class="btn btn-outline" type="button">
          Button <span class="Counter">12</span>
        </button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ButtonWithCount;
