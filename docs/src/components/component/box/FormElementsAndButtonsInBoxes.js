import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";
import { Link } from "react-router-dom";

function FormElementsAndButtonsInBoxes() {
  return (
    <React.Fragment>
      <Heading
        heading="Form elements and buttons in boxes"
        id="form-elements-and-buttons-in-boxes"
      />
      <Paragraph paragraph="To achieve different layouts when adding buttons or form elements to boxes we suggest you use utilities to achieve the layout you want. Here's some common examples:" />
      <p>
        Use <Link to="/utilities/flexbox">flexbox utilities</Link> to center
        align items, and avoid using floats by using flex-auto to have the text
        fill the remaining space so that the button rests on the far right.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="Box Box--condensed">
            <div className="Box-header d-flex flex-items-center">
              <h3 className="Box-title overflow-hidden flex-auto">Box title</h3>
              <button className="btn btn-primary btn-sm">Button</button>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box Box--condensed">
          <div class="Box-header d-flex flex-items-center">
            <h3 class="Box-title overflow-hidden flex-auto">
              Box title
            </h3>
            <button class="btn btn-primary btn-sm">
              Button
            </button>
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="A similar approach can be used for buttons with multiple lines of text within a row." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-row d-flex flex-items-center">
              <div className="flex-auto">
                <strong>Row title</strong>
                <div className="text-small text-gray-light">Description</div>
              </div>
              <button type="button" className="btn btn-primary" name="button">
                View
              </button>
            </div>
            <div className="Box-row d-flex flex-items-center">
              <div className="flex-auto">
                <strong>Row title</strong>
                <div className="text-small text-gray-light">Description</div>
              </div>
              <button type="button" className="btn btn-primary" name="button">
                View
              </button>
            </div>
            <div className="Box-row d-flex flex-items-center">
              <div className="flex-auto">
                <strong>Row title</strong>
                <div className="text-small text-gray-light">Description</div>
              </div>
              <button type="button" className="btn btn-primary" name="button">
                View
              </button>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-row d-flex flex-items-center">
            <div class="flex-auto">
              <strong>Row title</strong>
              <div class="text-small text-gray-light">
                Description
              </div>
            </div>
            <button type="button" class="btn btn-primary" name="button">View</button>
          </div>
          <div class="Box-row d-flex flex-items-center">
            <div class="flex-auto">
              <strong>Row title</strong>
              <div class="text-small text-gray-light">
                Description
              </div>
            </div>
            <button type="button" class="btn btn-primary" name="button">View</button>
          </div>
          <div class="Box-row d-flex flex-items-center">
            <div class="flex-auto">
              <strong>Row title</strong>
              <div class="text-small text-gray-light">
                Description
              </div>
            </div>
            <button type="button" class="btn btn-primary" name="button">View</button>
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Using flexbox along with form, button, and link styles, you can create more complex box headers for things like bulk actions and sorting." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header d-flex flex-items-center">
              <form className="flex-auto">
                <label>
                  <input className="mr-1" type="checkbox" />
                  Check it
                </label>
              </form>
              <button className="btn-link select-menu-button muted-link">
                Select menu
              </button>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header d-flex flex-items-center">
            <form class="flex-auto">
              <label>
                <input class="mr-1" type="checkbox" />
                Check it
              </label>
            </form>
            <button class="btn-link select-menu-button muted-link">
              Select menu
            </button>
          </div>
          <div class="Box-body">
            Box body
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can put forms in boxes. Often form submission buttons are aligned to the bottom right of the form which you can do with text-right instead of using floats." />
      <CodeBlocks
        htmlcoderender={[
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">Example form title</h3>
            </div>
            <form>
              <div className="Box-body">
                <dl className="form-group">
                  <dt>
                    <label>Example label</label>
                  </dt>
                  <dd>
                    <input className="form-control" type="text" />
                  </dd>
                </dl>
                <div className="form-checkbox">
                  <label>
                    <input type="checkbox" checked="checked" />
                    Yes please
                  </label>
                </div>
              </div>
              <div className="Box-footer text-right">
                <button className="btn btn-secondary mr-1">Cancel</button>
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header">
            <h3 class="Box-title">
              Example form title
            </h3>
          </div>
          <form>
            <div class="Box-body">
              <dl class="form-group">
                <dt><label>Example label</label></dt>
                <dd><input class="form-control" type="text" /></dd>
              </dl>
              <div class="form-checkbox">
                <label>
                  <input type="checkbox" checked="checked" />
                  Yes please
                </label>
              </div>
            </div>
            <div class="Box-footer text-right">
              <button class="btn btn-secondary mr-1">
                Cancel
              </button>
              <button class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>`
        ]}
        lang="html"
      />
      <p>
        When a box is all by itself centered on a page you can use{" "}
        <Link to="/objects/grid"> column widths </Link> to control the width of
        the box. If needed, break the mold a little and use{" "}
        <Link to="/utilities/typography"> typography utilities </Link> instead
        of the built in box title styles.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="Box Box--spacious col-6 mx-auto text-center">
            <form>
              <div className="Box-body">
                <h3 className="f1-light">Example form</h3>
                <dl className="form-group mb-4">
                  <dt>
                    <label>Example label</label>
                  </dt>
                  <dd>
                    <input className="form-control" type="text" />
                  </dd>
                </dl>
                <button className="btn btn-primary btn-block">Submit</button>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <div class="Box Box--spacious col-6 mx-auto text-center">
          <form>
            <div class="Box-body">
              <h3 class="f1-light">
                Example form
              </h3>
              <dl class="form-group mb-4">
                <dt><label>Example label</label></dt>
                <dd><input class="form-control" type="text" /></dd>
              </dl>
              <button class="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FormElementsAndButtonsInBoxes;
