import React from "react";
import {
  Heading,
  SubHeading,
  CodeBlocks,
  Paragraph,
  TableHeading,
  TableData,
} from "./../../mini_components";

function ResponsiveGrids() {
  return (
    <React.Fragment>
      <Heading heading="Responsive grids" id="responsive-grids" />
      <Paragraph paragraph="All the column width classes can be set per breakpoint to create responsive grid layouts. Each responsive style is applied to the specified breakpoint and up." />
      <SubHeading subheading="Breakpoints" id="breakpoints" />
      <Paragraph paragraph="We use abbreviations for each breakpoint to keep the class names concise." />
      <table className="border my-3">
        <thead>
          <tr>
            <TableHeading th="Breakpoint" />
            <TableHeading th="Syntax" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td="Small" />
            <TableData td="sm" />
            <TableData td="min-width: 544px" />
          </tr>
          <tr>
            <TableData td="Medium" />
            <TableData td="md" />
            <TableData td="min-width: 768px" />
          </tr>
          <tr>
            <TableData td="Large" />
            <TableData td="lg" />
            <TableData td="min-width: 1012px" />
          </tr>
          <tr>
            <TableData td="Extra-large" />
            <TableData td="xl" />
            <TableData td="min-width: 1280px" />
          </tr>
        </tbody>
      </table>
      <b>Note:</b>
      <Paragraph paragraph="The lg breakpoint matches our current page width of 980px including left and right padding of 16px ($spacer-3). This is so that content doesn't touch the edges of the window when resized." />
      <Paragraph paragraph="In this example at the sm breakpoint 2 columns will show, at the md breakpoint 4 columns will show, and at the lg breakpoint 6 columns will show." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
                .col-sm-6 .col-md-3 .col-lg-2
              </div>
              <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
                .col-sm-6 .col-md-3 .col-lg-2
              </div>
              <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
                .col-sm-6 .col-md-3 .col-lg-2
              </div>
              <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
                .col-sm-6 .col-md-3 .col-lg-2
              </div>
              <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
                .col-sm-6 .col-md-3 .col-lg-2
              </div>
              <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
                .col-sm-6 .col-md-3 .col-lg-2
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
            .col-sm-6 .col-md-3 .col-lg-2
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
            .col-sm-6 .col-md-3 .col-lg-2
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
            .col-sm-6 .col-md-3 .col-lg-2
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
            .col-sm-6 .col-md-3 .col-lg-2
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
            .col-sm-6 .col-md-3 .col-lg-2
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
            .col-sm-6 .col-md-3 .col-lg-2
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="For demonstration, this is how the above example would look at the sm breakpoint." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
              <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
              <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
              <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
              <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
              <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-sm-6 float-left p-2 border">
            .col-sm-6
          </div>
          <div class="col-sm-6 float-left p-2 border">
            .col-sm-6
          </div>
          <div class="col-sm-6 float-left p-2 border">
            .col-sm-6
          </div>
          <div class="col-sm-6 float-left p-2 border">
            .col-sm-6
          </div>
          <div class="col-sm-6 float-left p-2 border">
            .col-sm-6
          </div>
          <div class="col-sm-6 float-left p-2 border">
            .col-sm-6
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="This is how that same example would look at the md breakpoint." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-md-3 float-left p-2 border">.col-md-3</div>
              <div className="col-md-3 float-left p-2 border">.col-md-3</div>
              <div className="col-md-3 float-left p-2 border">.col-md-3</div>
              <div className="col-md-3 float-left p-2 border">.col-md-3</div>
              <div className="col-md-3 float-left p-2 border">.col-md-3</div>
              <div className="col-md-3 float-left p-2 border">.col-md-3</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-md-3 float-left p-2 border">
            .col-md-3
          </div>
          <div class="col-md-3 float-left p-2 border">
            .col-md-3
          </div>
          <div class="col-md-3 float-left p-2 border">
            .col-md-3
          </div>
          <div class="col-md-3 float-left p-2 border">
            .col-md-3
          </div>
          <div class="col-md-3 float-left p-2 border">
            .col-md-3
          </div>
          <div class="col-md-3 float-left p-2 border">
            .col-md-3
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="This is how that example would look at the lg breakpoint." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-lg clearfix">
              <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
              <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
              <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
              <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
              <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
              <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-lg clearfix">
          <div class="col-lg-2 float-left p-2 border">
            .col-lg-2
          </div>
          <div class="col-lg-2 float-left p-2 border">
            .col-lg-2
          </div>
          <div class="col-lg-2 float-left p-2 border">
            .col-lg-2
          </div>
          <div class="col-lg-2 float-left p-2 border">
            .col-lg-2
          </div>
          <div class="col-lg-2 float-left p-2 border">
            .col-lg-2
          </div>
          <div class="col-lg-2 float-left p-2 border">
            .col-lg-2
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ResponsiveGrids;
