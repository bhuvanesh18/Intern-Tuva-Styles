import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function Alignment() {
  return (
    <React.Fragment>
      <Heading heading="Alignment" id="alignment" />
      <Paragraph paragraph="Adjust the alignment of an element with .v-align-baseline, .v-align-top, .v-align-middle or .v-align-bottom. The vertical-align property only applies to inline or table-cell boxes." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-table border border-gray">
            <div className="d-table-cell">
              <h4>Potatoes</h4>
            </div>
            <div className="d-table-cell v-align-baseline">
              .v-align-baseline
            </div>
            <div className="d-table-cell v-align-top">.v-align-top</div>
            <div className="d-table-cell v-align-middle">.v-align-middle</div>
            <div className="d-table-cell v-align-bottom">.v-align-bottom</div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-table border border-gray">
        <div class="d-table-cell"><h4>Potatoes</h4></div>
        <div class="d-table-cell v-align-baseline">.v-align-baseline</div>
        <div class="d-table-cell v-align-top">.v-align-top</div>
        <div class="d-table-cell v-align-middle">.v-align-middle</div>
        <div class="d-table-cell v-align-bottom">.v-align-bottom</div>
      </div>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use v-align-text-top or v-align-text-bottom to adjust the alignment of an element with the top or bottom of the parent element's font." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border border-gray">
            <h4 className="mr-1">
              Potatoes
              <span className="h5 v-align-text-top mr-1">
                .v-align-text-top
              </span>
              <span className="h5 v-align-text-bottom mr-1">
                .v-align-text-bottom
              </span>
            </h4>
          </div>
        ]}
        codeline={[
          `
      <div class="border border-gray">
        <h4 class="mr-1">Potatoes
          <span class="h5 v-align-text-top mr-1">.v-align-text-top</span>
          <span class="h5 v-align-text-bottom mr-1">.v-align-text-bottom</span>
        </h4>
      </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Alignment;
