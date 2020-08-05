import React from "react";
import { Paragraph, CodeBlocks, Heading } from "../../mini_components";
import Sticky from "./Sticky";
import ResponsivePosition from "./ResponsivePosition";
import ScreenReaderOnly from "./ScreenReaderOnly";

function Position() {
  return (
    <React.Fragment>
      <Heading heading="Position" id="position" />
      <Paragraph paragraph="Position utilities can be used to alter the default document flow." />
      <b className="mt-2">
        Be careful when using positioning, it's often unnecessary and commonly
        misused.
      </b>
      <Paragraph paragraph="Use .position-relative to create a new stacking context." />
      <i className="mt-2">
        Note how the other elements are displayed as if "Two" were in its normal
        position and taking up space.
      </i>
      <CodeBlocks
        htmlcoderender={[
          <div className="d-table table-fixed width-full">
            <div className="d-table-cell col-12">
              <div
                className="d-inline-block float-left bg-blue text-white m-3"
                style={{ width: "100" + "px", height: "100" + "px" }}
              >
                One
              </div>
              <div
                className="d-inline-block float-left position-relative bg-blue text-white m-3"
                style={{
                  width: "100" + "px",
                  height: "100" + "px",
                  top: "12" + "px",
                  left: "12" + "px",
                }}
              >
                Two
              </div>
              <div
                className="d-inline-block float-left bg-blue text-white m-3"
                style={{ width: "100" + "px", height: "100" + "px" }}
              >
                Three
              </div>
              <div
                className="d-inline-block float-left bg-blue text-white m-3"
                style={{ width: "100" + "px", height: "100" + "px" }}
              >
                Four
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="d-inline-block float-left bg-blue text-white m-3" style="width:100px; height:100px;">
          One
        </div>
        <div class="d-inline-block float-left position-relative bg-blue text-white m-3" style="width:100px; height:100px; top:12px; left:12px;">
          Two
        </div>
        <div class="d-inline-block float-left bg-blue text-white m-3" style="width:100px; height:100px;">
          Three
        </div>
        <div class="d-inline-block float-left bg-blue text-white m-3" style="width:100px; height:100px;">
          Four
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .position-absolute to take elements out of the normal document flow." />
      <CodeBlocks
        htmlcoderender={[
          <div className="position-relative" style={{ height: "116" + "px" }}>
            <button type="button" className="btn mb-1">
              Button
            </button>
            <div className="position-absolute border border-gray p-2">
              <a href="#url" className="d-block p-1">
                Mashed potatoes
              </a>
              <a href="#url" className="d-block p-1">
                Fries
              </a>
            </div>
          </div>,
        ]}
        codeline={[
          `
      <div class="position-relative" style="height:116px;">
        <button type="button" class="btn mb-1">Button</button>
        <div class="position-absolute border border-gray p-2">
          <a href="#url" class="d-block p-1">Mashed potatoes</a>
          <a href="#url" class="d-block p-1">Fries</a>
        </div>
      </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .position-fixed to position an element relative to the viewport." />
      <b className="mt-2">
        Be careful when using fixed positioning. It is tricky to use and can
        lead to unwanted side effects.
      </b>
      <CodeBlocks
        htmlcoderender={[
          <div style={{ height: "64" + "px" }}>
            <iframe
              src="./../output/utilitiy/Layout/Position_output1.html"
              frameborder="0"
              style={{ border: "0", width: "100" + "%", height: "64" + "px" }}
              allowfullscreen="true"
              title="Position-1"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
      <div style="height: 64px;">
        <div class="position-fixed right-0 bottom-0 bg-gray-light border p-2">
          .position-fixed
        </div>
      </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use top-0, right-0, bottom-0, and left-0 with position-absolute, position-fixed, or position-relative to further specify an elements position." />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ height: "64" + "px" }}>
            <iframe
              src="./../output/utilitiy/Layout/Position_output2.html"
              frameborder="0"
              style={{ border: "0", width: "100" + "%", height: "64" + "px" }}
              allowfullscreen="true"
              title="Position-2"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <div style="height: 64px;">
          <div class="border position-absolute top-0 left-0">
            .top-0 .left-0
          </div>
          <div class="border position-absolute top-0 right-0">
            .top-0 .right-0
          </div>
          <div class="border position-absolute bottom-0 right-0">
            .bottom-0 .right-0
          </div>
          <div class="border position-absolute bottom-0 left-0">
            .bottom-0 .left-0
          </div>
        </div>
          `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="To fill an entire width or height, use opposing directions." />
      <i className="mt-2">
        Note: fixed positioning has been disabled here for demonstration only.
      </i>
      <CodeBlocks
        htmlcoderender={[
          <div style={{ height: "64" + "px" }}>
            <iframe
              src="./../output/utilitiy/Layout/Position_output3.html"
              frameborder="0"
              style={{ border: "0", width: "100" + "%", height: "64" + "px" }}
              allowfullscreen="true"
              title="Position-3"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <div class="position-fixed left-0 right-0 p-3 bg-gray-dark text-white">
          .position-fixed .left-0 .right-0
        </div>
          `,
        ]}
        lang="html"
      />
      <Sticky />
      <ResponsivePosition />
      <ScreenReaderOnly />
    </React.Fragment>
  );
}

export default Position;
