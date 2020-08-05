import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Diffstat() {
  return (
    <React.Fragment>
      <Heading heading="Diffstat" id="diffstat" />
      <Paragraph paragraph="Diffstats show how many deletions or additions a diff has. It's typically a row of 5 blocks that get colored with blue or red." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span
              className="diffstat tooltipped tooltipped-e"
              aria-label="6 changes: 3 additions &amp; 3 deletions"
            >
              6<span className="diffstat-block-added"></span>
              <span className="diffstat-block-added"></span>
              <span className="diffstat-block-deleted"></span>
              <span className="diffstat-block-deleted"></span>
              <span className="diffstat-block-neutral"></span>
            </span>
          </div>
        ]}
        codeline={[
          `
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 changes: 3 additions &amp; 3 deletions">
          6
          <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
        </span>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use the text-green and text-red utilities to add additional information about the size of the diff." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span className="diffstat">
              <span className="text-green">+7</span>
              <span className="text-red">−2</span>
              <span
                className="tooltipped tooltipped-e"
                aria-label="9 lines changed"
              >
                <span className="diffstat-block-added"></span>
                <span className="diffstat-block-added"></span>
                <span className="diffstat-block-added"></span>
                <span className="diffstat-block-deleted"></span>
                <span className="diffstat-block-neutral"></span>
              </span>
            </span>
          </div>
        ]}
        codeline={[
          `
      <span class="diffstat">
        <span class="text-green">+7</span>
        <span class="text-red">−2</span>
        <span class="tooltipped tooltipped-e" aria-label="9 lines changed">
          <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
        </span>
      </span>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Diffstat;
