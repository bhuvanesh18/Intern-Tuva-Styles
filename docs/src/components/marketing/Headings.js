import React from "react";
import { Heading, CodeBlocks } from "./../mini_components";

function Headings() {
  return (
    <React.Fragment>
      <Heading heading="Headings" id="headings" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <h1 className="h0-mkt">This is a Marketing h0</h1>
            <h1 className="h1-mkt text-white text-shadow-dark">
              This is a Marketing h1
            </h1>
            <h1 className="h1-mkt">This is a Marketing h1</h1>
            <h1 className="h1-mkt text-mkt-gray">This is a Marketing h1</h1>
            <h2 className="h2-mkt">This is a Marketing h2</h2>
            <h2 className="h2-mkt text-mkt-gray">This is a Marketing h2</h2>
            <h2 className="h2-mkt text-yellow">This is a Marketing h2</h2>
            <h3 className="h3-mkt">This is a Marketing h3</h3>
            <h4 className="h4-mkt">This is a Marketing h4</h4>
            <h5 className="h5-mkt">This is a Marketing h5</h5>
            <h6 className="h6-mkt">This is a Marketing h6</h6>
          </div>,
        ]}
        codeline={[
          `
          <h1 class="h0-mkt">This is a Marketing h0</h1>
          <h1 class="h1-mkt text-white text-shadow-dark">
            This is a Marketing h1
          </h1>
          <h1 class="h1-mkt">This is a Marketing h1</h1>
          <h1 class="h1-mkt text-mkt-gray">This is a Marketing h1</h1>
          <h2 class="h2-mkt">This is a Marketing h2</h2>
          <h2 class="h2-mkt text-mkt-gray">This is a Marketing h2</h2>
          <h2 class="h2-mkt text-yellow">This is a Marketing h2</h2>
          <h3 class="h3-mkt">This is a Marketing h3</h3>
          <h4 class="h4-mkt">This is a Marketing h4</h4>
          <h5 class="h5-mkt">This is a Marketing h5</h5>
          <h6 class="h6-mkt">This is a Marketing h6</h6>`,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Headings;
