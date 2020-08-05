import React from "react";
import {
  Heading,
  CodeBlocks,
  Paragraph,
  SubHeading
} from "./../../mini_components";

function CheckboxesAndRadios() {
  return (
    <React.Fragment>
      <Heading heading="Checkboxes and radios" id="checkboxes-and-radios" />
      <Paragraph paragraph="Utilities to spice up the alignment and styling of checkbox and radio controls." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <div className="form-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked="checked"
                    aria-describedby="help-text-for-checkbox"
                  />
                  Available for hire
                </label>
                <p className="note" id="help-text-for-checkbox">
                  This will do insanely <strong>awesome</strong> and{" "}
                  <strong>amazing</strong> things!
                </p>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <div class="form-checkbox">
            <label>
              <input type="checkbox" checked="checked" aria-describedby="help-text-for-checkbox" />
              Available for hire
            </label>
            <p class="note" id="help-text-for-checkbox">
              This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
            </p>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="You may also add emphasis to the label:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <div className="form-checkbox">
                <label>
                  <input type="checkbox" checked="checked" />
                  <em className="highlight">Available for hire</em>
                </label>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <div class="form-checkbox">
            <label>
              <input type="checkbox" checked="checked" />
              <em class="highlight">Available for hire</em>
            </label>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Show / hide content based on a checkbox or radio button state"
        id="show-hide-content-based-on-a-checkbox-or-radio-button-state"
      />
      <Paragraph paragraph='Content that is hidden by default should only be done so if it is non-essential for the context of the surrounding content. Be sure to use the aria-live="polite" attribute on the parent label for added content to be announced when displayed.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <div className="form-checkbox">
                <label>
                  <input type="radio" name="hireme" />
                  Not available for hire
                </label>
              </div>
              <div className="form-checkbox">
                <label aria-live="polite">
                  <input
                    type="radio"
                    className="form-checkbox-details-trigger"
                    name="hireme"
                  />
                  Available for hire
                  <span className="form-checkbox-details text-normal">
                    <span className="d-block mb-1">
                      Available hours per week
                    </span>
                    <input
                      type="text"
                      name=""
                      className="form-control input-contrast"
                      size="3"
                    />
                    <span className="text-small text-gray pl-2">
                      hours per week
                    </span>
                  </span>
                </label>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <div class="form-checkbox">
            <label>
              <input type="radio" name="hireme" />
              Not available for hire
            </label>
          </div>
          <div class="form-checkbox">
            <label aria-live="polite">
              <input type="radio" class="form-checkbox-details-trigger" name="hireme" />
              Available for hire
              <span class="form-checkbox-details text-normal">
                <span class="d-block mb-1">Available hours per week</span>
                <input type="text" name="" class="form-control input-contrast" size="3" />
                <span class="text-small text-gray pl-2">hours per week</span>
              </span>
            </label>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default CheckboxesAndRadios;
