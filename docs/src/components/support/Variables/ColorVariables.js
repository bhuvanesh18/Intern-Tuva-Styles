import React from "react";
import { TableHeading, TableData, Heading } from "../../mini_components";

function ColorVariables() {
  return (
    <React.Fragment>
      <Heading heading="Color variables" id="color" />
      <h4 className="mt-1 font-weight-normal">
        Defined in{" "}
        <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/colors.scss">
          src/support/variables/colors.scss
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
            <TableData style="py-2 px-3" td="$border-black-fade" />
            <TableData style="py-2 px-3" td="rgba($black, 0.15)" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-white-fade" />
            <TableData style="py-2 px-3" td="rgba($white, 0.15)" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-blue" />
            <TableData style="py-2 px-3" td="#268c97" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-blue-light" />
            <TableData style="py-2 px-3" td="#7fcbd4" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-red" />
            <TableData style="py-2 px-3" td="#c10000" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-red-light" />
            <TableData style="py-2 px-3" td="#db6f6f" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-yellow" />
            <TableData style="py-2 px-3" td="#d7bc61" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-gray-dark" />
            <TableData style="py-2 px-3" td="#c5cad3" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-gray-darker" />
            <TableData style="py-2 px-3" td="#808080" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-gray-light" />
            <TableData style="py-2 px-3" td="#eceef1" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$border-gray" />
            <TableData style="py-2 px-3" td="#e4e7eb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-blue-light" />
            <TableData style="py-2 px-3" td="#A4DBE1" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-blue" />
            <TableData style="py-2 px-3" td="#26aebc" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-gray-dark" />
            <TableData style="py-2 px-3" td="#3d4146" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-gray-light" />
            <TableData style="py-2 px-3" td="#edf2f7" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-gray" />
            <TableData style="py-2 px-3" td="#e4e7eb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-red" />
            <TableData style="py-2 px-3" td="#EB0202" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-red-light" />
            <TableData style="py-2 px-3" td="#FFA6A6" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-white" />
            <TableData style="py-2 px-3" td="#ffffff" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-yellow" />
            <TableData style="py-2 px-3" td="#ECB806" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-yellow-light" />
            <TableData style="py-2 px-3" td="#FBD968" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$bg-yellow-dark" />
            <TableData style="py-2 px-3" td="#C89A00" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ColorVariables;
