import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function JustifyContent() {
  return (
    <React.Fragment>
      <Heading heading="Justify content" id="justify-content" />
      <Paragraph paragraph="Use these classes to distribute space between and around flex items along the main axis of the container." />
      <SubHeading subheading="CSS" id="css-3" />
      <CodeBlocks
        codeline={[
          `
        .flex-justify-start    { justify-content: flex-start; }
        .flex-justify-end      { justify-content: flex-end; }
        .flex-justify-center   { justify-content: center; }
        .flex-justify-between  { justify-content: space-between; }
        .flex-justify-around   { justify-content: space-around; }
      `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-3" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-justify-start" />
            <TableData td="Justify all items to the left" />
          </tr>
          <tr>
            <TableData td=".flex-justify-end" />
            <TableData td="Justify all items to the right" />
          </tr>
          <tr>
            <TableData td=".flex-justify-center" />
            <TableData td="Justify items to the center of the container" />
          </tr>
          <tr>
            <TableData td=".flex-justify-between	" />
            <TableData td="Distribute items evenly. First item is on the start line, last item is on the end line." />
          </tr>
          <tr>
            <TableData td=".flex-justify-around" />
            <TableData td="Distribute items evenly with equal space around them" />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="flex-justify-start" id="flex-justify-start" />
      <Paragraph paragraph="Use .flex-justify-start to align items to the start line. By default this will be on the left side of the container. If you are using .flex-column, the start line will be at the top of the container." />{" "}
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-justify-start">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        ]}
        codeline={[
          `
  <div class="border d-flex flex-justify-start">
    <div class="p-5 border bg-gray-light">1</div>
    <div class="p-5 border bg-gray-light">2</div>
    <div class="p-5 border bg-gray-light">3</div>
  </div>
     `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-justify-end" id="flex-justify-end" />
      <Paragraph paragraph="Use .flex-justify-end to align items to the end line. By default this will be on the right side of the container. If you are using .flex-column, the end line will be at the bottom of the container." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-justify-end">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex flex-justify-end">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
         </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-justify-center" id="flex-justify-center" />
      <Paragraph paragraph="Use .flex-justify-center to align items in the middle of the container." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-justify-center">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex flex-justify-center">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
         </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-justify-between" id="flex-justify-between" />
      <Paragraph paragraph="Use .flex-justify-between to distribute items evenly in the container. The first items will be on the start line and the last item will be on the end line." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-justify-between">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex flex-justify-between">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-justify-around" id="flex-justify-around" />
      <Paragraph paragraph="Use .flex-justify-around to distribute items evenly, with an equal amount of space around them. Visually the spaces won't look equal, since each item has the same unit of space around it. For example, the first item only has one unit of space between it and the start line, but it has two units of space between it and the next item." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-justify-around">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex flex-justify-around">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
         </div>
      `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default JustifyContent;
