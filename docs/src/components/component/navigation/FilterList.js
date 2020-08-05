import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function FilterList() {
  return (
    <React.Fragment>
      <Heading heading="Filter list" id="filter-list" />
      <Paragraph paragraph="A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue and make the text white." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <ul className="filter-list">
              <li>
                <a className="filter-item" href="#url" aria-current="page">
                  First filter
                  <span className="count" title="results">
                    21
                  </span>
                </a>
              </li>
              <li>
                <a className="filter-item" href="#url">
                  Second filter
                  <span className="count" title="results">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a className="filter-item" href="#url">
                  Third filter
                </a>
              </li>
            </ul>
          </div>
        ]}
        codeline={[
          `
          <ul class="filter-list">
          <li>
            <a class="filter-item" href="#url" aria-current="page">
              First filter
              <span class="count" title="results">21</span>
            </a>
          </li>
          <li>
            <a class="filter-item" href="#url">
              Second filter
              <span class="count" title="results">3</span>
            </a>
          </li>
          <li>
            <a class="filter-item" href="#url">
              Third filter
            </a>
          </li>
        </ul>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FilterList;
