import React from "react";
import { Heading, TableHeading, TableData } from "../../mini_components";

function ColorVariables() {
  return (
    <React.Fragment>
      <Heading heading="Color variables" id="color-variables" />
      <div className="d-flex flex-justify-between m-4">
        <table id="gray">
          <thead>
            <tr>
              <TableHeading colspan="3" style="py-4 bg-gray" th="Gray" />
            </tr>
            <tr>
              <TableHeading colspan="3" style="pt-1 bg-gray-9" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData style="bg-gray px-6 py-2 border-0" td="$gray" />
              <TableData style="bg-gray px-6 py-2 border-0" td="" />
              <TableData style="bg-gray px-6 py-2 border-0" td="#828890" />
            </tr>
            <tr>
              <TableData style="bg-gray-0 px-6 py-2 border-0" td="$gray-000" />
              <TableData style="bg-gray-0 px-6 py-2 border-0" td="" />
              <TableData style="bg-gray-0 px-6 py-2 border-0" td="#f9f9fb" />
            </tr>
            <tr>
              <TableData style="bg-gray-1 px-6 py-2 border-0" td="$gray-100" />
              <TableData style="bg-gray-1 px-6 py-2 border-0" td="" />
              <TableData style="bg-gray-1 px-6 py-2 border-0" td="#f7f7fb" />
            </tr>
            <tr>
              <TableData style="bg-gray-2 px-6 py-2 border-0" td="$gray-200" />
              <TableData style="bg-gray-2 px-6 py-2 border-0" td="" />
              <TableData style="bg-gray-2 px-6 py-2 border-0" td="#edf2f7" />
            </tr>
            <tr>
              <TableData style="bg-gray-3 px-6 py-2 border-0" td="$gray-300" />
              <TableData style="bg-gray-3 px-6 py-2 border-0" td="" />
              <TableData style="bg-gray-3 px-6 py-2 border-0" td="#eeeeee" />
            </tr>
            <tr>
              <TableData style="bg-gray-4 px-6 py-2 border-0" td="$gray-400" />
              <TableData style="bg-gray-4 px-6 py-2 border-0" td="" />
              <TableData style="bg-gray-4 px-6 py-2 border-0" td="#e4e7eb" />
            </tr>
            <tr>
              <TableData style="bg-gray-5 px-6 py-2 border-0" td="$gray-500" />
              <TableData style="bg-gray-5 px-6 py-2 border-0" td="" />
              <TableData style="bg-gray-5 px-6 py-2 border-0" td="#c5cad3" />
            </tr>
            <tr>
              <TableData
                style="bg-gray-6 px-6 py-2 border-0 text-white"
                td="$gray-600"
              />
              <TableData style="bg-gray-6 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-gray-6 px-6 py-2 border-0 text-white"
                td="#828890"
              />
            </tr>
            <tr>
              <TableData
                style="bg-gray-7 px-6 py-2 border-0 text-white"
                td="$gray-700"
              />
              <TableData style="bg-gray-7 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-gray-7 px-6 py-2 border-0 text-white"
                td="#808080"
              />
            </tr>
            <tr>
              <TableData
                style="bg-gray-8 px-6 py-2 border-0 text-white"
                td="$gray-800"
              />
              <TableData style="bg-gray-8 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-gray-8 px-6 py-2 border-0 text-white"
                td="#666666"
              />
            </tr>
            <tr>
              <TableData
                style="bg-gray-9 px-6 py-2 border-0 text-white"
                td="$gray-900"
              />
              <TableData style="bg-gray-9 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-gray-9 px-6 py-2 border-0 text-white"
                td="#3d4146"
              />
            </tr>
          </tbody>
        </table>

        <table id="blue">
          <thead>
            <tr>
              <TableHeading colspan="3" style="py-4 bg-blue" th="Blue" />
            </tr>
            <tr>
              <TableHeading colspan="3" style="pt-1" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData style="bg-blue px-6 py-2 border-0" td="$blue" />
              <TableData style="bg-blue px-6 py-2 border-0" td="" />
              <TableData style="bg-blue px-6 py-2 border-0" td="#26aebc" />
            </tr>
            <tr>
              <TableData style="bg-blue-0 px-6 py-2 border-0" td="$blue-000" />
              <TableData style="bg-blue-0 px-6 py-2 border-0" td="" />
              <TableData style="bg-blue-0 px-6 py-2 border-0" td="#DEF7FA" />
            </tr>
            <tr>
              <TableData style="bg-blue-1 px-6 py-2 border-0" td="$blue-100" />
              <TableData style="bg-blue-1 px-6 py-2 border-0" td="" />
              <TableData style="bg-blue-1 px-6 py-2 border-0" td="#A4DBE1" />
            </tr>
            <tr>
              <TableData style="bg-blue-2 px-6 py-2 border-0" td="$blue-200" />
              <TableData style="bg-blue-2 px-6 py-2 border-0" td="" />
              <TableData style="bg-blue-2 px-6 py-2 border-0" td="#7FCBD4" />
            </tr>
            <tr>
              <TableData style="bg-blue-3 px-6 py-2 border-0" td="$blue-300" />
              <TableData style="bg-blue-3 px-6 py-2 border-0" td="" />
              <TableData style="bg-blue-3 px-6 py-2 border-0" td="#53C3D0" />
            </tr>
            <tr>
              <TableData style="bg-blue-4 px-6 py-2 border-0" td="$blue-400" />
              <TableData style="bg-blue-4 px-6 py-2 border-0" td="" />
              <TableData style="bg-blue-4 px-6 py-2 border-0" td="#26aebc" />
            </tr>
            <tr>
              <TableData style="bg-blue-5 px-6 py-2 border-0" td="$blue-500" />
              <TableData style="bg-blue-5 px-6 py-2 border-0" td="" />
              <TableData style="bg-blue-5 px-6 py-2 border-0" td="#268C97" />
            </tr>
            <tr>
              <TableData
                style="bg-blue-6 px-6 py-2 border-0 text-white"
                td="$blue-600"
              />
              <TableData style="bg-blue-6 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-blue-6 px-6 py-2 border-0 text-white"
                td="#17717A"
              />
            </tr>
            <tr>
              <TableData
                style="bg-blue-7 px-6 py-2 border-0 text-white"
                td="$blue-700"
              />
              <TableData style="bg-blue-7 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-blue-7 px-6 py-2 border-0 text-white"
                td="#0B5F68"
              />
            </tr>
            <tr>
              <TableData
                style="bg-blue-8 px-6 py-2 border-0 text-white"
                td="$blue-800"
              />
              <TableData style="bg-blue-8 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-blue-8 px-6 py-2 border-0 text-white"
                td="#005962"
              />
            </tr>
            <tr>
              <TableData
                style="bg-blue-9 px-6 py-2 border-0 text-white"
                td="$blue-900"
              />
              <TableData style="bg-blue-9 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-blue-9 px-6 py-2 border-0 text-white"
                td="#00484F"
              />
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-justify-between m-4">
        <table id="red">
          <thead>
            <tr>
              <TableHeading
                colspan="3"
                style="py-4 bg-red text-white"
                th="Red"
              />
            </tr>
            <tr>
              <TableHeading colspan="3" style="pt-1 bg-white" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData
                style="bg-red px-6 py-2 border-0 text-white"
                td="$red"
              />
              <TableData style="bg-red px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red px-6 py-2 border-0 text-white"
                td="#EB0202"
              />
            </tr>
            <tr>
              <TableData style="bg-red-0 px-6 py-2 border-0" td="$red-000" />
              <TableData style="bg-red-0 px-6 py-2 border-0" td="" />
              <TableData style="bg-red-0 px-6 py-2 border-0" td="#FFC8C8" />
            </tr>
            <tr>
              <TableData style="bg-red-1 px-6 py-2 border-0" td="$red-100" />
              <TableData style="bg-red-1 px-6 py-2 border-0" td="" />
              <TableData style="bg-red-1 px-6 py-2 border-0" td="#FFA6A6" />
            </tr>
            <tr>
              <TableData style="bg-red-2 px-6 py-2 border-0" td="$red-200" />
              <TableData style="bg-red-2 px-6 py-2 border-0" td="" />
              <TableData style="bg-red-2 px-6 py-2 border-0" td="#FF7F7F" />
            </tr>
            <tr>
              <TableData
                style="bg-red-3 px-6 py-2 border-0 text-white"
                td="$red-300"
              />
              <TableData style="bg-red-3 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-3 px-6 py-2 border-0 text-white"
                td="#FF4C4C"
              />
            </tr>
            <tr>
              <TableData
                style="bg-red-4 px-6 py-2 border-0 text-white"
                td="$red-400"
              />
              <TableData style="bg-red-4 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-4 px-6 py-2 border-0 text-white"
                td="#FF2323"
              />
            </tr>
            <tr>
              <TableData
                style="bg-red-5 px-6 py-2 border-0 text-white"
                td="$red-500"
              />
              <TableData style="bg-red-5 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-5 px-6 py-2 border-0 text-white"
                td="#EB0202"
              />
            </tr>
            <tr>
              <TableData
                style="bg-red-6 px-6 py-2 border-0 text-white"
                td="$red-600"
              />
              <TableData style="bg-red-6 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-6 px-6 py-2 border-0 text-white"
                td="#C10000"
              />
            </tr>
            <tr>
              <TableData
                style="bg-red-7 px-6 py-2 border-0 text-white"
                td="$red-700"
              />
              <TableData style="bg-red-7 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-7 px-6 py-2 border-0 text-white"
                td="#CE0000"
              />
            </tr>
            <tr>
              <TableData
                style="bg-red-8 px-6 py-2 border-0 text-white"
                td="$red-800"
              />
              <TableData style="bg-red-8 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-8 px-6 py-2 border-0 text-white"
                td="#B00202"
              />
            </tr>
            <tr>
              <TableData
                style="bg-red-9 px-6 py-2 border-0 text-white"
                td="$red-900"
              />
              <TableData style="bg-red-9 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-red-9 px-6 py-2 border-0 text-white"
                td="#8A0202"
              />
            </tr>
          </tbody>
        </table>
        <table id="yellow">
          <thead>
            <tr>
              <TableHeading colspan="3" style="py-4 bg-yellow" th="Yellow" />
            </tr>
            <tr>
              <TableHeading colspan="3" style="pt-1 bg-white" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData style="bg-yellow px-6 py-2 border-0" td="$yellow" />
              <TableData style="bg-yellow px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow px-6 py-2 border-0" td="#ECB806" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-0 px-6 py-2 border-0"
                td="$yellow-000"
              />
              <TableData style="bg-yellow-0 px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow-0 px-6 py-2 border-0" td="#FFEFB8" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-1 px-6 py-2 border-0"
                td="$yellow-100"
              />
              <TableData style="bg-yellow-1 px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow-1 px-6 py-2 border-0" td="#FFE89B" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-2 px-6 py-2 border-0"
                td="$yellow-200"
              />
              <TableData style="bg-yellow-2 px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow-2 px-6 py-2 border-0" td="#FBD968" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-3 px-6 py-2 border-0"
                td="$yellow-300"
              />
              <TableData style="bg-yellow-3 px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow-3 px-6 py-2 border-0" td="#FCD03D" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-4 px-6 py-2 border-0"
                td="$yellow-400"
              />
              <TableData style="bg-yellow-4 px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow-4 px-6 py-2 border-0" td="#FCC714" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-5 px-6 py-2 border-0 "
                td="$yellow-500"
              />
              <TableData style="bg-yellow-5 px-6 py-2 border-0" td="" />
              <TableData style="bg-yellow-5 px-6 py-2 border-0" td="#ECB806" />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-6 px-6 py-2 border-0 text-white"
                td="$yellow-600"
              />
              <TableData style="bg-yellow-6 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-yellow-6 px-6 py-2 border-0 text-white"
                td="#DAA803"
              />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-7 px-6 py-2 border-0 text-white"
                td="$yellow-700"
              />
              <TableData style="bg-yellow-7 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-yellow-7 px-6 py-2 border-0 text-white"
                td="#C89A00"
              />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-8 px-6 py-2 border-0 text-white"
                td="$yellow-800"
              />
              <TableData style="bg-yellow-8 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-yellow-8 px-6 py-2 border-0 text-white"
                td="#C29602"
              />
            </tr>
            <tr>
              <TableData
                style="bg-yellow-9 px-6 py-2 border-0 text-white"
                td="$yellow-900"
              />
              <TableData style="bg-yellow-9 px-6 py-2 border-0" td="" />
              <TableData
                style="bg-yellow-9 px-6 py-2 border-0 text-white"
                td="#A57F02"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ColorVariables;
