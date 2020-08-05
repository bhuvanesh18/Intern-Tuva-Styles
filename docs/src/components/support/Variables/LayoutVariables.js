import React from "react";
import { TableHeading, TableData, Heading } from "../../mini_components";

function LayoutVariables() {
  return (
    <React.Fragment>
      <Heading heading="Layout variables" id="layout" />
      <h4 className="mt-1 font-weight-normal">
        Defined in{" "}
        <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/layout.scss">
          src/support/variables/layout.scss
        </a>
      </h4>
      <table className="width-full border mt-2">
        <thead>
          <tr>
            <TableHeading style="py-2 px-3" th="Name" />
            <TableHeading style="py-2 px-3" th="Value" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData style="py-2 px-3" td="$spacer" />
            <TableData style="py-2 px-3" td="8px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-0" />
            <TableData style="py-2 px-3" td="0" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-1" />
            <TableData style="py-2 px-3" td="4px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-2" />
            <TableData style="py-2 px-3" td="8px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-3" />
            <TableData style="py-2 px-3" td="16px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-4" />
            <TableData style="py-2 px-3" td="24px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-5" />
            <TableData style="py-2 px-3" td="32px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$spacer-6" />
            <TableData style="py-2 px-3" td="40px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$em-spacer-1" />
            <TableData style="py-2 px-3" td="0.0625em" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$em-spacer-2" />
            <TableData style="py-2 px-3" td="0.125em" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$em-spacer-3" />
            <TableData style="py-2 px-3" td="0.25em" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$em-spacer-4" />
            <TableData style="py-2 px-3" td="0.375em" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$em-spacer-5" />
            <TableData style="py-2 px-3" td="0.5em" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$em-spacer-6" />
            <TableData style="py-2 px-3" td="0.75em" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$container-width" />
            <TableData style="py-2 px-3" td="980px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$grid-gutter" />
            <TableData style="py-2 px-3" td="10px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$width-xs" />
            <TableData style="py-2 px-3" td="0" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$width-sm" />
            <TableData style="py-2 px-3" td="544px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$width-md" />
            <TableData style="py-2 px-3" td="768px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$width-lg" />
            <TableData style="py-2 px-3" td="1012px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$width-xl" />
            <TableData style="py-2 px-3" td="1280px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$container-sm" />
            <TableData style="py-2 px-3" td="544px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$container-md" />
            <TableData style="py-2 px-3" td="768px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$container-lg" />
            <TableData style="py-2 px-3" td="1012px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$container-xl" />
            <TableData style="py-2 px-3" td="1280px" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default LayoutVariables;
