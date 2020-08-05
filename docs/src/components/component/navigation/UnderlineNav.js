import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function UnderlineNav() {
  return (
    <React.Fragment>
      <Heading heading="Underline Nav" id="underline-nav" />
      <Paragraph paragraph="Use .UnderlineNav to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page. This component comes with variations to accommodate icons, containers and other content." />
      <Paragraph paragraph="To add a selected state to an item, use:" />
      <ul className="ml-4">
        <li>role="tab" and aria-selected="true" if it's a button</li>
        <li>aria-current="page" if it's a link</li>
      </ul>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="UnderlineNav">
              <div className="UnderlineNav-body" role="tablist">
                <button
                  className="UnderlineNav-item"
                  role="tab"
                  type="button"
                  aria-selected="true"
                >
                  Item 1
                </button>
                <button className="UnderlineNav-item" role="tab" type="button">
                  Item 2
                </button>
                <button className="UnderlineNav-item" role="tab" type="button">
                  Item 3
                </button>
                <button className="UnderlineNav-item" role="tab" type="button">
                  Item 4
                </button>
              </div>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="UnderlineNav">
          <div class="UnderlineNav-body" role="tablist">
            <button class="UnderlineNav-item" role="tab" type="button" aria-selected="true">Item 1</button>
            <button class="UnderlineNav-item" role="tab" type="button">Item 2</button>
            <button class="UnderlineNav-item" role="tab" type="button">Item 3</button>
            <button class="UnderlineNav-item" role="tab" type="button">Item 4</button>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .UnderlineNav-actions to place another element, such as a button, to the opposite side of the navigation items." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="UnderlineNav" aria-label="Foo bar">
              <div className="UnderlineNav-body">
                <a
                  className="UnderlineNav-item"
                  href="#url"
                  aria-current="page"
                >
                  Item 1
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 2
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 3
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 4
                </a>
              </div>
              <div className="UnderlineNav-actions">
                <a className="btn">Button</a>
              </div>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="UnderlineNav" aria-label="Foo bar">
          <div class="UnderlineNav-body">
            <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
            <a class="UnderlineNav-item" href="#url">Item 2</a>
            <a class="UnderlineNav-item" href="#url">Item 3</a>
            <a class="UnderlineNav-item" href="#url">Item 4</a>
          </div>
          <div class="UnderlineNav-actions">
            <a class="btn">Button</a>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .UnderlineNav--right to right align the navigation." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="UnderlineNav UnderlineNav--right">
              <div className="UnderlineNav-body">
                <a
                  className="UnderlineNav-item"
                  href="#url"
                  aria-current="page"
                >
                  Item 1
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 2
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 3
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 4
                </a>
              </div>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="UnderlineNav UnderlineNav--right">
          <div class="UnderlineNav-body">
            <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
            <a class="UnderlineNav-item" href="#url">Item 2</a>
            <a class="UnderlineNav-item" href="#url">Item 3</a>
            <a class="UnderlineNav-item" href="#url">Item 4</a>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph=".UnderlineNav--right also works with when used with .UnderlineNav-actions." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav
              className="UnderlineNav UnderlineNav--right"
              aria-label="Foo bar"
            >
              <div className="UnderlineNav-actions">
                <a className="btn">Button</a>
              </div>
              <div className="UnderlineNav-body">
                <a
                  className="UnderlineNav-item"
                  href="#url"
                  aria-current="page"
                >
                  Item 1
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 2
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 3
                </a>
                <a className="UnderlineNav-item" href="#url">
                  Item 4
                </a>
              </div>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="UnderlineNav UnderlineNav--right" aria-label="Foo bar">
          <div class="UnderlineNav-actions">
            <a class="btn">Button</a>
          </div>
          <div class="UnderlineNav-body">
            <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
            <a class="UnderlineNav-item" href="#url">Item 2</a>
            <a class="UnderlineNav-item" href="#url">Item 3</a>
            <a class="UnderlineNav-item" href="#url">Item 4</a>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph=".Counters and .octicons can be used with navigation items. Use .UnderlineNav-octicon to add color and hover styles." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="UnderlineNav" aria-label="Foo bar">
              <div className="UnderlineNav-body">
                <a
                  className="UnderlineNav-item"
                  href="#url"
                  aria-current="page"
                >
                  <svg
                    className="UnderlineNav-octicon octicon octicon-tools"
                    version="1.1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                    />
                  </svg>
                  <span>Item 1</span>
                </a>
                <a className="UnderlineNav-item" href="#url">
                  <svg
                    className="UnderlineNav-octicon octicon octicon-tools"
                    version="1.1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                    />
                  </svg>
                  <span>Item 2</span>
                  <span className="Counter">10</span>
                </a>
                <a className="UnderlineNav-item" href="#url">
                  <svg
                    className="UnderlineNav-octicon octicon octicon-tools"
                    version="1.1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                    />
                  </svg>
                  <span>Item 3</span>
                </a>
                <a className="UnderlineNav-item" href="#url">
                  <svg
                    className="UnderlineNav-octicon octicon octicon-tools"
                    version="1.1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                    />
                  </svg>
                  <span>Item 4</span>
                </a>
              </div>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="UnderlineNav" aria-label="Foo bar">
          <div class="UnderlineNav-body">
            <a class="UnderlineNav-item" href="#url" aria-current="page">
              <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
              <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
              <span>Item 1</span>
            </a>
            <a class="UnderlineNav-item" href="#url">
              <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
              <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
              <span>Item 2</span>
              <span class="Counter">10</span>
            </a>
            <a class="UnderlineNav-item" href="#url">
              <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
              <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
              <span>Item 3</span>
            </a>
            <a class="UnderlineNav-item" href="#url">
              <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
              <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
              <span>Item 4</span>
            </a>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .UnderlineNav--full in combination with container styles and .UnderlineNav-container to make navigation fill the width of the container." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav
              className="UnderlineNav UnderlineNav--full"
              aria-label="Foo bar"
            >
              <div className="container-lg UnderlineNav-container">
                <div className="UnderlineNav-body">
                  <a
                    className="UnderlineNav-item"
                    href="#url"
                    aria-current="page"
                  >
                    Item 1
                  </a>
                  <a className="UnderlineNav-item" href="#url">
                    Item 2<span className="Counter">10</span>
                  </a>
                  <a className="UnderlineNav-item" href="#url">
                    Item 3
                  </a>
                  <a className="UnderlineNav-item" href="#url">
                    Item 4
                  </a>
                </div>
                <div className="UnderlineNav-actions">
                  <a className="btn">Button</a>
                </div>
              </div>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
          <div class="container-lg UnderlineNav-container">
            <div class="UnderlineNav-body">
              <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
              <a class="UnderlineNav-item" href="#url">Item 2<span class="Counter">10</span></a>
              <a class="UnderlineNav-item" href="#url">Item 3</a>
              <a class="UnderlineNav-item" href="#url">Item 4</a>
            </div>
            <div class="UnderlineNav-actions">
              <a class="btn">Button</a>
            </div>
          </div>
        </nav>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default UnderlineNav;
