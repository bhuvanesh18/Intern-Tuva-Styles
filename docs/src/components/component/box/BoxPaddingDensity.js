import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function BoxPaddingDensity() {
  return (
    <React.Fragment>
      <Heading heading="Box padding density" id="box-padding-density" />
      <Paragraph paragraph="You can changed the padding density of the box component." />
      <Paragraph paragraph="Use Box--condensed to apply a more condensed line-height and reduce the padding on the Y axis." />
      <CodeBlocks
        htmlcoderender={[
          <div class="Box Box--condensed">
            <div className="Box-header">
              <h3 className="Box-title">Box title</h3>
            </div>
            <div className="Box-body">Box body</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box Box--condensed">
          <div class="Box-header">
            <h3 class="Box-title">
              Box title
            </h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
          <ul>
            <li class="Box-row">
              Box row one
            </li>
            <li class="Box-row">
              Box row two
            </li>
          </ul>
          <div class="Box-footer">
            Box footer
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use Box--spacious to increase padding and increase the title font size." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box Box--spacious f4">
            <div className="Box-header">
              <h3 className="Box-title">Box title</h3>
            </div>
            <div className="Box-body">Box body</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box Box--spacious f4">
          <div class="Box-header">
            <h3 class="Box-title">
              Box title
            </h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
          <ul>
            <li class="Box-row">
              Box row one
            </li>
            <li class="Box-row">
              Box row two
            </li>
          </ul>
          <div class="Box-footer">
            Box footer
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BoxPaddingDensity;
