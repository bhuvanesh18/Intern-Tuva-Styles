import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function AlignItems() {
  return (
    <React.Fragment>
      <Heading heading="Align items" id="align-items" />
      <Paragraph paragraph="Use these classes to align items on the cross axis." />
      {"\n"}
      <p className="mt-2">
        The cross axis runs perpendicular to the main axis. By default the main
        axis runs horizontally, so your items will align vertically on the cross
        axis. If you use <a href="#flex-direction">flex-column</a> to make the
        main axis run vertically, your items will be aligned horizontally.
      </p>
      <SubHeading subheading="CSS" id="css-4" />
      <CodeBlocks
        codeline={[
          `
          .flex-items-start      { align-items: flex-start; }
          .flex-items-end        { align-items: flex-end; }
          .flex-items-center     { align-items: center; }
          .flex-items-baseline   { align-items: baseline; }
          .flex-items-stretch    { align-items: stretch; }
      `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-4" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-items-start" />
            <TableData td="Align items to the start of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-items-end" />
            <TableData td="Align items to the end of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-items-center" />
            <TableData td="Align items to the center of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-items-baseline	" />
            <TableData td="Align items along their baselines" />
          </tr>
          <tr>
            <TableData td=".flex-items-stretch" />
            <TableData td="Stretch items from start of cross axis to end of cross axis" />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="flex-items-start" id="flex-items-start" />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-start"
          >
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        ]}
        codeline={[
          `
        <div  style="min-height: 150px;" class="border d-flex flex-items-start">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
        </div>
     `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-items-end" id="flex-items-end" />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-end"
          >
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        ]}
        codeline={[
          `
        <div  style="min-height: 150px;" class="border d-flex flex-items-end">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-items-center" id="flex-items-center" />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-center"
          >
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        ]}
        codeline={[
          `
        <div  style="min-height: 150px;" class="border d-flex flex-items-center">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-items-baseline" id="flex-items-baseline" />
      <Paragraph paragraph="With .flex-items-baseline, items will be aligned along their baselines even if they have different font sizes." />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-baseline"
          >
            <div className="p-5 border bg-gray-light h1">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light h3">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        ]}
        codeline={[
          `
        <div  style="min-height: 150px;" class="border d-flex flex-items-baseline">
          <div class="p-5 border bg-gray-light h1">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light h3">3</div>
          <div class="p-5 border bg-gray-light">4</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-items-stretch" id="flex-items-stretch" />
      <Paragraph paragraph="Use .flex-justify-around to distribute items evenly, with an equal amount of space around them. Visually the spaces won't look equal, since each item has the same unit of space around it. For example, the first item only has one unit of space between it and the start line, but it has two units of space between it and the next item." />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-stretch"
          >
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        ]}
        codeline={[
          `
        <div  style="min-height: 150px;" class="border d-flex flex-items-stretch">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
        </div>
      `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default AlignItems;
