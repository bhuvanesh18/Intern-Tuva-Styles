import React from "react";
import {
  Heading,
  Paragraph,
  TableHeading,
  TableData
} from "../../mini_components";
import { Link } from "react-router-dom";

function TypeScale() {
  return (
    <React.Fragment>
      <Heading heading="Type scale" id="type-scale" />
      <Paragraph paragraph="The typography scale is designed to work for Tuva product UI. Font sizes are designed to work in combination with line-height values so as to result in more sensible numbers wherever possible." />
      <p className="mt-4">
        Font sizes are smaller on mobile and scale up at the md
        <Link to="/support/breakpoints"> breakpoint </Link>
        to be larger on desktop.
      </p>
      <table className="border mt-3">
        <thead>
          <tr>
            <TableHeading style="border py-2 px-3" th="Scale" />
            <TableHeading style="border py-2 px-3" th="Font size: mobile" />
            <TableHeading style="border py-2 px-3" th="Font size: desktop" />
            <TableHeading style="border py-2 px-3" th="1.25 line height" />
            <TableHeading style="border py-2 px-3" th="1.5 line height" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData style="border py-2 px-3" td="0" />
            <TableData style="border py-2 px-3" td="46px" />
            <TableData style="border py-2 px-3" td="54px" />
            <TableData style="border py-2 px-3" td="60" />
            <TableData style="border py-2 px-3" td="72" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="1" />
            <TableData style="border py-2 px-3" td="40px" />
            <TableData style="border py-2 px-3" td="46px" />
            <TableData style="border py-2 px-3" td="50" />
            <TableData style="border py-2 px-3" td="60" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="2" />
            <TableData style="border py-2 px-3" td="28px" />
            <TableData style="border py-2 px-3" td="30px" />
            <TableData style="border py-2 px-3" td="40" />
            <TableData style="border py-2 px-3" td="48" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="3" />
            <TableData style="border py-2 px-3" td="22px" />
            <TableData style="border py-2 px-3" td="24px" />
            <TableData style="border py-2 px-3" td="30" />
            <TableData style="border py-2 px-3" td="36" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="4" />
            <TableData style="border py-2 px-3" td="16px" />
            <TableData style="border py-2 px-3" td="20px" />
            <TableData style="border py-2 px-3" td="20" />
            <TableData style="border py-2 px-3" td="24" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="5" />
            <TableData style="border py-2 px-3" td="14px" />
            <TableData style="border py-2 px-3" td="18px" />
            <TableData style="border py-2 px-3" td="17.5" />
            <TableData style="border py-2 px-3" td="21" />
          </tr>
          <tr>
            <TableData style="border py-2 px-3" td="6" />
            <TableData style="border py-2 px-3" td="12px" />
            <TableData style="border py-2 px-3" td="16px" />
            <TableData style="border py-2 px-3" td="15" />
            <TableData style="border py-2 px-3" td="18" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TypeScale;
