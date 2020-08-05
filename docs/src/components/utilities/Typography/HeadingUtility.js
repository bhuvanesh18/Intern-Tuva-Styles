import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function HeadingUtility() {
  return (
    <React.Fragment>
      <Heading heading="Heading utilities" id="heading-utilities" />
      <Paragraph paragraph="Use .h1 – .h6 to change an elements font size and weight to match our heading styles." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p className="h1">Pizza 1</p>
            <p className="h2">Pizza 2</p>
            <p className="h3">Pizza 3</p>
            <p className="h4">Pizza 4</p>
            <p className="h5">Pizza 5</p>
            <p className="h6">Pizza 6</p>
          </div>
        ]}
        codeline={[
          `
          <p class="h1">Pizza 1</p>
          <p class="h2">Pizza 2</p>
          <p class="h3">Pizza 3</p>
          <p class="h4">Pizza 4</p>
          <p class="h5">Pizza 5</p>
          <p class="h6">Pizza 6</p>
          `
        ]}
        lang="html"
      />
      <Paragraph paragraph="These are particularly useful for changing the visual appearance while keeping the markup semantically correct. Be sure you keep the hierarchy appropriate for the page." />
      <CodeBlocks
        htmlcoderender={[
          <h1 className="h4">
            Looks like a heading 4, semantically a heading 1
          </h1>
        ]}
        codeline={[
          `
          <h1 class="h4">Looks like a heading 4, semantically a heading 1</h1>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default HeadingUtility;
