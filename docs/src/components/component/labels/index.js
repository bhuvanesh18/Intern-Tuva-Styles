import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import Labels from "./Labels";
import IssueLabels from "./IssueLabels";
import States from "./States";
import Counters from "./Counters";
import Diffstat from "./Diffstat";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Labels"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/labels"
      />
      <Content />
      <p>
        Labels add metadata or indicate status of items and navigational
        elements. Three different types of labels are available:{" "}
        <a href="#default-label-styles">Labels</a> for adding metadata{" "}
        <a href="#states">States</a> for indicating status, and{" "}
        <a href="#counters">Counters</a> for showing the count for a number of
        items.
      </p>

      <Labels />
      <IssueLabels />
      <States />
      <Counters />
      <Diffstat />
    </div>
  );
}

export default index;
