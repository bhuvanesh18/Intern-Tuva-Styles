import React from "react";
const TableData = (props) => {
  const { td, style, colspan, rowspan, inlinestyle } = props;
  let isundefined = style ? style : "";
  let col = colspan ? colspan : "";
  let row = rowspan ? rowspan : "";
  let inlinestyles = inlinestyle ? `${inlinestyle}` : "";
  console.log(inlinestyles);
  return (
    <td
      className={`py-1 px-2 border font-weight-normal ${isundefined}`}
      style={{ backgroundColor: `${inlinestyles}` }}
      colSpan={col}
      rowSpan={row}
    >
      {td}
    </td>
  );
};
export default TableData;
