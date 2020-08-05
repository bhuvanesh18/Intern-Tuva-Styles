import React from "react";
import {
  Heading,
  Paragraph,
  TableHeading,
  TableData
} from "../../mini_components";

function ShortHand() {
  return (
    <React.Fragment>
      <Heading heading="Shorthand" id="shorthand" />
      <Paragraph paragraph="Since padding utilities have many variations and will be used in many places, we use a shorthand naming convention to help keep class names succinct." />
      <table className="mt-2">
        <thead>
          <tr>
            <TableHeading th="Shorthand" />
            <TableHeading th="Description" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData td="p" />
            <TableData td="padding" />
          </tr>
          <tr>
            <TableData td="t" />
            <TableData td="top" />
          </tr>
          <tr>
            <TableData td="r" />
            <TableData td="right" />
          </tr>
          <tr>
            <TableData td="b" />
            <TableData td="bottom" />
          </tr>
          <tr>
            <TableData td="l" />
            <TableData td="left" />
          </tr>
          <tr>
            <TableData td="x" />
            <TableData td="horizontal, left & right" />
          </tr>
          <tr>
            <TableData td="y" />
            <TableData td="vertical, top & bottom" />
          </tr>
          <tr>
            <TableData td="0" />
            <TableData td="0" />
          </tr>
          <tr>
            <TableData td="1" />
            <TableData td="4px" />
          </tr>
          <tr>
            <TableData td="2" />
            <TableData td="8px" />
          </tr>
          <tr>
            <TableData td="3" />
            <TableData td="16px" />
          </tr>
          <tr>
            <TableData td="4" />
            <TableData td="24px" />
          </tr>
          <tr>
            <TableData td="5" />
            <TableData td="32px" />
          </tr>
          <tr>
            <TableData td="6" />
            <TableData td="40px" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ShortHand;
