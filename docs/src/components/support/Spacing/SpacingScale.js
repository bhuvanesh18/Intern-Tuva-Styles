import React from "react";
import {
  Heading,
  Paragraph,
  TableHeading,
  TableData
} from "../../mini_components";
import { Link } from "react-router-dom";

function SpacingScale() {
  return (
    <React.Fragment>
      <Heading heading="Spacing scale" id="spacing-scale" />
      <Paragraph paragraph="The spacing scale is a base-8 scale. We chose a base-8 scale because eight is a highly composable number (it can be divided and multiplied many times and result in whole numbers), yet allows spacing dense enough for GitHub's UI. The scale's exception is that it begins at 4px to allow smaller padding and margin for denser parts of the site, from there on it steps up consistently in equal values of 8px." />
      <table className="border mt-3">
        <thead>
          <tr>
            <TableHeading style="border py-2 px-3" th="Variable" />
            <TableHeading style="border py-2 px-3" th="Scale" />
            <TableHeading style="border py-2 px-3" th="Value" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-0" />
            <TableData style="border py-2 px-3" td="0" />
            <TableData style="border py-2 px-3" td="0" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-1" />
            <TableData style="border py-2 px-3" td="1" />
            <TableData style="border py-2 px-3" td="4px" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-2" />
            <TableData style="border py-2 px-3" td="2" />
            <TableData style="border py-2 px-3" td="8px" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-3" />
            <TableData style="border py-2 px-3" td="3" />
            <TableData style="border py-2 px-3" td="16px" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-4" />
            <TableData style="border py-2 px-3" td="4" />
            <TableData style="border py-2 px-3" td="24px" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-5" />
            <TableData style="border py-2 px-3" td="5" />
            <TableData style="border py-2 px-3" td="32px" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="$spacer-6" />
            <TableData style="border py-2 px-3" td="6" />
            <TableData style="border py-2 px-3" td="40px" />
          </tr>
        </tbody>
      </table>
      <p className="mt-3">
        These variables are encouraged to be used within components and custom
        CSS. The spacing scale is also used for
        <Link to="/utilities/margin"> margin</Link> and
        <Link to="/utilities/padding"> padding</Link>
        utilities.
      </p>
    </React.Fragment>
  );
}

export default SpacingScale;
