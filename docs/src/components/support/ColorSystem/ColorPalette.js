import React from "react";
import { CodeBlocks, Heading } from "./../../mini_components";

function ColorPalette() {
  return (
    <React.Fragment>
      <Heading heading="Color palette" id="color-palette" />
      <CodeBlocks
        htmlcoderender={[
          <div className="mt-2 py-6 overflow-x-scroll">
            <a href="#gray" className="px-6 py-4 ml-3 bg-gray text-inherit">
              Gray
            </a>
            <a href="#blue" className="px-6 py-4 ml-3 bg-blue text-inherit">
              Blue
            </a>
            <a href="#red" className="px-6 py-4 ml-3 bg-red text-white">
              Red
            </a>
            <a href="#yellow" className="px-6 py-4 ml-3 bg-yellow text-inherit">
              Yellow
            </a>
            <a href="#black" className="px-6 py-4 ml-3 bg-gray-9 text-white">
              Black
            </a>
            <a href="#white" className="px-6 py-4 ml-3 bg-white text-inherit">
              White
            </a>
          </div>
        ]}
      />
    </React.Fragment>
  );
}

export default ColorPalette;
