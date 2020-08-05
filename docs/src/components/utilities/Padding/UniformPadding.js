import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function UniformPadding() {
  return (
    <React.Fragment>
      <Heading heading="Uniform padding" id="uniform-padding" />
      <Paragraph paragraph="Use uniform spacing utilities to apply equal padding to all sides of an element. These utilities can be used with a spacing scale from 0-6." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="padding-green d-inline-block p-0">
              <div className="d-inline-block block-blue">.p-0</div>
            </div>
            <div className="padding-green d-inline-block p-1">
              <div className="d-inline-block block-blue">.p-1</div>
            </div>
            <div className="padding-green d-inline-block p-2">
              <div className="d-inline-block block-blue">.p-2</div>
            </div>
            <div className="padding-green d-inline-block p-3">
              <div className="d-inline-block block-blue">.p-3</div>
            </div>
            <div className="padding-green d-inline-block p-4">
              <div className="d-inline-block block-blue">.p-4</div>
            </div>
            <div className="padding-green d-inline-block p-5">
              <div className="d-inline-block block-blue">.p-5</div>
            </div>
            <div className="padding-green d-inline-block p-6">
              <div className="d-inline-block block-blue">.p-6</div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="padding-green d-inline-block p-0">
          <div class="d-inline-block block-blue">.p-0</div>
        </div>
        <div class="padding-green d-inline-block p-1">
          <div class="d-inline-block block-blue">.p-1</div>
        </div>
        <div class="padding-green d-inline-block p-2">
          <div class="d-inline-block block-blue">.p-2</div>
        </div>
        <div class="padding-green d-inline-block p-3">
          <div class="d-inline-block block-blue">.p-3</div>
        </div>
        <div class="padding-green d-inline-block p-4">
          <div class="d-inline-block block-blue">.p-4</div>
        </div>
        <div class="padding-green d-inline-block p-5">
          <div class="d-inline-block block-blue">.p-5</div>
        </div>
        <div class="padding-green d-inline-block p-6">
          <div class="d-inline-block block-blue">.p-6</div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default UniformPadding;
