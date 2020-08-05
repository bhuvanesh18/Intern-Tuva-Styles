import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  TableHeading,
  TableData
} from "../../mini_components";

function BackgroundColors() {
  return (
    <React.Fragment>
      <Heading heading="Background colors" id="background-colors" />
      <Paragraph paragraph="Background colors are most commonly used for filling large blocks of content or areas with a color." />
      <SubHeading subheading="Background utilities" id="background-utilities" />
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
            <TableHeading th="White" style="text-left" colspan="3" />
          </tr>
          <tr>
            <TableData td=".bg-white" />
            <TableData td="$bg-white" />
            <TableData td="#ffffff" />
          </tr>
          <tr>
            <TableHeading th="Blue" style="text-left" colspan="3" />
          </tr>
          <tr>
            <TableData style="bg-blue" td=".bg-blue" />
            <TableData style="bg-blue" td="$bg-blue" />
            <TableData style="bg-blue" td="#26aebc" />
          </tr>
          <tr>
            <TableData style="bg-blue-light" td=".bg-blue-light" />
            <TableData style="bg-blue-light" td="$bg-blue-light" />
            <TableData style="bg-blue-light" td="#A4DBE1" />
          </tr>
          <tr>
            <TableHeading th="Gray" style="text-left" colspan="3" />
          </tr>
          <tr>
            <TableData style="bg-gray" td=".bg-gray" />
            <TableData style="bg-gray" td="$bg-gray" />
            <TableData style="bg-gray" td="#e4e7eb" />
          </tr>
          <tr>
            <TableData style="bg-gray-light" td=".bg-gray-light" />
            <TableData style="bg-gray-light" td="$bg-gray-light" />
            <TableData style="bg-gray-light" td="#edf2f7" />
          </tr>
          <tr>
            <TableData style="bg-gray-dark text-white" td=".bg-gray-dark" />
            <TableData style="bg-gray-dark text-white" td="$bg-gray-dark" />
            <TableData style="bg-gray-dark text-white" td="#3d4146" />
          </tr>
          <tr>
            <TableHeading th="Red" style="text-left" colspan="3" />
          </tr>
          <tr>
            <TableData style="bg-red text-white" td=".bg-red" />
            <TableData style="bg-red text-white" td="$bg-red" />
            <TableData style="bg-red text-white" td="#EB0202" />
          </tr>
          <tr>
            <TableData style="bg-red-light" td=".bg-red-light" />
            <TableData style="bg-red-light" td="$bg-red-light" />
            <TableData style="bg-red-light" td="#FFA6A6" />
          </tr>
          <tr>
            <TableHeading th="Yellow" style="text-left" colspan="3" />
          </tr>
          <tr>
            <TableData style="bg-yellow" td=".bg-yellow" />
            <TableData style="bg-yellow" td="$bg-yellow" />
            <TableData style="bg-yellow" td="#ECB806" />
          </tr>
          <tr>
            <TableData style="bg-yellow-light" td=".bg-yellow-light" />
            <TableData style="bg-yellow-light" td="$bg-yellow-light" />
            <TableData style="bg-yellow-light" td="#FBD968" />
          </tr>
          <tr>
            <TableData style="bg-yellow-dark text-white" td=".bg-yellow-dark" />
            <TableData style="bg-yellow-dark text-white" td="$bg-yellow-dark" />
            <TableData style="bg-yellow-dark text-white" td="#C89A00" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default BackgroundColors;
