import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function Large() {
  return (
    <React.Fragment>
      <Heading heading="Large" id="large" />
      <Paragraph paragraph="Large box shadows are very diffused and used sparingly in the product UI." />
      <CodeBlocks
        htmlcoderender={[
          <div className="box-shadow-large p-3">.box-shadow-large</div>
        ]}
        codeline={[
          `
          <div class="box-shadow-large p-3">
            .box-shadow-large
          </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="These shadows are used for marketing content, UI screenshots, and content that appears on top of other page elements." />
      <CodeBlocks
        htmlcoderender={[
          <div className="box-shadow-large rounded-2 overflow-hidden mb-3 p-2">
            <img
              src="https://tuvalabs.com/static/img/tuva-logo-teal.png"
              className="img-responsive"
              alt="Tuva Logo"
            />
          </div>
        ]}
        codeline={[
          `
          <div class="box-shadow-large rounded-2 overflow-hidden mb-3 p-2">
            <img
              src="https://tuvalabs.com/static/img/tuva-logo-teal.png"
              class="img-responsive"
              alt="Tuva Logo"
            />
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Large;
