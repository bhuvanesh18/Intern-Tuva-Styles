import React from "react";
import { Heading } from "../../mini_components";
import { Link } from "react-router-dom";

function ColorUtilities() {
  return (
    <React.Fragment>
      <Heading heading="Color utilities" id="color-utilities" />
      <p>
        There are <Link to="/utilities/color">utility classes</Link> for every
        color in our system.
      </p>
    </React.Fragment>
  );
}

export default ColorUtilities;
