import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Nesting() {
  return (
    <React.Fragment>
      <Heading heading="Nesting" id="nesting" />
      <Paragraph paragraph="You can infinitely nest grid layouts within other columns since the column widths are percentage based. With great flexibility comes great responsibility - be sensible with how far you nest!" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="clearfix">
              <div className="col-6 float-left px-1">
                <div className="border p-1">Unnested</div>
              </div>
              <div className="col-6 float-left">
                <div className="clearfix">
                  <div className="col-6 float-left px-1">
                    <div className="border p-1">1 x Nested</div>
                  </div>
                  <div className="col-6 float-left">
                    <div className="col-6 float-left px-1">
                      <div className="border p-1">2 x Nested</div>
                    </div>
                    <div className="col-6 float-left px-1">
                      <div className="border p-1">2 x Nested</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="clearfix">
          <div class="col-6 float-left px-1">
            <div class="border p-1">Unnested</div>
          </div>
          <div class="col-6 float-left">
            <div class="clearfix">
              <div class="col-6 float-left px-1">
                <div class="border p-1">1 x Nested</div>
              </div>
              <div class="col-6 float-left">
                <div class="col-6 float-left px-1">
                  <div class="border p-1">2 x Nested</div>
                </div>
                <div class="col-6 float-left px-1">
                  <div class="border p-1">2 x Nested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Nesting;
