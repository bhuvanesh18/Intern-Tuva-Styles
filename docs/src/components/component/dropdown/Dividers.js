import React from "react";
import { Heading, CodeBlocks } from "./../../mini_components";

function Dividers() {
  return (
    <React.Fragment>
      <Heading heading="Dividers" id="dividers" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginBottom: 200 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                Dropdown
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
                <li className="dropdown-divider" role="separator"></li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Another item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    One more
                  </a>
                </li>
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 200px">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="btn" aria-haspopup="true">
              Dropdown
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-se">
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
              <li class="dropdown-divider" role="separator"></li>
              <li><a class="dropdown-item" href="#url">Another item</a></li>
              <li><a class="dropdown-item" href="#url">One more</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Dividers;
