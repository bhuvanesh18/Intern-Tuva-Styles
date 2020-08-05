import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function FormContrast() {
  return (
    <React.Fragment>
      <Heading heading="Form contrast" id="form-contrast" />
      <Paragraph paragraph="Textual form controls have a white background by default. You can change this to a light gray with .input-contrast." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Default input"
                aria-label="Default input"
              />
              <input
                className="form-control input-contrast"
                type="text"
                placeholder="Input with contrast"
                aria-label="Input with contrast"
              />
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <input class="form-control" type="text" placeholder="Default input" aria-label="Default input" />
          <input
            class="form-control input-contrast"
            type="text"
            placeholder="Input with contrast"
            aria-label="Input with contrast"
          />
        </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FormContrast;
