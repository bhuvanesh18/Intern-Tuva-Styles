import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks,
  TableHeading,
  TableData
} from "../../mini_components";

function Order() {
  return (
    <React.Fragment>
      <Heading heading="Order" id="order" />
      <Paragraph paragraph="Use these classes to change the order of flex items. Keep in mind that it won't affect screen readers or navigating with the keyboard and it's advised to keep the markup in a logical source order." />
      <SubHeading subheading="CSS" id="css-7" />
      <CodeBlocks
        codeline={[
          `
          .flex-order-1    { order: 1; }
          .flex-order-2    { order: 2; }
          .flex-order-none { order: inherit; }
      `
        ]}
        lang="css"
      />
      <SubHeading subheading="Classes" id="classes-7" />
      <table className="width-full mt-2">
        <thead>
          <tr>
            <TableHeading th="Class" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td=".flex-order-1" />
            <TableData td="Set order to be 1" />
          </tr>
          <tr>
            <TableData td=".flex-order-2" />
            <TableData td="Set order to be 2" />
          </tr>
          <tr>
            <TableData td=".flex-order-none" />
            <TableData td="Remove order (typically used with responsive variants)" />
          </tr>
        </tbody>
      </table>
      <SubHeading subheading="flex-order (1+2)" id="flex-order-12" />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light flex-order-2">
              1. .flex-order-2
            </div>
            <div className="p-5 border bg-gray-light">2.</div>
            <div className="p-5 border bg-gray-light flex-order-1">
              3. .flex-order-1
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex">
          <div class="p-5 border bg-gray-light flex-order-2">1. .flex-order-2</div>
          <div class="p-5 border bg-gray-light">2.</div>
          <div class="p-5 border bg-gray-light flex-order-1">3. .flex-order-1</div>
        </div>
     `
        ]}
        lang="html"
      />
      <SubHeading subheading="flex-order-none" id="flex-order-none" />
      <Paragraph paragraph="Resize window to see the effect." />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light flex-order-1 flex-md-order-none">
              1. .flex-order-1 .flex-md-order-none
            </div>
            <div className="p-5 border bg-gray-light">2.</div>
            <div className="p-5 border bg-gray-light">3.</div>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex">
          <div class="p-5 border bg-gray-light flex-order-1 flex-md-order-none">1. .flex-order-1 .flex-md-order-none</div>
          <div class="p-5 border bg-gray-light">2.</div>
          <div class="p-5 border bg-gray-light">3.</div>
        </div>
      `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Order;
