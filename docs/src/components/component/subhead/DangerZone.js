import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function DangerZone() {
  return (
    <React.Fragment>
      <Heading heading="Danger zone" id="danger-zone" />
      <Paragraph paragraph="" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead">
              <div className="Subhead-heading Subhead-heading--danger">
                Danger zone
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="Subhead">
          <div class="Subhead-heading Subhead-heading--danger">Danger zone</div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DangerZone;
