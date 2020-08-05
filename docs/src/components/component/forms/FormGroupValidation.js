import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function FormGroupValidation() {
  return (
    <React.Fragment>
      <Heading heading="Form group validation" id="form-group-validation" />
      <Paragraph paragraph="Convey success, errors and warnings for form groups. For github.com consider using the <auto-check> element to perform server-side validation on an input." />
      <Paragraph paragraph='If the input is valid, add the .successed class to the <div className="form-group"> element. Next add/update a success message to the .note element, as well as the .success class.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form className="pb-6">
              <div className="form-group successed">
                <div className="form-group-header">
                  <label for="username-input">Username</label>
                </div>
                <div className="form-group-body">
                  <input
                    className="form-control"
                    type="text"
                    value="monalisa"
                    id="username-input"
                    aria-describedby="username-input-validation"
                  />
                </div>
                <p className="note success" id="username-input-validation">
                  monalisa is available
                </p>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form class="pb-6">
          <div class="form-group successed">
            <div class="form-group-header">
              <label for="username-input">Username</label>
            </div>
            <div class="form-group-body">
              <input
                class="form-control"
                type="text"
                value="monalisa"
                id="username-input"
                aria-describedby="username-input-validation"
              />
            </div>
            <p class="note success" id="username-input-validation">monalisa is available</p>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph='If the input is not valid, add the .errored class to the <div class="form-group"> element. Next add/update an error message to the .note element, as well as the .error class.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form class="pb-6">
              <div className="form-group errored">
                <div className="form-group-header">
                  <label for="username-input">Username</label>
                </div>
                <div className="form-group-body">
                  <input
                    className="form-control"
                    type="text"
                    value="monalisa"
                    id="username-input"
                    aria-describedby="username-input-validation"
                  />
                </div>
                <p className="note error" id="username-input-validation">
                  monalisa is not available. monalisa-beep, monalisa-cyber, or
                  monalisa87 are available.
                </p>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form class="pb-6">
          <div class="form-group errored">
            <div class="form-group-header">
              <label for="username-input">Username</label>
            </div>
            <div class="form-group-body">
              <input
                class="form-control"
                type="text"
                value="monalisa"
                id="username-input"
                aria-describedby="username-input-validation"
              />
            </div>
            <p class="note error" id="username-input-validation">monalisa is not available. monalisa-beep, monalisa-cyber, or monalisa87 are available.</p>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph='If the input should show a warning, add the .warn class to the <div class="form-group"> element. Next add/update a warning message to the .note element, as well as the .warning class.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form className="pb-6">
              <div className="form-group warn">
                <div className="form-group-header">
                  <label for="username-input">Username</label>
                </div>
                <div className="form-group-body">
                  <input
                    className="form-control"
                    type="text"
                    value="monalisa-monalisa-monalisa-monalisa-"
                    id="username-input"
                    aria-describedby="username-input-validation"
                  />
                </div>
                <p className="note warning" id="username-input-validation">
                  36 of maximum 39 characters entered.
                </p>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form class="pb-6">
          <div class="form-group warn">
            <div class="form-group-header">
              <label for="username-input">Username</label>
            </div>
            <div class="form-group-body">
              <input
                class="form-control"
                type="text"
                value="monalisa-monalisa-monalisa-monalisa-"
                id="username-input"
                aria-describedby="username-input-validation"
              />
            </div>
            <p class="note warning" id="username-input-validation">36 of maximum 39 characters entered.</p>
          </div>
          </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FormGroupValidation;
