import React from "react";
const Heading = props => {
  const { heading, id } = props;
  return (
    <h2 id={id} className="mt-2 tuva-line font-weight-normal">
      {heading}
    </h2>
  );
};
export default Heading;
