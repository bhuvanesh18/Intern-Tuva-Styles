import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function FormAction() {
  return (
    <React.Fragment>
      <Heading heading="Form action" id="form-actions" />
      <Paragraph paragraph="Align buttons to the right—via float: right on the buttons—in forms with .form-actions. The floats are automatically cleared for you." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
              <button type="button" className="btn">
                Cancel
              </button>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn">Cancel</button>
        </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FormAction;
