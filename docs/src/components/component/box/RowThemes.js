import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading
} from "./../../mini_components";

function RowThemes() {
  return (
    <React.Fragment>
      <Heading heading="Row themes" id="row-themes" />
      <Paragraph paragraph="You can change the background color for individual rows, or change the color on hover or navigation focus." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-row Box-row--gray">.Box-row--gray</div>
            <div className="Box-row Box-row--hover-gray">
              .Box-row--hover-gray
            </div>
            <div className="Box-row Box-row--yellow">.Box-row--yellow</div>
            <div className="Box-row Box-row--hover-blue">
              .Box-row--hover-blue
            </div>
            <div className="Box-row Box-row--blue">.Box-row--blue</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-row Box-row--gray">
            .Box-row--gray
          </div>
          <div class="Box-row Box-row--hover-gray">
            .Box-row--hover-gray
          </div>
          <div class="Box-row Box-row--yellow">
            .Box-row--yellow
          </div>
          <div class="Box-row Box-row--hover-blue">
            .Box-row--hover-blue
          </div>
          <div class="Box-row Box-row--blue">
            .Box-row--blue
          </div>
        </div>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Box row unread" id="box-row-unread" />
      <Paragraph paragraph="Use .Box-row-unread to apply a blue vertical line highlight for indicating a row contains unread items." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-row">Box row</div>
            <div className="Box-row Box-row--unread">Box row unread</div>
            <div className="Box-row">Box row</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-row">
            Box row
          </div>
          <div class="Box-row Box-row--unread">
            Box row unread
          </div>
          <div class="Box-row">
            Box row
          </div>
        </div>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Box row link" id="box-row-link" />
      <Paragraph paragraph="Use .Box-row-link when you want a link to appear dark gray and blue on hover on desktop, and remain a blue link on mobile. This is useful to indicate links on mobile without having hover styles." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-row">
              <a className="Box-row-link" href="#box-row-link">
                Box row link
              </a>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-row">
            <a class="Box-row-link" href="#box-row-link">Box row link</a>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default RowThemes;
