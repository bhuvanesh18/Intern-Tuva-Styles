import React from "react";
import {
  Heading,
  CodeBlocks,
  Paragraph,
  SubHeading,
} from "./../../mini_components";

function FloatBasedGrid() {
  return (
    <React.Fragment>
      <Heading heading="Float based grid" id="float-based-grid" />
      <Paragraph paragraph="Use .clearfix on the container and float utilities with columns for a floated grid layout." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-4 float-left border p-4">My column</div>
              <div className="col-4 float-left border p-4">Looks better</div>
              <div className="col-4 float-left border p-4">
                Than your column
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-4 float-left border p-4">
            My column
          </div>
          <div class="col-4 float-left border p-4">
            Looks better
          </div>
          <div class="col-4 float-left border p-4">
            Than your column
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <SubHeading subheading="Reversed grid" id="reversed-grid" />
      <Paragraph paragraph="To reverse the order of columns, use float-right to float columns to the right." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-4 float-right border p-4">One</div>
              <div className="col-4 float-right border p-4">Two</div>
              <div className="col-4 float-right border p-4">Three</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-4 float-right border p-4">
            One
          </div>
          <div class="col-4 float-right border p-4">
            Two
          </div>
          <div class="col-4 float-right border p-4">
            Three
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FloatBasedGrid;
