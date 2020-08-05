import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SubheadWithButtonAndLink() {
  return (
    <React.Fragment>
      <Heading
        heading="Subhead with button and link"
        id="subhead-with-button-and-link"
      />
      <Paragraph paragraph="You can add a button or something to the right of .Subhead-heading with the .Subhead-actions element." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead">
              <div className="Subhead-heading">Subhead with button</div>
              <div className="Subhead-actions">
                <a href="#url" className="btn btn-sm btn-primary" role="button">
                  Action
                </a>
              </div>
            </div>

            <div className="Subhead Subhead--spacious">
              <div className="Subhead-heading">Subhead with link</div>
              <div className="Subhead-actions">
                <a href="#url">Learn more</a>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="Subhead">
          <div class="Subhead-heading">Subhead with button</div>
          <div class="Subhead-actions"><a href="#url" class="btn btn-sm btn-primary" role="button">Action</a></div>
        </div>

        <div class="Subhead Subhead--spacious">
          <div class="Subhead-heading">Subhead with link</div>
          <div class="Subhead-actions"><a href="#url">Learn more</a></div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SubheadWithButtonAndLink;
