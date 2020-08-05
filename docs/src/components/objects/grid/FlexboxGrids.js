import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function FlexboxGrids() {
  return (
    <React.Fragment>
      <Heading heading="Flexbox grids" id="flexbox-grids" />
      <p className="mt-2">
        You can use
        <a href="/utilities/flexbox"> flex utilities </a>
        on the container and columns to create a flexbox grid.
      </p>
      <Paragraph paragraph="This can be useful for keeping columns the same height, justifying content and vertically aligning items. The flexbox grid is also great for working with responsive layouts." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
              <div className="col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
                <img
                  className="width-full avatar mb-2 mb-md-0"
                  src="https://tuvalabs.com/static/img/favicon.ico"
                  alt="github"
                />
              </div>
              <div className="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
                <h1 className="text-normal lh-condensed">Tuva labs</h1>
                <p className="h4 text-gray text-normal mb-2">
                  How people build software.
                </p>
                <a className="text-gray text-small" href="#url">
                  https://tuvalabs.com
                </a>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
          <div class="col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
            <img class="width-full avatar mb-2 mb-md-0" src="https://tuvalabs.com/static/img/favicon.ico" alt="github" />
          </div>
          <div class="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
            <h1 class="text-normal lh-condensed">Tuva labs</h1>
            <p class="h4 text-gray text-normal mb-2">How people build software.</p>
            <a class="text-gray text-small" href="#url">https://tuvalabs.com</a>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FlexboxGrids;
