import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li className="mt-1">
            <a href="#shorthand">Shorthand</a>
          </li>
          <li className="mt-1">
            <a href="#uniform-padding">Uniform padding</a>
          </li>
          <li className="mt-1">
            <a href="#directional-padding">Directional padding</a>
          </li>
          <li className="mt-1">
            <a href="#responsive-padding">Responsive padding</a>
          </li>
          <li className="mt-1">
            <a href="#responsive-container-padding">
              Responsive container padding
            </a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
