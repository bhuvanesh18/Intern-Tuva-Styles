import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function Flex() {
  return (
    <React.Fragment>
      <Heading heading="Flex" id="flex" />
      <Paragraph paragraph="Use this class to specify the ability of a flex item to alter its dimensions to fill available space." />
      <CodeBlocks
        codeline={[
          `
          .flex-1        { flex: 1; }
          .flex-auto     { flex: auto; }
          .flex-grow-0   { flex-grow: 0; }
          .flex-shrink-0 { flex-shrink: 0; }
      `
        ]}
        lang="css"
      />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-1" />
            <TableData td="	Fills available space" />
          </tr>
          <tr>
            <TableData td=".flex-auto" />
            <TableData td="Fills available space and auto-sizes based on the content" />
          </tr>
          <tr>
            <TableData td=".flex-grow-0" />
            <TableData td="Prevents growing of a flex item" />
          </tr>
          <tr>
            <TableData td=".flex-shrink-0" />
            <TableData td="Prevents shrinking of a flex item" />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="flex-1" id="flex-1" />
      <Paragraph paragraph="Adding .flex-1 makes the item grow in size to take up all the space that is available." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light">flex item</div>
            <div className="p-5 border bg-gray-light flex-1">.flex-1</div>
            <div className="p-5 border bg-gray-light">flex item</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex">
          <div class="p-5 border bg-gray-light">flex item</div>
          <div class="p-5 border bg-gray-light flex-1">.flex-1</div>
          <div class="p-5 border bg-gray-light">flex item</div>
        </div>
     `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Adding .flex-1 to all flex items results in each item having the same size." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light flex-1">.flex-1</div>
            <div className="p-5 border bg-gray-light flex-1">.flex-1</div>
            <div className="p-5 border bg-gray-light flex-1">.flex-1</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex">
          <div class="p-5 border bg-gray-light flex-1">.flex-1</div>
          <div class="p-5 border bg-gray-light flex-1">.flex-1</div>
          <div class="p-5 border bg-gray-light flex-1">.flex-1</div>
        </div>
          `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-auto" id="flex-auto" />
      <Paragraph paragraph="Using .flex-auto fills the available space but also takes the size of the content into account. Type in the editor below to see the effect." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light flex-1">.flex-1</div>
            <div className="p-5 border bg-gray-light flex-auto">
              .flex-auto with a bit more text
            </div>
            <div className="p-5 border bg-gray-light flex-1">.flex-1</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex">
          <div class="p-5 border bg-gray-light flex-1">.flex-1</div>
          <div class="p-5 border bg-gray-light flex-auto">.flex-auto with a bit more text</div>
          <div class="p-5 border bg-gray-light flex-1">.flex-1</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-grow-0" id="flex-grow-0" />
      <Paragraph paragraph="Add .flex-grow-0 to prevent an item from growing. This can be useful when used as a responsive variant. For example to stop growing when the viewport gets wider." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light">flex item</div>
            <div className="p-5 border bg-gray-light flex-auto flex-md-grow-0">
              .flex-auto .flex-md-grow-0
            </div>
            <div className="p-5 border bg-gray-light">flex item</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex">
          <div class="p-5 border bg-gray-light">flex item</div>
          <div class="p-5 border bg-gray-light flex-auto flex-md-grow-0">.flex-auto .flex-md-grow-0</div>
          <div class="p-5 border bg-gray-light">flex item</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-shrink-0" id="flex-shrink-0" />
      <Paragraph paragraph="Add .flex-shrink-0 to prevent an item from shrinking. Note that for example text will not wrap and the flex items start to overflow if there is not enough space." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-2 border d-flex" style={{ maxWidth: "340px" }}>
            <div className="p-5 border bg-gray-light">flex item</div>
            <div className="p-5 border bg-gray-light flex-shrink-0">
              .flex-shrink-0
            </div>
            <div className="p-5 border bg-gray-light">flex item</div>
          </div>
        ]}
        codeline={[
          `
        <div class="p-2 border d-flex" style="max-width: 340px">
          <div class="p-5 border bg-gray-light">flex item</div>
          <div class="p-5 border bg-gray-light flex-shrink-0">.flex-shrink-0</div>
          <div class="p-5 border bg-gray-light">flex item</div>
        </div>
      `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Flex;
