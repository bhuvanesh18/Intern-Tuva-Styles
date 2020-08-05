import React from "react";
import { Heading, TableData, TableHeading } from "./../../mini_components";

function BorderColorUtility() {
  return (
    <React.Fragment>
      <Heading heading="Border color utilities" id="border-color-utilities" />
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
            <TableData style="py-1 px-6" td=".border-blue" />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#268c97"
              td="$border-blue"
            />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#268c97"
              td="#268c97"
            />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-blue-light" />
            <TableData
              style="py-3 px-6"
              inlinestyle="#7fcbd4"
              td="$border-blue-light"
            />
            <TableData style="py-3 px-6" inlinestyle="#7fcbd4" td="#7fcbd4" />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-red" />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#c10000"
              td="$border-red"
            />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#c10000"
              td="#c10000"
            />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-red-light" />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#db6f6f"
              td="$border-red-light"
            />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#db6f6f"
              td="#db6f6f"
            />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-yellow" />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#d7bc61"
              td=" $border-yellow"
            />
            <TableData
              style="py-3 px-6 text-white"
              inlinestyle="#d7bc61"
              td="#d7bc61"
            />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-gray-ligth" />
            <TableData
              style="py-3 px-6"
              inlinestyle="#eceef1"
              td="$border-gray-light"
            />
            <TableData style="py-3 px-6" inlinestyle="#eceef1" td="#eceef1" />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-gray-dark" />
            <TableData
              style="py-3 px-6"
              inlinestyle="#c5cad3"
              td="$border-gray-dark"
            />
            <TableData style="py-3 px-6" inlinestyle="#c5cad3" td="#c5cad3" />
          </tr>
          <tr>
            <TableData style="py-1 px-6" td=".border-white" />
            <TableData
              style="py-3 px-6"
              inlinestyle="#ffffff"
              td="$border-white"
            />
            <TableData style="py-3 px-6" inlinestyle="#ffffff" td="#ffffff" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default BorderColorUtility;
