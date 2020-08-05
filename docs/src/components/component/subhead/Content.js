import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#plain-subhead">Plain subhead</a>
          </li>
          <li>
            <a href="#spacious-subhead">Spacious subhead</a>
          </li>
          <li>
            <a href="#subhead-with-description">Subhead with description</a>
          </li>
          <li>
            <a href="#subhead-with-button-and-link">
              Subhead with button and link
            </a>
          </li>
          <li>
            <a href="#subhead-with-actions-and-description">
              Subhead with actions and description
            </a>
          </li>
          <li>
            <a href="#danger-zone">Danger zone</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
