import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#default-border">Default border</a>
          </li>
          <li>
            <a href="#border-colors">Border Colors</a>
            <ul className="ml-3">
              <li>
                <a href="#borders-with-alpha-transparency">
                  Borders with alpha transparency
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#border-style">Border style</a>
          </li>
          <li>
            <a href="#rounded-corners">Rounded corners</a>
          </li>
          <li>
            <a href="#responsive-borders">Responsive borders</a>
          </li>
          <li>
            <a href="#border-color-utilities">Border color utilities</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
