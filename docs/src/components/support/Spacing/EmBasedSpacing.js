import React from "react";
import {
  Heading,
  Paragraph,
  TableHeading,
  TableData
} from "../../mini_components";

function EmBasedSpacing() {
  return (
    <React.Fragment>
      <Heading heading="Em-based spacing" id="em-based-spacing" />
      <Paragraph paragraph="Ems are used for spacing within components such as buttons and form elements. We stick to common fractions for em values (and powers of 2 where possible) so that , in combination with typography and line-height, the total height lands on sensible numbers." />
      <table className="border mt-3">
        <thead>
          <tr>
            <TableHeading style="border py-2 px-3" th="Variable" />
            <TableHeading style="border py-2 px-3" th="Fraction" />
            <TableHeading style="border py-2 px-3" th="Y Padding (em)" />
            <TableHeading style="border py-2 px-3" th="Total height at 16px" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData style="border py-2 px-3" td="$em-spacer-1" />
            <TableData style="border py-2 px-3" td="1/16" />
            <TableData style="border py-2 px-3" td="0.625" />
            <TableData style="border py-2 px-3" td="26" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$em-spacer-2" />
            <TableData style="border py-2 px-3" td="1/8" />
            <TableData style="border py-2 px-3" td="0.125" />
            <TableData style="border py-2 px-3" td="28" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$em-spacer-3" />
            <TableData style="border py-2 px-3" td="1/4" />
            <TableData style="border py-2 px-3" td="0.25" />
            <TableData style="border py-2 px-3" td="32" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$em-spacer-4" />
            <TableData style="border py-2 px-3" td="3/8" />
            <TableData style="border py-2 px-3" td="0.375" />
            <TableData style="border py-2 px-3" td="36" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$em-spacer-5" />
            <TableData style="border py-2 px-3" td="1/2" />
            <TableData style="border py-2 px-3" td="0.5" />
            <TableData style="border py-2 px-3" td="40" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$em-spacer-6" />
            <TableData style="border py-2 px-3" td="3/4" />
            <TableData style="border py-2 px-3" td="0.75" />
            <TableData style="border py-2 px-3" td="48" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default EmBasedSpacing;
