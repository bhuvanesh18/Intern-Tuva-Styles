import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#default">Default</a>
          </li>
          <li>
            <a href="#medium">Medium</a>
          </li>
          <li>
            <a href="#large">Large</a>
          </li>
          <li>
            <a href="#extra-large">Extra Large</a>
          </li>
          <li>
            <a href="#remove-a-box-shadow">Remove a box shadow</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
