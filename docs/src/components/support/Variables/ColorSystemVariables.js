import React from "react";
import { TableHeading, TableData, Heading } from "../../mini_components";

function ColorSystemVariables() {
  return (
    <React.Fragment>
      <Heading heading="Color system variables" id="color-system" />
      <h4 className="mt-1 font-weight-normal">
        Defined in{" "}
        <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/color-system.scss">
          src/support/variables/color-system.scss
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
            <TableData style="py-2 px-3" td="$gray-000" />
            <TableData style="py-2 px-3" td="#f9f9fb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-100" />
            <TableData style="py-2 px-3" td="#f7f7fb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-200" />
            <TableData style="py-2 px-3" td="#edf2f7" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-300" />
            <TableData style="py-2 px-3" td="#eeeeee" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-400" />
            <TableData style="py-2 px-3" td="#e4e7eb" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-500" />
            <TableData style="py-2 px-3" td="#c5cad3" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-600" />
            <TableData style="py-2 px-3" td="#828890" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-700" />
            <TableData style="py-2 px-3" td="#808080" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-800" />
            <TableData style="py-2 px-3" td="#666666" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$gray-900" />
            <TableData style="py-2 px-3" td="#3d4146" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-000" />
            <TableData style="py-2 px-3" td="#DEF7FA" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-100" />
            <TableData style="py-2 px-3" td="#A4DBE1" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-200" />
            <TableData style="py-2 px-3" td="#7FCBD4" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-300" />
            <TableData style="py-2 px-3" td="#53C3D0" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-400" />
            <TableData style="py-2 px-3" td="#26aebc" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-500" />
            <TableData style="py-2 px-3" td="#268C97" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-600" />
            <TableData style="py-2 px-3" td="#17717A" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-700" />
            <TableData style="py-2 px-3" td="#0B5F68" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-800" />
            <TableData style="py-2 px-3" td="#005962" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$blue-900" />
            <TableData style="py-2 px-3" td="#00484F" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-000" />
            <TableData style="py-2 px-3" td="#FFEFB8" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-100" />
            <TableData style="py-2 px-3" td="#FFE89B" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-200" />
            <TableData style="py-2 px-3" td="#FBD968" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-300" />
            <TableData style="py-2 px-3" td="#FCD03D" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-400" />
            <TableData style="py-2 px-3" td="#FCC714" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-500" />
            <TableData style="py-2 px-3" td="#ECB806" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-600" />
            <TableData style="py-2 px-3" td="#DAA803" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-700" />
            <TableData style="py-2 px-3" td="#C89A00" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-800" />
            <TableData style="py-2 px-3" td="#C29602" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$yellow-900" />
            <TableData style="py-2 px-3" td="#A57F02" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-000" />
            <TableData style="py-2 px-3" td="#FFC8C8" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-100" />
            <TableData style="py-2 px-3" td="#FFA6A6" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-200" />
            <TableData style="py-2 px-3" td="#FF7F7F" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-300" />
            <TableData style="py-2 px-3" td="#FF4C4C" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-400" />
            <TableData style="py-2 px-3" td="#FF2323" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-500" />
            <TableData style="py-2 px-3" td="#EB0202" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-600" />
            <TableData style="py-2 px-3" td="#C10000" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-700" />
            <TableData style="py-2 px-3" td="#CE0000" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-800" />
            <TableData style="py-2 px-3" td="#B00202" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$red-900" />
            <TableData style="py-2 px-3" td="#8A0202" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ColorSystemVariables;
