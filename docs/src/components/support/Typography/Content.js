import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#type-scale">Type Scale</a>
          </li>
          <li>
            <a href="#typography-variables">Typography variables</a>
            <ul className="ml-4">
              <li>
                <a href="#font-size-variables">Font size variables</a>
              </li>
              <li>
                <a href="#font-weight-variables">Font weight variables</a>
              </li>
              <li>
                <a href="#line-height-variables">Line height variables</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
