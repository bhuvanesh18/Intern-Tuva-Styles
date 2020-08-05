import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";
import { Link } from "react-router-dom";

function BasicExamples() {
  return (
    <React.Fragment>
      <Heading heading="Basic examples" id="basic-examples" />
      <p>
        Dropdowns should be trigged by a &lt;button&gt;.
        <Link to="#alignment">
          {" "}
          Each dropdown menu requires a directional class
        </Link>
        , much like our tooltips.
      </p>
      <Paragraph paragraph="Using a button:" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginBottom: 100 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="btn" aria-haspopup="true">
                Dropdown
                <div className="dropdown-caret"></div>
              </summary>

              <ul className="dropdown-menu dropdown-menu-se">
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item 3
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
              Dropdown
              <div class="dropdown-caret"></div>
            </summary>

            <ul class="dropdown-menu dropdown-menu-se">
              <li><a class="dropdown-item" href="#url">Dropdown item 1</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item 2</a></li>
              <li><a class="dropdown-item" href="#url">Dropdown item 3</a></li>
            </ul>
          </details>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Using a button customized with additional utilities:" />
      <CodeBlocks
        htmlcoderender={[
          <div style={{ marginBottom: 100 + "px" }}>
            <details className="dropdown details-reset details-overlay d-inline-block">
              <summary className="text-gray p-2 d-inline" aria-haspopup="true">
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
              </ul>
            </details>
          </div>
        ]}
        codeline={[
          `
        <div style="margin-bottom: 100px">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary class="text-gray p-2 d-inline" aria-haspopup="true">
              Dropdown
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
    </React.Fragment>
  );
}

export default BasicExamples;
