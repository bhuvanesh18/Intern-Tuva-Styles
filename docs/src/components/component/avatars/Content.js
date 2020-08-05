import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#basic-example">Basic example</a>
            <ul className="ml-4">
              <li>
                <a href="#small-avatars">Small avatars</a>
              </li>
              <li>
                <a href="#parent-child-avatars">Parent child avatars</a>
              </li>
              <li>
                <a href="#avatar-stack">Avatar stack</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#circle-badge">Circle Badge</a>
            <ul className="ml-4">
              <li>
                <a href="#small">Small</a>
              </li>
              <li>
                <a href="#medium">Medium</a>
              </li>
              <li>
                <a href="#large">Large</a>
              </li>
              <li>
                <a href="#dashed-connection">Dashed connection</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
