import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function TextColor() {
  return (
    <React.Fragment>
      <Heading heading="Text colors" id="text-colors" />
      <Paragraph paragraph="Use text color utilities to set text the specific color." />
      <SubHeading
        subheading="Text color inheritance"
        id="text-color-inheritance"
      />
      <Paragraph paragraph="You can set the color inheritance on an element by using the text-inherit class." />
      <CodeBlocks
        htmlcoderender={[
          <div className="text-red">
            This text is red,{" "}
            <a href="#" className="text-inherit">
              including the link
            </a>
          </div>
        ]}
        codeline={[
          `
    <div class="text-red">This text is red, <a href="#" class="text-inherit">including the link</a></div>
          `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Text on white background"
        id="text-on-white-background"
      />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="text-blue mb-2">.text-blue on white</div>
            <div className="text-gray-dark mb-2">.text-gray-dark on white</div>
            <div className="text-gray mb-2">.text-gray on white</div>
            <div className="text-gray-light mb-2">
              .text-gray-light on white
            </div>
            <div className="text-red mb-2">.text-red on white</div>
            <div className="text-yellow mb-2">.text-yellow on white</div>
          </div>
        ]}
        codeline={[
          `
        <div class="text-blue mb-2">
          .text-blue on white
        </div>
        <div class="text-gray-dark mb-2">
          .text-gray-dark on white
        </div>
        <div class="text-gray mb-2">
          .text-gray on white
        </div>
        <div class="text-gray-light mb-2">
          .text-gray-light on white
        </div>
        <div class="text-red mb-2">
          .text-red on white
        </div>
        <div class="text-yellow mb-2">
          .text-yellow on white
        </div>
        `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Text on colored backgrounds"
        id="text-on-colored-backgrounds"
      />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="text-white bg-blue mb-2">
              .text-white on .bg-blue
            </div>
            <div className="bg-blue-light mb-2">
              .text-gray-dark on .bg-blue-light
            </div>
            <div className="text-white bg-red mb-2">.text-white on .bg-red</div>
            <div className="text-red bg-red-light mb-2">
              .text-red on .bg-red-light
            </div>
            <div className="bg-yellow-dark mb-2">
              .text-gray-dark on .bg-yellow-dark
            </div>
            <div className="bg-yellow mb-2">.text-gray-dark on .bg-yellow</div>
            <div className="bg-yellow-light mb-2">
              .text-gray-dark on .bg-yellow-light
            </div>
            <div className="text-white bg-gray-dark mb-2">
              .text-white on .bg-gray-dark
            </div>
            <div className="bg-gray">.text-gray-dark on .bg-gray</div>
          </div>
        ]}
        codeline={[
          `
        <div class="text-white bg-blue mb-2">
          .text-white on .bg-blue
        </div>
        <div class="bg-blue-light mb-2">
          .text-gray-dark on .bg-blue-light
        </div>
        <div class="text-white bg-red mb-2">
          .text-white on .bg-red
        </div>
        <div class="text-red bg-red-light mb-2">
          .text-red on .bg-red-light
        </div>
        <div class="bg-yellow-dark mb-2">
          .text-gray-dark on .bg-yellow-dark
        </div>
        <div class="bg-yellow mb-2">
          .text-gray-dark on .bg-yellow
        </div>
        <div class="bg-yellow-light mb-2">
          .text-gray-dark on .bg-yellow-light
        </div>
        <div class="text-white bg-gray-dark mb-2">
          .text-white on .bg-gray-dark
        </div>
        <div class="bg-gray">
          .text-gray-dark on .bg-gray
        </div>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Text color utilities" id="text-color-utilities" />
      <table className="width-full">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Variable" />
            <TableHeading th="Value" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData style="text-left" td="Gray" colspan="3" />
          </tr>
          <tr>
            <TableData style="py-1 text-gray-light" td=".text-gray-light" />
            <TableData style="py-1 bg-gray-5" td="$gray-500" />
            <TableData style="py-1 bg-gray-5" td="#c5cad3" />
          </tr>
          <tr>
            <TableData style="py-1 text-gray" td=".text-gray" />
            <TableData style="py-1 bg-gray-6" td="$gray-600" />
            <TableData style="py-1 bg-gray-6" td="#828890" />
          </tr>
          <tr>
            <TableData style="py-1 text-gray-dark" td=".text-gray-dark" />
            <TableData style="py-1 bg-gray-9 text-white" td="$gray-600" />
            <TableData style="py-1 bg-gray-9 text-white" td="#828890" />
          </tr>
          <tr>
            <TableData style="text-left" td="Blue" colspan="3" />
          </tr>
          <tr>
            <TableData style="py-1 text-blue" td=".text-blue" />
            <TableData style="py-1 bg-blue" td="$blue-400" />
            <TableData style="py-1 bg-blue" td="#26aebc" />
          </tr>
          <tr>
            <TableData style="text-left" td="Red" colspan="3" />
          </tr>
          <tr>
            <TableData style="py-1 text-red" td=".text-red" />
            <TableData style="py-1 bg-red text-white" td="$red-600" />
            <TableData style="py-1 bg-red text-white" td="#C10000" />
          </tr>
          <tr>
            <TableData style="text-left" td="Yellow" colspan="3" />
          </tr>
          <tr>
            <TableData style="py-1 text-yellow" td=".text-yellow" />
            <TableData style="py-1 bg-yellow" td="$yellow-500" />
            <TableData style="py-1 bg-yellow" td="#ECB806" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TextColor;
