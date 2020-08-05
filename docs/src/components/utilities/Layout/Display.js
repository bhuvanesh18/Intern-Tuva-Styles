import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading,
  TableHeading,
  TableData
} from "../../mini_components";

function Display() {
  return (
    <React.Fragment>
      <Heading heading="Display" id="display" />
      <Paragraph paragraph="Adjust the display of an element with .d-block, .d-none, .d-inline, .d-inline-block, .d-table, .d-table-cell utilities." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-inline border">
            .d-inline
            <div className="d-inline-block border">.d-inline-block</div>
            <span className="d-block border">.d-block</span>
            <div className="d-table border">
              <div className="d-table-cell border">.d-table-cell</div>
            </div>
            <div className="d-table-cell border">.d-table-cell</div>
            <div className="d-none">.d-none</div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-inline border">
        .d-inline
        <div class="d-inline-block border">
          .d-inline-block
        </div>
        <span class="d-block border">.d-block</span>
        <div class="d-table border">
          <div class="d-table-cell border">
            .d-table-cell
          </div>
        </div>
        <div class="d-table-cell border">
          .d-table-cell
        </div>
        <div class="d-none">
          .d-none
        </div>
      </div>
        `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="The HTML hidden attribute"
        id="the-html-hidden-attribute"
      />
      <Paragraph paragraph=" includes a rule that sets display: none !important for any element with the hidden attribute. You can safely use the hidden attribute with display utilities, but we suggest:" />
      <ol className="ml-6">
        <li>
          Use the hidden attribute (and corresponding JavaScript property) if
          you're going to programmatically show and hide content.
        </li>
        <li>
          Use d-none and/or its responsive variants (d-sm-block, d-lg-none) to
          conditionally show content at different screen sizes.
        </li>
      </ol>
      <Paragraph paragraph="Rather than toggling the d-none class in JavaScript, you should toggle the hidden property on an element. This means that you won't have to restore any more specific display utility (d-inline or d-flex, for instance) just to work around the order in which they're listed in the stylesheet." />
      <CodeBlocks
        codeline={[
          `
        // Good:
        element.hidden = !visible

        // Bad:
        element.classList.toggle('d-none', !visible)
        element.classList.toggle('d-inline', visible)
        `
        ]}
      />
      <SubHeading
        subheading="display:table wrapping issues"
        id="display-table-wrapping-issues"
      />
      <Paragraph paragraph="There are known issues with using display:table and wrapping long strings, particularly in Firefox. You may need to use table-fixed on elements with d-table and apply column widths to table cells, which you can do with our column width styles." />
      <CodeBlocks
        htmlcoderender={[
          <div className="d-table table-fixed width-full">
            <div className="d-table-cell border">.d-table-cell</div>
            <div className="d-table-cell col-10 border">
              d-table-cell .col-10
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="d-table table-fixed width-full">
        <div class="d-table-cell border">
          .d-table-cell
        </div>
        <div class="d-table-cell col-10 border">
          d-table-cell .col-10
        </div>
      </div>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Responsive display" id="responsive-display" />
      <p>
        A selection of display utilities are able to be applied or changed per
        breakpoint. .d-block, .d-none, .d-inline, and .d-inline-block are
        available as responsive utilities using the following formula:
        d-[breakpoint]-[property]. For example: d-md-inline-block. Each
        responsive display utility is applied to the specified breakpoint and
        up.
      </p>
      <Paragraph paragraph="In the following example, the ul element switches from display: block on mobile to display: inline-block at the md breakpoint, while the list items remain inline" />
      <CodeBlocks
        htmlcoderender={[
          <React.Fragment>
            <h5 className="d-md-inline-block">.d-md-inline-block</h5>
            <ul className="d-md-inline-block border">
              <li className="d-inline border">.d-inline</li>
              <li className="d-inline border">.d-inline</li>
            </ul>
          </React.Fragment>
        ]}
        codeline={[
          `
        <h5 class="d-md-inline-block">.d-md-inline-block</h5>
        <ul class="d-md-inline-block border">
          <li class="d-inline border">.d-inline</li>
          <li class="d-inline border">.d-inline</li>
        </ul>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Responsive hide" id="responsive-hide" />
      <Paragraph
        paragraph="Hide utilities are able to be applied or changed per breakpoint using the following formula:
hide-[breakpoint], for example: hide-sm. Hide utilities act differently from other responsive styles and are applied to each
breakpoint-range only."
      />
      <table>
        <thead>
          <tr>
            <TableHeading th="Shorthand" />
            <TableHeading th="Range" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td="-sm" />
            <TableData td="0—543px" />
          </tr>
          <tr>
            <TableData td="-md" />
            <TableData td="544px—767px" />
          </tr>
          <tr>
            <TableData td="-lg" />
            <TableData td="768px—1011px" />
          </tr>
          <tr>
            <TableData td="-xl" />
            <TableData td="1012px and above" />
          </tr>
        </tbody>
      </table>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <h4>Potato update</h4>
            <span className="hide-sm hide-md">
              Opened by <a href="#url">broccolini</a>
            </span>
            <span className="d-md-none">Updated</span> 3 hours ago
          </div>
        ]}
        codeline={[
          `
      <div>
        <h4>Potato update</h4>
        <span class="hide-sm hide-md">Opened by <a href="#url">broccolini</a></span>
        <span class="d-md-none">Updated</span> 3 hours ago
      </div>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Text direction" id="text-direction" />
      <Paragraph paragraph=".direction-ltr or .direction-rtl can be used to change the text direction. This is especially helpful when paired with .d-table, .d-table-cell, and .v-align-middle to create equal height, vertically centered, alternating content." />
    </React.Fragment>
  );
}

export default Display;
