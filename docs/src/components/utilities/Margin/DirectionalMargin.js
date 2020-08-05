import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function DirectionalMargin() {
  return (
    <React.Fragment>
      <Heading heading="Directional margins" id="directional-margins" />
      <Paragraph paragraph="Use directional utilities to apply margin to an individual side, or the X and Y axis of an element. Directional utilities can change or override default margins, and can be used with a spacing scale of 0-6." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue mt-3">.mt-3</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue mr-3">.mr-3</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue mb-3">.mb-3</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue ml-3">.ml-3</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue my-3">.my-3</div>
            </div>
            <div className="margin-orange d-inline-block">
              <div className="d-inline-block block-blue mx-3">.mx-3</div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue mt-3">.mt-3</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue mr-3">.mr-3</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue mb-3">.mb-3</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue ml-3">.ml-3</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue my-3">.my-3</div>
        </div>
        <div class="margin-orange d-inline-block">
          <div class="d-inline-block block-blue mx-3">.mx-3</div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DirectionalMargin;
