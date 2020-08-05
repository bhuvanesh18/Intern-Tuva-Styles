import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function NumberedPagination() {
  return (
    <React.Fragment>
      <Heading heading="Numbered pagination" id="numbered-pagination" />
      <Paragraph paragraph="For pagination across multiple pages, make sure it's clear to the user where they are in a set of pages." />
      <Paragraph paragraph='To do this, add anchor links to the pagination element. Previous and Next buttons should always be present. Add the aria-disabled="true" attribute to the Previous button if you are on the first page. Apply the aria-current="page" attribute to the current numbered page.' />
      <Paragraph paragraph="As always, make sure to include the appropriate aria attributes to make the element accessible." />
      <ul className="ml-4">
        <li>
          Add aria-label="Pagination" to the the paginate-container element.
        </li>
        <li>Add aria-label="Page X" to each anchor link.</li>
      </ul>
      <CodeBlocks
        htmlcoderender={[
          <nav className="paginate-container" aria-label="Pagination">
            <div className="pagination">
              <span className="previous_page" aria-disabled="true">
                Previous
              </span>
              <em aria-current="page">1</em>
              <a href="#url" aria-label="Page 2">
                2
              </a>
              <a href="#url" aria-label="Page 3">
                3
              </a>
              <span className="gap">...</span>
              <a href="#url" aria-label="Page 8">
                8
              </a>
              <a href="#url" aria-label="Page 9">
                9
              </a>
              <a href="#url" aria-label="Page 10">
                10
              </a>
              <a
                className="next_page"
                rel="next"
                href="#url"
                aria-label="Next Page"
              >
                Next
              </a>
            </div>
          </nav>
        ]}
        codeline={[
          `
        <nav class="paginate-container" aria-label="Pagination">
          <div class="pagination">
            <span class="previous_page" aria-disabled="true">Previous</span>
            <em aria-current="page">1</em>
            <a href="#url" aria-label="Page 2">2</a>
            <a href="#url" aria-label="Page 3">3</a>
            <span class="gap">...</span>
            <a href="#url" aria-label="Page 8">8</a>
            <a href="#url" aria-label="Page 9">9</a>
            <a href="#url" aria-label="Page 10">10</a>
            <a class="next_page" rel="next" href="#url" aria-label="Next Page">Next</a>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default NumberedPagination;
