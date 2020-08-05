import React from "react";
import { Paragraph, CodeBlocks, SubHeading } from "./../../mini_components";

function Options() {
  return (
    <React.Fragment>
      <SubHeading subheading="Alignment" id="alignment" />
      <Paragraph paragraph="Align the direction of dropdown menus and their arrows with modifier classes." />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginTop: 120 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                .dropdown-ne
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-ne">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-top: 100px">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              .dropdown-ne
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-ne">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginBottom: 100 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                .dropdown-e
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-e">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 100px">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              .dropdown-e
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-e">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginBottom: 120 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                .dropdown-se
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-se">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 100px">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              .dropdown-se
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-se">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ marginBottom: 120 + "px" }}
            className="d-flex flex-justify-center"
          >
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                .dropdown-s
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-s">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 100px" class="d-flex flex-justify-center">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              .dropdown-s
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-s">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ marginBottom: 100 + "px" }}
            className="d-flex flex-justify-end"
          >
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                .dropdown-sw
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-sw">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 100px" class="d-flex flex-justify-end">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              .dropdown-sw
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-sw">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div
            style={{ marginBottom: 100 + "px" }}
            className="d-flex flex-justify-end"
          >
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                .dropdown-w
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-w">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 100px" class="d-flex flex-justify-end">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              .dropdown-w
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-w">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Options;
