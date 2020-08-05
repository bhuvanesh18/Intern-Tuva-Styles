import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#kitchen-sink">Kitchen sink</a>
          </li>
          <li>
            <a href="#example-form">Example form</a>
          </li>
          <li>
            <a href="#form-contrast">Form contrast</a>
          </li>
          <li>
            <a href="#sizing">Sizing</a>
            <ul className="ml-4">
              <li>
                <a href="#small">Small</a>
              </li>
              <li>
                <a href="#large">Large</a>
              </li>
              <li>
                <a href="#block">Block</a>
              </li>
              <li>
                <a href="#dark">Dark</a>
              </li>
              <li>
                <a href="#hide-webkits-contact-info-autofill-icon">
                  Hide webkit's contact info autofill icon
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#selects">Selects</a>
            <ul className="ml-4">
              <li>
                <a href="#small-1">Small</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#form-groups">Form groups</a>
          </li>
          <li>
            <a href="#form-group-validation">Form group validation</a>
          </li>
          <li>
            <a href="#checkboxes-and-radios">Checkboxes and radios</a>
            <ul className="ml-4">
              <li>
                <a href="#show-hide-content-based-on-a-checkbox-or-radio-button-state">
                  Show / hide content based on a checkbox or radio button state
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#radio-group">Radio group</a>
          </li>
          <li>
            <a href="#input-group">Input group</a>
          </li>
          <li>
            <a href="#form-actions">Form actions</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
