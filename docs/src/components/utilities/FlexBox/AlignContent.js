import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function AlignContent() {
  return (
    <React.Fragment>
      <Heading heading="Align content" id="align-content" />
      <Paragraph paragraph="When the main axis wraps, this creates multiple main axis lines and adds extra space in the cross axis. Use these classes to align the lines of the main axis on the cross axis." />
      <SubHeading subheading="CSS" id="css-5" />
      <CodeBlocks
        codeline={[
          `
          .flex-content-start    { align-content: flex-start; }
          .flex-content-end      { align-content: flex-end; }
          .flex-content-center   { align-content: center; }
          .flex-content-between  { align-content: space-between; }
          .flex-content-around   { align-content: space-around; }
          .flex-content-stretch  { align-content: stretch; }
      `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-5" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-content-start" />
            <TableData td="Align content to the start of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-content-end" />
            <TableData td="Align content to the end of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-content-center" />
            <TableData td="Align content to the center of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-content-between" />
            <TableData td="Distribute content evenly. First line is on the start of the cross axis, last line is on the end of the cross axis." />
          </tr>
          <tr>
            <TableData td=".flex-content-around" />
            <TableData td="Stretch items from the start of the cross axis to the end of the cross axis." />
          </tr>
          <tr>
            <TableData td=".flex-content-stretch" />
            <TableData td="Lines stretch to occupy available space." />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="flex-content-start" id="flex-content-start" />
      <CodeBlocks
        htmlcoderender={[
        <div style={{minHeight: "300px"}} className="border d-flex flex-wrap flex-content-start">
          <div className="p-5 border bg-gray-light">1</div>
          <div className="p-5 border bg-gray-light">2</div>
          <div className="p-5 border bg-gray-light">3</div>
          <div className="p-5 border bg-gray-light">4</div>
          <div className="p-5 border bg-gray-light">5</div>
          <div className="p-5 border bg-gray-light">6</div>
          <div className="p-5 border bg-gray-light">7</div>
          <div className="p-5 border bg-gray-light">8</div>
          <div className="p-5 border bg-gray-light">9</div>
          <div className="p-5 border bg-gray-light">10</div>
          <div className="p-5 border bg-gray-light">11</div>
          <div className="p-5 border bg-gray-light">12</div>
        </div>
        ]}
        codeline={[
          `
        <div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-start">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
          <div class="p-5 border bg-gray-light">5</div>
          <div class="p-5 border bg-gray-light">6</div>
          <div class="p-5 border bg-gray-light">7</div>
          <div class="p-5 border bg-gray-light">8</div>
          <div class="p-5 border bg-gray-light">9</div>
          <div class="p-5 border bg-gray-light">10</div>
          <div class="p-5 border bg-gray-light">11</div>
          <div class="p-5 border bg-gray-light">12</div>
        </div>
     `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-content-end" id="flex-content-end" />
      <CodeBlocks
        htmlcoderender={[
        <div style={{minHeight: "300px"}} className="border d-flex flex-wrap flex-content-end">
          <div className="p-5 border bg-gray-light">1</div>
          <div className="p-5 border bg-gray-light">2</div>
          <div className="p-5 border bg-gray-light">3</div>
          <div className="p-5 border bg-gray-light">4</div>
          <div className="p-5 border bg-gray-light">5</div>
          <div className="p-5 border bg-gray-light">6</div>
          <div className="p-5 border bg-gray-light">7</div>
          <div className="p-5 border bg-gray-light">8</div>
          <div className="p-5 border bg-gray-light">9</div>
          <div className="p-5 border bg-gray-light">10</div>
          <div className="p-5 border bg-gray-light">11</div>
          <div className="p-5 border bg-gray-light">12</div>
        </div>
        ]}
        codeline={[
          `
        <div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-end">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
          <div class="p-5 border bg-gray-light">5</div>
          <div class="p-5 border bg-gray-light">6</div>
          <div class="p-5 border bg-gray-light">7</div>
          <div class="p-5 border bg-gray-light">8</div>
          <div class="p-5 border bg-gray-light">9</div>
          <div class="p-5 border bg-gray-light">10</div>
          <div class="p-5 border bg-gray-light">11</div>
          <div class="p-5 border bg-gray-light">12</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-content-center" id="flex-content-center" />
      <CodeBlocks
        htmlcoderender={[
        <div style={{minHeight: "300px"}} className="border d-flex flex-wrap flex-content-center">
          <div className="p-5 border bg-gray-light">1</div>
          <div className="p-5 border bg-gray-light">2</div>
          <div className="p-5 border bg-gray-light">3</div>
          <div className="p-5 border bg-gray-light">4</div>
          <div className="p-5 border bg-gray-light">5</div>
          <div className="p-5 border bg-gray-light">6</div>
          <div className="p-5 border bg-gray-light">7</div>
          <div className="p-5 border bg-gray-light">8</div>
          <div className="p-5 border bg-gray-light">9</div>
          <div className="p-5 border bg-gray-light">10</div>
          <div className="p-5 border bg-gray-light">11</div>
          <div className="p-5 border bg-gray-light">12</div>
        </div>
        ]}
        codeline={[
          `
        <div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-center">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
          <div class="p-5 border bg-gray-light">5</div>
          <div class="p-5 border bg-gray-light">6</div>
          <div class="p-5 border bg-gray-light">7</div>
          <div class="p-5 border bg-gray-light">8</div>
          <div class="p-5 border bg-gray-light">9</div>
          <div class="p-5 border bg-gray-light">10</div>
          <div class="p-5 border bg-gray-light">11</div>
          <div class="p-5 border bg-gray-light">12</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-content-between" id="flex-content-between" />
        <CodeBlocks
        htmlcoderender={[
        <div style={{minHeight: "300px"}} className="border d-flex flex-wrap flex-content-between">
          <div className="p-5 border bg-gray-light">1</div>
          <div className="p-5 border bg-gray-light">2</div>
          <div className="p-5 border bg-gray-light">3</div>
          <div className="p-5 border bg-gray-light">4</div>
          <div className="p-5 border bg-gray-light">5</div>
          <div className="p-5 border bg-gray-light">6</div>
          <div className="p-5 border bg-gray-light">7</div>
          <div className="p-5 border bg-gray-light">8</div>
          <div className="p-5 border bg-gray-light">9</div>
          <div className="p-5 border bg-gray-light">10</div>
          <div className="p-5 border bg-gray-light">11</div>
          <div className="p-5 border bg-gray-light">12</div>
        </div>
        ]}
        codeline={[
          `
        <div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-between">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
          <div class="p-5 border bg-gray-light">5</div>
          <div class="p-5 border bg-gray-light">6</div>
          <div class="p-5 border bg-gray-light">7</div>
          <div class="p-5 border bg-gray-light">8</div>
          <div class="p-5 border bg-gray-light">9</div>
          <div class="p-5 border bg-gray-light">10</div>
          <div class="p-5 border bg-gray-light">11</div>
          <div class="p-5 border bg-gray-light">12</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-content-around" id="flex-content-around" />
        <CodeBlocks
        htmlcoderender={[
        <div style={{minHeight: "300px"}} className="border d-flex flex-wrap flex-content-around">
          <div className="p-5 border bg-gray-light">1</div>
          <div className="p-5 border bg-gray-light">2</div>
          <div className="p-5 border bg-gray-light">3</div>
          <div className="p-5 border bg-gray-light">4</div>
          <div className="p-5 border bg-gray-light">5</div>
          <div className="p-5 border bg-gray-light">6</div>
          <div className="p-5 border bg-gray-light">7</div>
          <div className="p-5 border bg-gray-light">8</div>
          <div className="p-5 border bg-gray-light">9</div>
          <div className="p-5 border bg-gray-light">10</div>
          <div className="p-5 border bg-gray-light">11</div>
          <div className="p-5 border bg-gray-light">12</div>
        </div>
        ]}
        codeline={[
          `
        <div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-around">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
          <div class="p-5 border bg-gray-light">5</div>
          <div class="p-5 border bg-gray-light">6</div>
          <div class="p-5 border bg-gray-light">7</div>
          <div class="p-5 border bg-gray-light">8</div>
          <div class="p-5 border bg-gray-light">9</div>
          <div class="p-5 border bg-gray-light">10</div>
          <div class="p-5 border bg-gray-light">11</div>
          <div class="p-5 border bg-gray-light">12</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-content-stretch" id="flex-content-stretch" />
       <CodeBlocks
        htmlcoderender={[
        <div style={{minHeight: "300px"}} className="border d-flex flex-wrap flex-content-stretch">
          <div className="p-5 border bg-gray-light">1</div>
          <div className="p-5 border bg-gray-light">2</div>
          <div className="p-5 border bg-gray-light">3</div>
          <div className="p-5 border bg-gray-light">4</div>
          <div className="p-5 border bg-gray-light">5</div>
          <div className="p-5 border bg-gray-light">6</div>
          <div className="p-5 border bg-gray-light">7</div>
          <div className="p-5 border bg-gray-light">8</div>
          <div className="p-5 border bg-gray-light">9</div>
          <div className="p-5 border bg-gray-light">10</div>
          <div className="p-5 border bg-gray-light">11</div>
          <div className="p-5 border bg-gray-light">12</div>
        </div>
        ]}
        codeline={[
          `
        <div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-stretch">
          <div class="p-5 border bg-gray-light">1</div>
          <div class="p-5 border bg-gray-light">2</div>
          <div class="p-5 border bg-gray-light">3</div>
          <div class="p-5 border bg-gray-light">4</div>
          <div class="p-5 border bg-gray-light">5</div>
          <div class="p-5 border bg-gray-light">6</div>
          <div class="p-5 border bg-gray-light">7</div>
          <div class="p-5 border bg-gray-light">8</div>
          <div class="p-5 border bg-gray-light">9</div>
          <div class="p-5 border bg-gray-light">10</div>
          <div class="p-5 border bg-gray-light">11</div>
          <div class="p-5 border bg-gray-light">12</div>
        </div>
      `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default AlignContent;
