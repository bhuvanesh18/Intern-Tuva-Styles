import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function PreviousNextPagination() {
  return (
    <React.Fragment>
      <Heading
        heading="Previous/next pagination"
        id="previous-next-pagination"
      />
      <Paragraph paragraph="You can make a very simple pagination container with just the Previous and Next buttons. Add the aria-disabled='true' attribute to the Previous button if there isn't a preceding page, or to the Next button if there isn't a succeeding page." />
      <CodeBlocks
        htmlcoderender={[
          <nav className="paginate-container" aria-label="Pagination">
            <div className="pagination">
              <span className="previous_page" aria-disabled="true">
                Previous
              </span>
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

export default PreviousNextPagination;
