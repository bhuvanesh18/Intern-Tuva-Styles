import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function UniformMargin() {
  return (
    <React.Fragment>
      <Heading heading="Uniform margins" id="uniform-margins" />
      <Paragraph paragraph="Use uniform spacing utilities to apply equal margin to all sides of an element. These utilities can change or override default margins, and can be used with a spacing scale from 0-6." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-0">.m-0</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-1">.m-1</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-2">.m-2</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-3">.m-3</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-4">.m-4</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-5">.m-5</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue m-6">.m-6</div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-0">.m-0</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-1">.m-1</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-2">.m-2</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-3">.m-3</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-4">.m-4</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-5">.m-5</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue m-6">.m-6</div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default UniformMargin;
