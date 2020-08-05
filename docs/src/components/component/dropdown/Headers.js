import React from "react";
import { Heading, CodeBlocks } from "./../../mini_components";

function Headers() {
  return (
    <React.Fragment>
      <Heading heading="Headers" id="headers" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginBottom: 140 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                Dropdown
                <div className="dropdown-caret"></div>
              </summary>

              <div className="dropdown-menu dropdown-menu-se">
                <div className="dropdown-header s2">Dropdown header</div>
                <ul>
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
              </div>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 140px">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              Dropdown
              <div class="dropdown-caret"></div>
            </summary>

            <div class="dropdown-menu dropdown-menu-se">
              <div class="dropdown-header s2">
                Dropdown header
              </div>
              <ul>
                <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
                <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
                <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              </ul>
            </div>
          </details>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Headers;
