import React from "react";
const SubHeading = props => {
  const { subheading, id } = props;
  return (
    <h3 id={id} className="mt-2 font-weight-normal">
      {subheading}
    </h3>
  );
};
export default SubHeading;
