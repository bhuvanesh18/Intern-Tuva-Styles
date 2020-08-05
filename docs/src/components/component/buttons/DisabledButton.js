import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function DisabledButton() {
  return (
    <React.Fragment>
      <Heading heading="Disabled button" id="disabled-state" />
      <Paragraph paragraph='Disable <button> and <a> elements with the aria-disabled="true" attribute.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn mr-2" type="button" aria-disabled="true">
              Disabled button
            </button>
            <a className="btn" href="#url" role="button" aria-disabled="true">
              Disabled button
            </a>
          </div>
        ]}
        codeline={[
          `
      <button class="btn mr-2" type="button" aria-disabled="true">Disabled button</button>
      <a class="btn" href="#url" role="button" aria-disabled="true">Disabled button</a>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Similar styles are applied to primary, danger, and outline buttons:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button
              className="btn btn-primary mr-2"
              type="button"
              aria-disabled="true"
            >
              Disabled button
            </button>
            <a
              className="btn btn-primary"
              href="#url"
              role="button"
              aria-disabled="true"
            >
              Disabled button
            </a>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-primary mr-2" type="button" aria-disabled="true">Disabled button</button>
      <a class="btn btn-primary" href="#url" role="button" aria-disabled="true">Disabled button</a>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button
              className="btn btn-danger mr-2"
              type="button"
              aria-disabled="true"
            >
              Disabled button
            </button>
            <a
              className="btn btn-danger"
              href="#url"
              role="button"
              aria-disabled="true"
            >
              Disabled button
            </a>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-danger mr-2" type="button" aria-disabled="true">Disabled button</button>
      <a class="btn btn-danger" href="#url" role="button" aria-disabled="true">Disabled button</a>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button
              className="btn btn-outline mr-2"
              type="button"
              aria-disabled="true"
            >
              Disabled button
            </button>
            <a
              className="btn btn-outline"
              href="#url"
              role="button"
              aria-disabled="true"
            >
              Disabled button
            </a>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-outline mr-2" type="button" aria-disabled="true">Disabled button</button>
      <a class="btn btn-outline" href="#url" role="button" aria-disabled="true">Disabled button</a>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DisabledButton;
