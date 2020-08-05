import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Box() {
  return (
    <React.Fragment>
      <Heading heading="Box" id="box" />
      <Paragraph paragraph="A .Box is a container with a a white background, a light gray border, and rounded corners. By default there are no additional styles such as padding, these can be added as needed with utility classes. Other styles and layouts can be achieved with box elements and modifiers shown in the documentation below." />
      <CodeBlocks
        htmlcoderender={[<div className="Box">This is a box.</div>]}
        codeline={[
          `
        <div class="Box">
          This is a box.
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Box;
