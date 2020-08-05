import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BorderWithAlphaTransparency() {
  return (
    <React.Fragment>
      <Heading
        heading="Borders with alpha transparency"
        id="borders-with-alpha-transparency"
      />
      <Paragraph paragraph="Use border-black-fade to add an rgba black border with an alpha transparency of 0.15. This is useful when you want a border that tints the background color. " />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="border border-black-fade bg-blue-light p-2 mb-2">
              .border-black-fade .bg-blue-light
            </div>
            <div className="border border-black-fade bg-red-light p-2 mb-2">
              .border-black-fade .bg-red-light
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="border border-black-fade bg-blue-light p-2 mb-2">
          .border-black-fade .bg-blue-light
        </div>
        <div class="border border-black-fade bg-red-light p-2 mb-2">
          .border-black-fade .bg-red-light
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="On dark backgrounds use border-white-fade instead. It adds an rgba white border with an alpha transparency of 0.15." />
      <CodeBlocks
        htmlcoderender={[
          <div className="bg-gray-dark text-white p-3">
            <div className="border border-white-fade p-2">
              .border-white-fade
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="bg-gray-dark text-white p-3">
           <div class="border border-white-fade p-2">
             .border-white-fade
           </div>
          </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .border-white-fade-xx to add a white border with various levels of alpha transparency." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="bg-gray-dark text-white p-3 mb-3">
              <div className="border-bottom border-white-fade-15 p-2 mb-2">
                .border-white-fade-15
              </div>
              <div className="border-bottom border-white-fade-30 p-2 mb-2">
                .border-white-fade-30
              </div>
              <div className="border-bottom border-white-fade-50 p-2 mb-2">
                .border-white-fade-50
              </div>
              <div className="border-bottom border-white-fade-70 p-2 mb-2">
                .border-white-fade-70
              </div>
              <div className="border-bottom border-white-fade-85 p-2 mb-2">
                .border-white-fade-85
              </div>
            </div>
            <div className="bg-blue text-white p-3">
              <div className="border-bottom border-white-fade-15 p-2 mb-2">
                .border-white-fade-15
              </div>
              <div className="border-bottom border-white-fade-30 p-2 mb-2">
                .border-white-fade-30
              </div>
              <div className="border-bottom border-white-fade-50 p-2 mb-2">
                .border-white-fade-50
              </div>
              <div className="border-bottom border-white-fade-70 p-2 mb-2">
                .border-white-fade-70
              </div>
              <div className="border-bottom border-white-fade-85 p-2 mb-2">
                .border-white-fade-85
              </div>
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="bg-gray-dark text-white p-3 mb-3">
          <div class="border-bottom border-white-fade-15 p-2 mb-2">
            .border-white-fade-15
          </div>
          <div class="border-bottom border-white-fade-30 p-2 mb-2">
            .border-white-fade-30
          </div>
          <div class="border-bottom border-white-fade-50 p-2 mb-2">
            .border-white-fade-50
          </div>
          <div class="border-bottom border-white-fade-70 p-2 mb-2">
            .border-white-fade-70
          </div>
          <div class="border-bottom border-white-fade-85 p-2 mb-2">
            .border-white-fade-85
          </div>
        </div>
        <div class="bg-blue text-white p-3">
          <div class="border-bottom border-white-fade-15 p-2 mb-2">
            .border-white-fade-15
          </div>
          <div class="border-bottom border-white-fade-30 p-2 mb-2">
            .border-white-fade-30
          </div>
          <div class="border-bottom border-white-fade-50 p-2 mb-2">
            .border-white-fade-50
          </div>
          <div class="border-bottom border-white-fade-70 p-2 mb-2">
            .border-white-fade-70
          </div>
          <div class="border-bottom border-white-fade-85 p-2 mb-2">
            .border-white-fade-85
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BorderWithAlphaTransparency;
