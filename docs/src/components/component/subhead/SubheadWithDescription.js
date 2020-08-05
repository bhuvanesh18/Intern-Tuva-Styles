import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SubheadWithDescription() {
  return (
    <React.Fragment>
      <Heading
        heading="Subhead with description"
        id="subhead-with-description"
      />
      <Paragraph paragraph="You can add a one line description to the subhead with .Subhead-description." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead">
              <div className="Subhead-heading">Subhead with description</div>
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
          <div class="Subhead-heading">Subhead with description</div>
          <div class="Subhead-description">The subhead is a subdued header style with a light bottom border.</div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="For longer descriptions, it is recommended that you use a paragraph below the Subhead." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Subhead">
              <div className="Subhead-heading">Plain subhead</div>
            </div>
            <p>
              This is a longer description that is sitting below the Subheader.
              It's much longer than a description that could sit comfortably in
              the Subhead. It might even have <strong>bold</strong> text.{" "}
              <a href="#">Click to learn more.</a>
            </p>
          </div>,
        ]}
        codeline={[
          `
        <div class="Subhead">
          <div class="Subhead-heading">Plain subhead</div>
        </div>
        <p>
          This is a longer description that is sitting below the Subheader. It's much longer than a description that could sit comfortably in the Subhead. It might even have <strong>bold</strong> text. <a href="#">Click to learn more.</a>
        </p>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SubheadWithDescription;
