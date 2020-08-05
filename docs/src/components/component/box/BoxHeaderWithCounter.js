import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BoxHeaderWithCounter() {
  return (
    <React.Fragment>
      <Heading
        heading="Box headers with counters"
        id="box-headers-with-counters"
      />
      <Paragraph paragraph="Use a counter with a background that works against the contrast of the box header. The default counter colors do not stand out well against the header background so we suggest using one of the following styles:" />
      <Paragraph paragraph="Use Counter--gray for a counter with a gray background and dark gray text." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                Box title
                <span className="Counter Counter--gray">12</span>
              </h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header">
            <h3 class="Box-title">
              Box title
              <span class="Counter Counter--gray">12</span>
            </h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use Counter--gray-dark for a counter with a dark gray background and white text." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                Box title
                <span className="Counter Counter--gray-dark">12</span>
              </h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header">
            <h3 class="Box-title">
              Box title
              <span class="Counter Counter--gray-dark">12</span>
            </h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BoxHeaderWithCounter;
