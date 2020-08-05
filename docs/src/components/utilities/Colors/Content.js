import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#background-colors">Background colors</a>
            <ul className="ml-4">
              <li>
                <a href="#background-utilities">Background utilities</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#text-colors">Text colors</a>
            <ul className="ml-4">
              <li>
                <a href="#text-color-inheritance">Text color inheritance</a>
              </li>
              <li>
                <a href="#text-on-white-background">Text on white background</a>
              </li>
              <li>
                <a href="#text-on-colored-backgrounds">
                  Text on colored backgrounds
                </a>
              </li>
              <li>
                <a href="#text-color-utilities">Text color utilities</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#white-background">White background</a>
          </li>
          <li>
            <a href="#link-colors">Link colors</a>
          </li>
          <li>
            <a href="#border-colors">Border colors</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
