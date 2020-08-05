import React from "react";
import { Heading, CodeBlocks } from "./../mini_components";

function Subtitles() {
  return (
    <React.Fragment>
      <Heading heading="Subtitles" id="subtitles" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <h1 className="s0-mkt">This is a Marketing s0</h1>
            <h2 className="s0-mkt-bold">This is a Marketing s0-bold</h2>
            <h3 className="s1-mkt">This is a Marketing s1</h3>
            <h4 className="s1-mkt-bold">This is a Marketing s1-bold</h4>
          </div>,
        ]}
        codeline={[
          `
          <h1 class="s0-mkt">This is a Marketing s0</h1>
          <h2 class="s0-mkt-bold">This is a Marketing s0-bold</h2>
          <h3 class="s1-mkt">This is a Marketing s1</h3>
          <h4 class="s1-mkt-bold">This is a Marketing s1-bold</h4>
          `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Subtitles;
