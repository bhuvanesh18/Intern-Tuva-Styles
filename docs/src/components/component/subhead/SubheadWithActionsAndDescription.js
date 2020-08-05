import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SubheadWithActionsAndDescription() {
  return (
    <React.Fragment>
      <Heading
        heading="Subhead with actions and description"
        id="subhead-with-actions-and-description"
      />
      <Paragraph paragraph="Use all the elements together to create a Subhead with actions and a description." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead">
              <div className="Subhead-heading">
                Subhead with actions and description
              </div>
              <div className="Subhead-actions">
                <a href="#url" className="btn btn-sm btn-primary" role="button">
                  Action
                </a>
              </div>
              <div className="Subhead-description">
                The subhead is a subdued header style with a light bottom
                border.
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="Subhead">
          <div class="Subhead-heading">Subhead with actions and description</div>
          <div class="Subhead-actions"><a href="#url" class="btn btn-sm btn-primary" role="button">Action</a></div>
          <div class="Subhead-description">The subhead is a subdued header style with a light bottom border.</div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SubheadWithActionsAndDescription;
