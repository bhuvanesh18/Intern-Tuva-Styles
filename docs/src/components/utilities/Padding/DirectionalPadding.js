import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function DirectionalPadding() {
  return (
    <React.Fragment>
      <Heading heading="Directional padding" id="directional-padding" />
      <Paragraph paragraph="Use directional utilities to apply padding to an individual side, or the X and Y axis of an element. Directional utilities can change or override default padding, and can be used with a spacing scale of 0-6." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="padding-green d-inline-block pt-3">
              <div className="d-inline-block block-blue">.pt-3</div>
            </div>
            <div className="padding-green d-inline-block pr-3">
              <div className="d-inline-block block-blue">.pr-3</div>
            </div>
            <div className="padding-green d-inline-block pb-3">
              <div className="d-inline-block block-blue">.pb-3</div>
            </div>
            <div className="padding-green d-inline-block pl-3">
              <div className="d-inline-block block-blue">.pl-3</div>
            </div>
            <div className="padding-green d-inline-block py-3">
              <div className="d-inline-block block-blue">.py-3</div>
            </div>
            <div className="padding-green d-inline-block px-3">
              <div className="d-inline-block block-blue">.px-3</div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="padding-green d-inline-block pt-3">
          <div class="d-inline-block block-blue">.pt-3</div>
        </div>
        <div class="padding-green d-inline-block pr-3">
          <div class="d-inline-block block-blue">.pr-3</div>
        </div>
        <div class="padding-green d-inline-block pb-3">
          <div class="d-inline-block block-blue">.pb-3</div>
        </div>
        <div class="padding-green d-inline-block pl-3">
          <div class="d-inline-block block-blue">.pl-3</div>
        </div>
        <div class="padding-green d-inline-block py-3">
          <div class="d-inline-block block-blue">.py-3</div>
        </div>
        <div class="padding-green d-inline-block px-3">
          <div class="d-inline-block block-blue">.px-3</div>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DirectionalPadding;
