import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function WidthHeight() {
  return (
    <React.Fragment>
      <Heading heading="Width and height" id="width-and-height" />
      <Paragraph paragraph="Use .width-fit to set max-width 100%." />
      <CodeBlocks
        htmlcoderender={[
          <div className="one-fourth column">
            <img
              className="width-fit bg-gray"
              src="https://tuvalabs.com/static/img/favicon.ico"
              alt="width fitted tuva icon"
            />
          </div>
        ]}
        codeline={[
          `
        <div class="one-fourth column">
          <img class="width-fit bg-gray" src="https://tuvalabs.com/static/img/favicon.ico" alt="width fitted tuva icon"
          />
        </div>
          `
        ]}
      />
      <Paragraph paragraph="Use .width-full to set width to 100%." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-table width-full">
            <div className="d-table-cell">
              <input
                className="form-control width-full"
                type="text"
                value="Full width form field"
                aria-label="Sample full width form field"
              />
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-table width-full">
        <div class="d-table-cell">
          <input class="form-control width-full" type="text" value="Full width form field" aria-label="Sample full width form field">
        </div>
      </div>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .width-auto to reset width to auto (initial value). Typically used with responsive variants. Resize the window to see the effect in the example below." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-table width-full width-md-auto">
            <div className="d-table-cell">
              <input
                className="form-control width-full"
                type="text"
                value="Responsive width form field"
                aria-label="Sample full responsive width form field"
              />
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-table width-full width-md-auto">
        <div class="d-table-cell">
          <input class="form-control width-full" type="text" value="Responsive width form field" aria-label="Sample full responsive width form field">
        </div>
      </div>
        `
        ]}
      />
      <Paragraph paragraph="Use .height-fit to set max-height 100%." />
      <CodeBlocks
        htmlcoderender={[
          <div
            className="one-fourth column"
            style={{ height: "100px", overflow: "auto" }}
          >
            <div className="p-3 height-fit border">
              Bacon ipsum dolor amet meatball flank beef tail pig boudin ham
              hock chicken capicola. Shoulder ham spare ribs turducken pork
              tongue. Bresaola corned beef sausage jowl ribeye kielbasa
              tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin
              pig, chuck ground round chicken tongue corned beef biltong.
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="one-fourth column" style="height: 100px; overflow: auto;">
        <div class="p-3 height-fit border">
          Bacon ipsum dolor amet meatball flank beef tail pig boudin ham
          hock chicken capicola. Shoulder ham spare ribs turducken pork
          tongue. Bresaola corned beef sausage jowl ribeye kielbasa
          tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin
          pig, chuck ground round chicken tongue corned beef biltong.
        </div>
      </div>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .height-full to set height to 100%." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-table border border-gray">
            <div className="d-table-cell height-full v-align-middle pl-3">
              <svg
                className="octicon octicon-three-bars"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                ></path>
              </svg>
            </div>
            <div className="p-3">
              Bacon ipsum dolor amet meatball flank beef tail pig boudin ham
              hock chicken capicola. Shoulder ham spare ribs turducken pork
              tongue. Bresaola corned beef sausage jowl ribeye kielbasa
              tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin
              pig, chuck ground round chicken tongue corned beef biltong.
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-table border border-gray">
        <div class="d-table-cell height-full v-align-middle pl-3">
          <svg class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd"
          d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0
          .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
        </div>
        <div class="p-3">
          Bacon ipsum dolor amet meatball flank beef tail pig boudin ham
          hock chicken capicola. Shoulder ham spare ribs turducken pork
          tongue. Bresaola corned beef sausage jowl ribeye kielbasa
          tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin
          pig, chuck ground round chicken tongue corned beef biltong.
        </div>
      </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default WidthHeight;
