import React from "react";
import { Heading, CodeBlocks } from "./../../mini_components";

function Dark() {
  return (
    <React.Fragment>
      <Heading heading="Dark" id="dark" />
      <CodeBlocks
        htmlcoderender={[
          <div className="bg-gray-dark p-3" style={{ minHeight: 260 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                Dropdown
                <div className="dropdown-caret"></div>
              </summary>

              <div className="dropdown-menu dropdown-menu-se dropdown-menu-dark">
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
                  <li className="dropdown-divider" role="none"></li>
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
        <div class="bg-gray-dark p-3" style="min-height: 240px;">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              Dropdown
              <div class="dropdown-caret"></div>
            </summary>

            <div class="dropdown-menu dropdown-menu-se dropdown-menu-dark">
              <div class="dropdown-header s2">
                Dropdown header
              </div>
              <ul>
                <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
                <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
                <li class="dropdown-divider" role="none"></li>
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

export default Dark;
