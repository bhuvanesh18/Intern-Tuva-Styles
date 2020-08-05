import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SubNavigation() {
  return (
    <React.Fragment>
      <Heading heading="Sub Navigation" id="sub-navigation" />
      <Paragraph paragraph=".subnav is navigation that is typically used when on a dashboard type interface with another set of navigation above it. This helps distinguish navigation hierarchy." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="subnav" aria-label="Respository">
              <a className="subnav-item" href="#url" aria-current="page">
                Item 1
              </a>
              <a className="subnav-item" href="#url">
                Item 2
              </a>
              <a className="subnav-item" href="#url">
                Item 3
              </a>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="subnav" aria-label="Respository">
          <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
          <a class="subnav-item" href="#url">Item 2</a>
          <a class="subnav-item" href="#url">Item 3</a>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can have subnav-search in the subnav bar." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="subnav">
              <nav className="subnav-links" aria-label="Repository">
                <a className="subnav-item" href="#url" aria-current="page">
                  Item 1
                </a>
                <a className="subnav-item" href="#url">
                  Item 2
                </a>
                <a className="subnav-item" href="#url">
                  Item 3
                </a>
              </nav>
              <div className="subnav-search float-left">
                <input
                  type="search"
                  name="name"
                  className="form-control subnav-search-input"
                  value=""
                  aria-label="Search site"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="octicon octicon-search subnav-search-icon"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="subnav">
          <nav class="subnav-links" aria-label="Repository">
            <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
            <a class="subnav-item" href="#url">Item 2</a>
            <a class="subnav-item" href="#url">Item 3</a>
          </nav>
          <div class="subnav-search float-left">
            <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
            <!-- <%= octicon "search", :class = "subnav-search-icon" %> -->
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="octicon octicon-search subnav-search-icon"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              />
            </svg>
          </div>
        </div>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can also use a subnav-search-context to display search help in a select menu." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="subnav">
              <nav className="subnav-links">
                <a className="subnav-item" href="#url" aria-current="page">
                  Item 1
                </a>
                <a className="subnav-item" href="#url">
                  Item 2
                </a>
                <a className="subnav-item" href="#url">
                  Item 3
                </a>
              </nav>

              <div className="float-left ml-3 select-menu js-menu-container js-select-menu subnav-search-context">
                <button
                  type="button"
                  name="button"
                  className="btn select-menu-button js-menu-target"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Filters
                </button>
                <div
                  className="select-menu-modal-holder js-menu-content js-navigation-container"
                  aria-hidden="true"
                >
                  <div className="select-menu-modal">
                    <div className="select-menu-list">
                      <a
                        href="#url"
                        className="select-menu-item js-navigation-item"
                      >
                        <div className="select-menu-item-text">
                          Search filter 1
                        </div>
                      </a>
                      <a
                        href="#url"
                        className="select-menu-item js-navigation-item"
                      >
                        <div className="select-menu-item-text">
                          Search filter 2
                        </div>
                      </a>
                      <a
                        href="#url"
                        className="select-menu-item js-navigation-item"
                      >
                        <div className="select-menu-item-text">
                          Search filter 3
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subnav-search float-left">
                <input
                  type="search"
                  name="name"
                  className="form-control subnav-search-input"
                  value=""
                  aria-label="Search site"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="octicon octicon-search subnav-search-icon"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="subnav">
          <nav class="subnav-links">
            <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
            <a class="subnav-item" href="#url">Item 2</a>
            <a class="subnav-item" href="#url">Item 3</a>
          </nav>

          <div class="float-left ml-3 select-menu js-menu-container js-select-menu subnav-search-context">
            <button
              type="button"
              name="button"
              class="btn select-menu-button js-menu-target"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Filters
            </button>
            <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
              <div class="select-menu-modal">
                <div class="select-menu-list">
                  <a href="#url" class="select-menu-item js-navigation-item">
                    <div class="select-menu-item-text">
                      Search filter 1
                    </div>
                  </a>
                  <a href="#url" class="select-menu-item js-navigation-item">
                    <div class="select-menu-item-text">
                      Search filter 2
                    </div>
                  </a>
                  <a href="#url" class="select-menu-item js-navigation-item">
                    <div class="select-menu-item-text">
                      Search filter 3
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="subnav-search float-left">
            <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
            <!-- <%= octicon "search", :class = "subnav-search-icon" %> -->
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="octicon octicon-search subnav-search-icon"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              />
            </svg>
          </div>
        </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SubNavigation;
