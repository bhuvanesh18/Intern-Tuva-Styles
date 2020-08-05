import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BoxDangerTheme() {
  return (
    <React.Fragment>
      <Heading heading="Box danger theme" id="box-danger-theme" />
      <Paragraph paragraph="Use Box--danger to apply a red border to the outside of the box. This theme is helpful for communicating destructive actions." />
      <p>
        <b>Note:</b> Box-danger only works with either Box-row's or Box-body.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="Box Box--danger">
            <div className="Box-row">Row one</div>
            <div className="Box-row">Row two</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box Box--danger">
          <div class="Box-row">
            Row one
          </div>
          <div class="Box-row">
            Row two
          </div>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="mx-3">
            <div className="Subhead border-bottom-0">
              <h2 className="Subhead-heading Subhead-heading--danger">
                Danger zone
              </h2>
            </div>

            <div className="Box Box--danger">
              <div className="Box-body">Box body</div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div>
          <div class="Subhead border-bottom-0">
            <h2 class="Subhead-heading Subhead-heading--danger">Danger zone</h2>
          </div>

          <div class="Box Box--danger">
            <div class="Box-body">
              Box body
            </div>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BoxDangerTheme;
