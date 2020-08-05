import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Gutters() {
  return (
    <React.Fragment>
      <Heading heading="Gutters" id="gutters" />
      <Paragraph paragraph="Use gutter styles or padding utilities to create gutters. You can use the default gutter style, gutter, or either of its modifiers, gutter-condensed or gutter-spacious. Gutter styles also support responsive breakpoint modifiers. Gutter styles add padding to the left and right side of each column and apply a negative margin to the container to ensure content inside each column lines up with content outside of the grid." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="clearfix gutter-md-spacious border">
              <div className="col-3 float-left">
                <div className="border p-3">.col-md-3</div>
              </div>
              <div className="col-3 float-left">
                <div className="border p-3">.col-md-3</div>
              </div>
              <div className="col-3 float-left">
                <div className="border p-3">.col-md-3</div>
              </div>
              <div className="col-3 float-left">
                <div className="border p-3">.col-md-3</div>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="clearfix gutter-md-spacious border">
          <div class="col-3 float-left">
            <div class="border p-3">.col-md-3</div>
          </div>
          <div class="col-3 float-left">
            <div class="border p-3">.col-md-3</div>
          </div>
          <div class="col-3 float-left">
            <div class="border p-3">.col-md-3</div>
          </div>
          <div class="col-3 float-left">
            <div class="border p-3">.col-md-3</div>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use padding utilities to create gutters for more customized layouts." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-3 float-left pr-2 mb-3">
                <div className="border bg-gray-light">.pr-2</div>
              </div>
              <div className="col-3 float-left px-2 mb-3">
                <div className="border bg-gray-light">.px-2</div>
              </div>
              <div className="col-3 float-left px-2 mb-3">
                <div className="border bg-gray-light">.px-2</div>
              </div>
              <div className="col-3 float-left pl-2 mb-3">
                <div className="border bg-gray-light">.pl-2</div>
              </div>
            </div>
            <div className="container-lg clearfix">
              <div className="col-3 float-left pr-2">
                <div className="border bg-gray-light">.pr-2</div>
              </div>
              <div className="col-9 float-left pl-2">
                <div className="border bg-gray-light">.pl-2</div>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-3 float-left pr-2 mb-3">
            <div class="border bg-gray-light">.pr-2</div>
          </div>
          <div class="col-3 float-left px-2 mb-3">
            <div class="border bg-gray-light">.px-2</div>
          </div>
          <div class="col-3 float-left px-2 mb-3">
            <div class="border bg-gray-light">.px-2</div>
          </div>
          <div class="col-3 float-left pl-2 mb-3">
            <div class="border bg-gray-light">.pl-2</div>
          </div>
        </div>
        <div class="container-lg clearfix">
          <div class="col-3 float-left pr-2">
            <div class="border bg-gray-light">.pr-2</div>
          </div>
          <div class="col-9 float-left pl-2">
            <div class="border bg-gray-light">.pl-2</div>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Gutters;
