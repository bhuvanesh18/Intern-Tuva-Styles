import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Filter() {
  return (
    <React.Fragment>
      <Heading heading="Filter" id="filter" />
      <Paragraph paragraph="If the list is expected to get long, consider adding a .SelectMenu-filter input. Be sure to also include the .SelectMenu--hasFilter modifier class. On mobile devices it will add a fixed height and anchor the select menu to the top of the screen. This makes sure the filter input stays at the same position while typing." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/Filter_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "500" + "px",
              }}
              title="Select-Menu-Filter"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
          <details class="details-reset details-overlay" open>
          <summary class="btn" aria-haspopup="true">
            Choose an item
          </summary>
          <div class="SelectMenu SelectMenu--hasFilter">
            <div class="SelectMenu-modal">
              <header class="SelectMenu-header">
                <h3 class="SelectMenu-title">Title</h3>
                <button class="SelectMenu-closeButton" type="button">
                   <!-- <%= octicon "x" %> -->
                  <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" /></svg>
                </button>
              </header>
              <form class="SelectMenu-filter">
                <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter">
              </form>
              <div class="SelectMenu-list">
                <button class="SelectMenu-item" role="menuitem">Item 1</button>
                <button class="SelectMenu-item" role="menuitem">Item 2</button>
                <button class="SelectMenu-item" role="menuitem">Item 3</button>
                <button class="SelectMenu-item" role="menuitem">Item 4</button>
                <button class="SelectMenu-item" role="menuitem">Item 5</button>
                <button class="SelectMenu-item" role="menuitem">Item 6</button>
                <button class="SelectMenu-item" role="menuitem">Item 7</button>
                <button class="SelectMenu-item" role="menuitem">Item 8</button>
                <button class="SelectMenu-item" role="menuitem">Item 9</button>
                <button class="SelectMenu-item" role="menuitem">Item 10</button>
                <button class="SelectMenu-item" role="menuitem">Item 11</button>
                <button class="SelectMenu-item" role="menuitem">Item 12</button>
                <button class="SelectMenu-item" role="menuitem">Item 13</button>
                <button class="SelectMenu-item" role="menuitem">Item 14</button>
                <button class="SelectMenu-item" role="menuitem">Item 15</button>
                <button class="SelectMenu-item" role="menuitem">Item 16</button>
                <button class="SelectMenu-item" role="menuitem">Item 17</button>
                <button class="SelectMenu-item" role="menuitem">Item 18</button>
                <button class="SelectMenu-item" role="menuitem">Item 19</button>
                <button class="SelectMenu-item" role="menuitem">Item 20</button>
                <button class="SelectMenu-item" role="menuitem">Item 21</button>
                <button class="SelectMenu-item" role="menuitem">Item 22</button>
                <button class="SelectMenu-item" role="menuitem">Item 23</button>
                <button class="SelectMenu-item" role="menuitem">Item 24</button>
                <button class="SelectMenu-item" role="menuitem">Item 25</button>
              </div>
              <footer class="SelectMenu-footer">Showing 25 of 25</footer>
            </div>
          </div>
        </details>

        <div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
        <div class="d-none d-sm-block" style="height: 500px"> <!-- min height for > sm --> </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Filter;
