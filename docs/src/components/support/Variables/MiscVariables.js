import React from "react";
import { TableHeading, TableData, Heading } from "../../mini_components";

function MiscVariables() {
  return (
    <React.Fragment>
      <Heading heading="Misc variables" id="misc" />
      <h4 className="mt-1 font-weight-normal">
        Defined in{" "}
        <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/misc.scss">
          src/support/variables/misc.scss
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
            <TableData style="py-2 px-3" td="$border-width" />
            <TableData style="py-2 px-3" td="1px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-color" />
            <TableData style="py-2 px-3" td="#e4e7eb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-style" />
            <TableData style="py-2 px-3" td="solid" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border" />
            <TableData style="py-2 px-3" td="1px solid #e4e7eb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-radius" />
            <TableData style="py-2 px-3" td="3px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$box-shadow" />
            <TableData style="py-2 px-3" td="0 1px 1px rgba($black, 0.1)" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$box-shadow-medium" />
            <TableData style="py-2 px-3" td="0 1px 5px rgba($black, 0.15)" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$box-shadow-large" />
            <TableData style="py-2 px-3" td="0 1px 15px rgba($black, 0.15)" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$box-shadow-extra-large" />
            <TableData style="py-2 px-3" td="0 10px 50px rgba($black, 0.07)" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$tooltip-max-width" />
            <TableData style="py-2 px-3" td="250px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$tooltip-background-color" />
            <TableData style="py-2 px-3" td="#000000" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$tooltip-text-color" />
            <TableData style="py-2 px-3" td="#ffffff" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$tooltip-delay" />
            <TableData style="py-2 px-3" td="0.4s" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$tooltip-duration" />
            <TableData style="py-2 px-3" td="0.1s" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default MiscVariables;
