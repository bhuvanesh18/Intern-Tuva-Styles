import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Example from "./Example";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Table object"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/table-object"
      />
      <p className="d-block mt-6 pt-2">
        The table object is a module for creating dynamically resizable elements
        that always sit on the same horizontal line (e.g., they never break to a
        new line). Using table styles in our CSS means it's cross browser
        friendly back to at least IE9.
      </p>
      <p>
        Additional margin or padding may be required to properly space content.
      </p>

      <Example />
    </div>
  );
}

export default index;
