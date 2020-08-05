import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function IssueLabels() {
  return (
    <React.Fragment>
      <Heading heading="Issue labels" id="issue-labels" />
      <Paragraph paragraph="Issue labels are used for adding labels to issues and pull requests. They also come with emoji support." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span
              className="IssueLabel bg-blue text-white mr-1"
              title="Label: good first issue"
            >
              good first issue
            </span>
            <span
              className="IssueLabel bg-red text-white mr-1"
              title="Label: bug"
            >
              bug 🐛
            </span>
            <span
              className="IssueLabel bg-yellow text-white"
              title="Label: bug"
            >
              help wanted
            </span>
          </div>
        ]}
        codeline={[
          `
        <span class="IssueLabel bg-blue text-white mr-1" title="Label: good first issue">good first issue</span>
        <span class="IssueLabel bg-red text-white mr-1" title="Label: bug">bug 🐛</span>
        <span class="IssueLabel bg-yellow text-white" title="Label: bug">help wanted</span>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="If an issue label needs to be bigger, add the .IssueLabel--big modifier." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span
              className="IssueLabel IssueLabel--big bg-blue text-white mr-1"
              title="Label: good first issue"
            >
              good first issue
            </span>
            <span
              className="IssueLabel IssueLabel--big bg-red text-white mr-1"
              title="Label: bug"
            >
              bug 🐛
            </span>
            <span
              className="IssueLabel IssueLabel--big bg-yellow text-white"
              title="Label: bug"
            >
              help wanted
            </span>
          </div>
        ]}
        codeline={[
          `
        <span class="IssueLabel IssueLabel--big bg-blue text-white mr-1" title="Label: good first issue">good first issue</span>
        <span class="IssueLabel IssueLabel--big bg-red text-white mr-1" title="Label: bug">bug 🐛</span>
        <span class="IssueLabel IssueLabel--big bg-yellow text-white" title="Label: bug">help wanted</span>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default IssueLabels;
