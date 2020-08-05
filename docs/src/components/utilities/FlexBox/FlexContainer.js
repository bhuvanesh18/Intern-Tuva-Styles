import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableData,
  TableHeading
} from "../../mini_components/";

function FlexContainer() {
  return (
    <React.Fragment>
      <Heading heading="Flex container" id="flex-container" />
      <Paragraph paragraph="Use these classes to make an element lay out its content using the flexbox model. Each direct child of the flex container will become a flex item." />
      <SubHeading subheading="CSS" id="css" />
      <CodeBlocks
        codeline={[
          `
    .d-flex { display: flex; }
    .d-inline-flex { display: inline-flex; }
    `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".d-flex" />
            <TableData td="The element behaves like a block and lays out its content using the flexbox model." />
          </tr>
          <tr>
            <TableData td=".d-inline-flex" />
            <TableData td="The element behaves like an inline element and lays out its content using the flexbox model." />
          </tr>
        </tbody>
      </table>
      <SubHeading
        subheading="Example using .d-flex"
        id="example-using-d-flex"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light">flex item 1</div>
            <div className="p-5 border bg-gray-light">flex item 2</div>
            <div className="p-5 border bg-gray-light">flex item 3</div>
          </div>
        ]}
        codeline={[
          `
    <!-- flex container -->
    <div class="border d-flex">
      <div class="p-5 border bg-gray-light">flex item 1</div>
      <div class="p-5 border bg-gray-light">flex item 2</div>
      <div class="p-5 border bg-gray-light">flex item 3</div>
    </div>
        `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Example using .d-inline-flex"
        id="example-using-d-inline-flex"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-inline-flex">
            <div className="p-5 border bg-gray-light">flex item 1</div>
            <div className="p-5 border bg-gray-light">flex item 2</div>
            <div className="p-5 border bg-gray-light">flex item 3</div>
          </div>
        ]}
        codeline={[
          `
          <!-- inline-flex container -->
          <div class="border d-inline-flex">
            <div class="p-5 border bg-gray-light">flex item 1</div>
            <div class="p-5 border bg-gray-light">flex item 2</div>
            <div class="p-5 border bg-gray-light">flex item 3</div>
          </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FlexContainer;
