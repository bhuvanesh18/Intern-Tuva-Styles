import React from "react";
import { Heading } from "../../mini_components";
import { Link } from "react-router-dom";

function BorderColors() {
  return (
    <React.Fragment>
      <Heading heading="Border colors" id="border-colors" />
      <p>
        Border colors are documented on the
        <Link to="/utilities/border">border utilities page</Link> .
      </p>
    </React.Fragment>
  );
}

export default BorderColors;
