import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function FlexDirection() {
  return (
    <React.Fragment>
      <Heading heading="Flex direction" id="flex-direction" />
      <Paragraph paragraph="Use these classes to define the orientation of the main axis (row or column). By default, flex items will display in a row. Use .flex-column to change the direction of the main axis to vertical." />
      <SubHeading subheading="CSS" id="css-1" />
      <CodeBlocks
        codeline={[
          `
    .flex-row            { flex-direction: row; }
    .flex-row-reverse    { flex-direction: row-reverse; }
    .flex-column         { flex-direction: column; }
    .flex-column-reverse { flex-direction: column-reverse; }
          `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-1" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-row" />
            <TableData td="The main axis runs left to right (default)." />
          </tr>
          <tr>
            <TableData td=".flex-row-reverse" />
            <TableData td="The main axis runs right to left." />
          </tr>
          <tr>
            <TableData td=".flex-column" />
            <TableData td="The main axis runs top to bottom." />
          </tr>
          <tr>
            <TableData td=".flex-column-reverse" />
            <TableData td="The main axis runs bottom to top." />
          </tr>
        </tbody>
      </table>
      <SubHeading
        subheading="Example using .flex-column"
        id="example-using-flex-column"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-column">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        ]}
        codeline={[
          `
  <div class="border d-flex flex-column">
    <div class="p-5 border bg-gray-light">Item 1</div>
    <div class="p-5 border bg-gray-light">Item 2</div>
    <div class="p-5 border bg-gray-light">Item 3</div>
  </div>
         `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Example using .flex-column-reverse"
        id="example-using-flex-column-reverse"
      />
      <p className="mt-2">
        This example uses the responsive variant .flex-md-column-reverse to
        override .flex-column Learn more about responsive flexbox utilities{" "}
        <a href="#responsive-flex-utilities">here</a>. Keep in mind that it
        won't affect screen readers or navigating with the keyboard and it's
        advised to keep the markup in a logical source order.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-column flex-md-column-reverse">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        ]}
        codeline={[
          `
  <div class="border d-flex flex-column flex-md-column-reverse">
    <div class="p-5 border bg-gray-light">Item 1</div>
    <div class="p-5 border bg-gray-light">Item 2</div>
    <div class="p-5 border bg-gray-light">Item 3</div>
  </div>
          `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Example using .flex-row"
        id="example-using-flex-row"
      />
      <p className="mt-2">
        This example uses the responsive variant .flex-md-row to override
        .flex-column Learn more about responsive flexbox utilities{" "}
        <a href="#responsive-flex-utilities">here</a>.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-column flex-md-row">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        ]}
        codeline={[
          `
  <div class="border d-flex flex-column flex-md-row">
    <div class="p-5 border bg-gray-light">Item 1</div>
    <div class="p-5 border bg-gray-light">Item 2</div>
    <div class="p-5 border bg-gray-light">Item 3</div>
  </div>
          `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Example using .flex-row-reverse"
        id="example-using-flex-row-reverse"
      />
      <p className="mt-2">
        This example uses the responsive variant .flex-md-row-reverse to
        override .flex-column Learn more about responsive flexbox utilities{" "}
        <a href="#responsive-flex-utilities">here</a>.Keep in mind that it won't
        affect screen readers or navigating with the keyboard and it's advised
        to keep the markup in a logical source order.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-column flex-md-row-reverse">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        ]}
        codeline={[
          `
  <div class="border d-flex flex-column flex-md-row-reverse">
    <div class="p-5 border bg-gray-light">Item 1</div>
    <div class="p-5 border bg-gray-light">Item 2</div>
    <div class="p-5 border bg-gray-light">Item 3</div>
  </div>

          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FlexDirection;
