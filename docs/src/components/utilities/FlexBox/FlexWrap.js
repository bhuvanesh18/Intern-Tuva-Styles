import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData,
} from "../../mini_components";

function FlexWrap() {
  return (
    <React.Fragment>
      <Heading heading="Flex wrap" id="flex-wrap" />
      <Paragraph paragraph="You can choose whether flex items are forced into a single line or wrapped onto multiple lines." />
      <SubHeading subheading="CSS" id="css-2" />
      <CodeBlocks
        codeline={[
          `
  .flex-wrap     { flex-wrap: wrap; }
  .flex-nowrap   { flex-wrap: nowrap; }
        `,
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-2" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-wrap" />
            <TableData td="Flex items will break onto multiple lines (default)" />
          </tr>
          <tr>
            <TableData td=".flex-nowrap" />
            <TableData td="	Flex items are laid out in a single line, even if they overflow" />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="Flex-wrap-example" id="flex-wrap-example" />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-wrap">
            <div className="p-5 px-6 border bg-gray-light">1</div>
            <div className="p-5 px-6 border bg-gray-light">2</div>
            <div className="p-5 px-6 border bg-gray-light">3</div>
            <div className="p-5 px-6 border bg-gray-light">4</div>
            <div className="p-5 px-6 border bg-gray-light">5</div>
            <div className="p-5 px-6 border bg-gray-light">6</div>
            <div className="p-5 px-6 border bg-gray-light">7</div>
            <div className="p-5 px-6 border bg-gray-light">8</div>
            <div className="p-5 px-6 border bg-gray-light">9</div>
          </div>,
        ]}
        codeline={[
          `
  <div class="border d-flex flex-wrap">
   <div class="p-5 px-6 border bg-gray-light">1</div>
   <div class="p-5 px-6 border bg-gray-light">2</div>
   <div class="p-5 px-6 border bg-gray-light">3</div>
   <div class="p-5 px-6 border bg-gray-light">4</div>
   <div class="p-5 px-6 border bg-gray-light">5</div>
   <div class="p-5 px-6 border bg-gray-light">6</div>
   <div class="p-5 px-6 border bg-gray-light">7</div>
   <div class="p-5 px-6 border bg-gray-light">8</div>
   <div class="p-5 px-6 border bg-gray-light">9</div>
  </div>
       `,
        ]}
        lang="html"
      />
      <SubHeading subheading="Flex-nowrap example" id="flex-nowrap example" />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-nowrap">
            <div className="p-5 px-6 border bg-gray-light">1</div>
            <div className="p-5 px-6 border bg-gray-light">2</div>
            <div className="p-5 px-6 border bg-gray-light">3</div>
            <div className="p-5 px-6 border bg-gray-light">4</div>
            <div className="p-5 px-6 border bg-gray-light">5</div>
            <div className="p-5 px-6 border bg-gray-light">6</div>
            <div className="p-5 px-6 border bg-gray-light">7</div>
            <div className="p-5 px-6 border bg-gray-light">8</div>
            <div className="p-5 px-6 border bg-gray-light">9</div>
          </div>,
        ]}
        codeline={[
          `
  <div class="border d-flex flex-nowrap">
    <div class="p-5 px-6 border bg-gray-light">1</div>
    <div class="p-5 px-6 border bg-gray-light">2</div>
    <div class="p-5 px-6 border bg-gray-light">3</div>
    <div class="p-5 px-6 border bg-gray-light">4</div>
    <div class="p-5 px-6 border bg-gray-light">5</div>
    <div class="p-5 px-6 border bg-gray-light">6</div>
    <div class="p-5 px-6 border bg-gray-light">7</div>
    <div class="p-5 px-6 border bg-gray-light">8</div>
    <div class="p-5 px-6 border bg-gray-light">9</div>
  </div>
        `,
        ]}
        lang="html"
        style="overflow-x-scroll"
      />
    </React.Fragment>
  );
}

export default FlexWrap;
