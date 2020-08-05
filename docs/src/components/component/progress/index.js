import React from "react";
import { ComponentHeading, CodeBlocks } from "../../mini_components";
import Content from "./Content";
import LargeProgress from "./LargeProgress";
import SmallProgress from "./SmallProgress";
import InlineProgress from "./InlineProgress";
import Accessibility from "./Accessibility";
import ProgressWithMultipleValues from "./ProgressWithMultipleValues";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Progress"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/progress"
      />
      <Content />
      <p>
        Use Progress components to visualize task completion. The Progress class
        adds a background color and aligns its children horizontally with
        flexbox. The children should be individually colored with
        <a href="/utilities/colors#background-colors">
          {" "}
          background utilities{" "}
        </a>{" "}
        and sized with inline width styles in percentages. Overflow is hidden,
        so children that overflow will be clipped.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <span className="Progress">
            <span className="bg-blue-4" style={{ width: 50 + "%" }}></span>
          </span>
        ]}
        codeline={[
          `
        <span class="Progress">
          <span class="bg-blue-4" style="width: 50%;"></span>
        </span>`
        ]}
        lang="html"
      />
      <LargeProgress />
      <SmallProgress />
      <InlineProgress />
      <Accessibility />
      <ProgressWithMultipleValues />
    </div>
  );
}

export default index;
