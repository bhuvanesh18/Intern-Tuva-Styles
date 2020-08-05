import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function ListStyles() {
  return (
    <React.Fragment>
      <Heading heading="List styles" id="list-styles" />
      <Paragraph paragraph="Remove bullets from an unordered list or numbers from an ordered list by applying .list-style-none to the <ul>." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <ul className="list-style-none">
              <li>First list item</li>
              <li>Second list item</li>
              <li>Third list item</li>
            </ul>
          </div>
        ]}
        codeline={[
          `
        <ul class="list-style-none">
          <li>First list item</li>
          <li>Second list item</li>
          <li>Third list item</li>
        </ul>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ListStyles;
