import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function AlignSelf() {
  return (
    <React.Fragment>
      <Heading heading="Align self" id="align-self" />
      <Paragraph paragraph="Use these classes to adjust the alignment of an individual flex item on the cross axis. This overrides any align-items property applied to the flex container." />
      <SubHeading subheading="CSS" id="css-6" />
      <CodeBlocks
        codeline={[
          `
          .flex-self-auto        { align-self: auto; }
          .flex-self-start       { align-self: flex-start; }
          .flex-self-end         { align-self: flex-end; }
          .flex-self-center      { align-self: center; }
          .flex-self-baseline    { align-self: baseline; }
          .flex-self-stretch     { align-self: stretch; }
      `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-6" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-self-auto" />
            <TableData td="Inherit alignment from parent" />
          </tr>
          <tr>
            <TableData td=".flex-self-start" />
            <TableData td="Align to the start of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-self-end" />
            <TableData td="Align to the end of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-self-center" />
            <TableData td="Align to center of cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-self-baseline" />
            <TableData td="	Align baseline to the start of the cross axis" />
          </tr>
          <tr>
            <TableData td=".flex-self-stretch" />
            <TableData td="Stretch item from start of cross axis to end of cross axis." />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="flex-self-auto" id="flex-self-auto" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ minHeight: "150px" }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-auto">
              .flex-self-auto
            </div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex">
          <div class="p-5 border bg-gray-light flex-self-auto">.flex-self-auto</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
        </div>
     `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-self-start" id="flex-self-start" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ minHeight: "150px" }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-start">
              .flex-self-start
            </div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex">
          <div class="p-5 border bg-gray-light flex-self-start">.flex-self-start</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
        </div>
     `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-self-end" id="flex-self-end" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ minHeight: "150px" }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-end">
              .flex-self-end
            </div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex">
          <div class="p-5 border bg-gray-light flex-self-end">.flex-self-end</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-self-center" id="flex-self-center" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ minHeight: "150px" }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-center">
              .flex-self-center
            </div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex">
          <div class="p-5 border bg-gray-light flex-self-center">.flex-self-center</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-self-baseline" id="flex-self-baseline" />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-end"
          >
            <div className="p-5 border bg-gray-light flex-self-baseline f4">
              .flex-self-baseline
            </div>
            <div className="p-5 border bg-gray-light h1">item</div>
            <div className="p-5 border bg-gray-light f00">item</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex flex-items-end">
          <div class="p-5 border bg-gray-light flex-self-baseline f4">.flex-self-baseline</div>
          <div class="p-5 border bg-gray-light h1">item</div>
          <div class="p-5 border bg-gray-light f00">item</div>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-self-stretch" id="flex-self-stretch" />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ minHeight: "150px" }}
            className="border d-flex flex-items-start"
          >
            <div className="p-5 border bg-gray-light flex-self-stretch">
              .flex-self-stretch
            </div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        ]}
        codeline={[
          `
        <div style="min-height: 150px;" class="border d-flex flex-items-start">
          <div class="p-5 border bg-gray-light flex-self-stretch">.flex-self-stretch</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
          <div class="p-5 border bg-gray-light">&nbsp;</div>
        </div>
      `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default AlignSelf;
