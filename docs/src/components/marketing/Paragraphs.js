import React from "react";
import { Heading, CodeBlocks } from "../mini_components";

function Paragraphs() {
  return (
    <React.Fragment>
      <Heading heading="Paragraphs" id="paragraphs" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p className="para0-mkt">This is a Marketing p0</p>
            <p className="para0-mkt-bold">This is a Marketing p0-bold</p>
            <p className="para1-mkt">This is a Marketing p1</p>
            <p className="para1-mkt-bold">This is a Marketing p1-bold</p>
          </div>,
        ]}
        codeline={[
          `
          <p class="para0-mkt">This is a Marketing p0</p>
          <p class="para0-mkt-bold">This is a Marketing p0-bold</p>
          <p class="para1-mkt">This is a Marketing p1</p>
          <p class="para1-mkt-bold">This is a Marketing p1-bold</p>
          `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Paragraphs;
