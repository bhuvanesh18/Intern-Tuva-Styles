import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function TextAlignment() {
  return (
    <React.Fragment>
      <Heading heading="Text Alignment" id="text-alignment" />
      <Paragraph paragraph="Use text alignment utilities to left align, center, or right align text." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p className="text-left">Left align</p>
            <p className="text-center">Center</p>
            <p className="text-right">Right align</p>
          </div>
        ]}
        codeline={[
          `
        <p class="text-left">Left align</p>
        <p class="text-center">Center</p>
        <p class="text-right">Right align</p>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TextAlignment;
