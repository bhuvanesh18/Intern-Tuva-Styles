import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading
} from "./../../mini_components";

function BoxElements() {
  return (
    <React.Fragment>
      <Heading heading="Box elements" id="box-elements" />
      <Paragraph paragraph="Box elements include Box-header, Box-body, and Box-footer. These elements include borders and consistent padding. Optionally, you can include use Box-title which applies a bold font-weight the heading." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">Box title</h3>
            </div>
            <div className="Box-body">Box body</div>
            <div className="Box-footer">Box footer</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header">
            <h3 class="Box-title">
              Box title
            </h3>
          </div>
          <div class="Box-body">
            Box body
          </div>
          <div class="Box-footer">
            Box footer
          </div>
        </div>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Box row" id="box-row" />
      <Paragraph paragraph="Use Box-row to add rows with borders and maintain the same padding. Box rows have a lighter border to give contrast between the header and footer." />
      <p>
        <b>Note:</b> Box rows have some reliance on markup structure in order to
        target the first and last rows, therefore using an unordered list is
        recommended. See{" "}
        <a href="#box-row-markup-structure">box row markup structure </a> for
        more information.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
              <li className="Box-row">Box row three</li>
              <li className="Box-row">Box row four</li>
            </ul>
          </div>
        ]}
        codeline={[
          `
      <div class="Box">
        <ul>
          <li class="Box-row">
            Box row one
          </li>
          <li class="Box-row">
            Box row two
          </li>
          <li class="Box-row">
            Box row three
          </li>
          <li class="Box-row">
            Box row four
          </li>
        </ul>
      </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Rows can be used with or without Box-header, Box-footer, or Box-body." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">
              <strong>Box header</strong>
            </div>
            <div className="Box-body">Box body</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
              <li className="Box-row">Box row three</li>
              <li className="Box-row">Box row four</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        ]}
        codeline={[
          `
      <div class="Box">
        <div class="Box-header">
          Box header
        </div>
        <div class="Box-body">
          <strong>Box body</strong>
        </div>
        <ul>
          <li class="Box-row">
            Box row one
          </li>
          <li class="Box-row">
            Box row two
          </li>
          <li class="Box-row">
            Box row three
          </li>
          <li class="Box-row">
            Box row four
          </li>
        </ul>
        <div class="Box-footer">
          Box footer
        </div>
      </div>`
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Box row markup structure"
        id="box-row-markup-structure"
      />
      <Paragraph paragraph="Box rows have some reliance on markup structure in order to target the first and last rows. Box rows are given a top border that is lighter in color than other box elements so the first row is targeted to apply a darker border color. An inner border-radius is applied to the first and last rows that that row corners don't poke outside the Box, this can be particularly noticeable when using a highlight on box rows." />
      <Paragraph paragraph="Using an unordered list is recommended in order to target the first and last rows, however, if you need to use a <div> for your rows, you may want to place your rows inside a parent <div> so that the first and last rows are styled appropriately." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">Box header</div>
            <div>
              <div className="Box-row">Box row using a div</div>
              <div className="Box-row">Box row using a div</div>
            </div>
          </div>
        ]}
        codeline={[
          `
    <div class="Box">
      <div class="Box-header">
        Box header
      </div>
      <!-- This wrapping div ensures the first and last rows can be targeted for styling. -->
      <div>
      <div class="Box-row">Box row using a div</div>
        <div class="Box-row">Box row using a div</div>
      </div>
    </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default BoxElements;
