import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function KitchenSink() {
  return (
    <React.Fragment>
      <Heading heading="Kitchen sink" id="kitchen-sink" />
      <Paragraph paragraph="All our inputs and buttons side-by-side for easy testing of sizing and alignment with one another." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p>
              <button className="btn" type="button">
                Button
              </button>
              <button
                className="btn select-menu-button"
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Select menu
              </button>
              <input
                className="form-control"
                type="text"
                placeholder="Standard input"
                aria-label="Repository description"
              />
              <input
                className="form-control input-monospace"
                type="text"
                placeholder="Monospace input"
                aria-label="SHA"
              />
              <select className="form-select" aria-label="Important decision">
                <option>Select</option>
                <option value="option 2">Option 2</option>
              </select>
            </p>

            <p>
              <button className="btn btn-sm" type="button">
                Small button
              </button>
              <button
                className="btn btn-sm select-menu-button"
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Select menu
              </button>
              <input
                className="form-control input-sm"
                type="text"
                placeholder="Small input"
                aria-label="Repository description"
              />
              <select
                className="form-select select-sm"
                aria-label="Important decision"
              >
                <option>Select</option>
                <option value="option 1">Option 1</option>
              </select>
            </p>
          </div>
        ]}
        codeline={[
          `
        <p>
          <button class="btn" type="button">Button</button>
          <button class="btn select-menu-button" type="button" aria-expanded="false" aria-haspopup="true">
            Select menu
          </button>
          <input class="form-control" type="text" placeholder="Standard input" aria-label="Repository description" />
          <input class="form-control input-monospace" type="text" placeholder="Monospace input" aria-label="SHA" />
          <select class="form-select" aria-label="Important decision">
            <option>Select</option>
            <option value="option 2">Option 2</option>
          </select>
        </p>

        <p>
          <button class="btn btn-sm" type="button">Small button</button>
          <button class="btn btn-sm select-menu-button" type="button" aria-expanded="false" aria-haspopup="true">
            Select menu
          </button>
          <input class="form-control input-sm" type="text" placeholder="Small input" aria-label="Repository description" />
          <select class="form-select select-sm" aria-label="Important decision">
            <option>Select</option>
            <option value="option 1">Option 1</option>
          </select>
        </p>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default KitchenSink;
