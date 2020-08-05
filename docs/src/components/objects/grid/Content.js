import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#float-based-grid">Float based grid</a>
            <ul className="ml-4">
              <li>
                <a href="#reversed-grid">Reversed grid</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#nesting">Nesting</a>
          </li>
          <li>
            <a href="#centering-a-column">Centering a column</a>
          </li>
          <li>
            <a href="#column-widths">Column widths</a>
          </li>
          <li>
            <a href="#offset-columns">Offset columns</a>
          </li>
          <li>
            <a href="#gutters">Gutters</a>
          </li>
          <li>
            <a href="#inline-block-grids">Inline-block grids</a>
          </li>
          <li>
            <a href="#display-table-grids">Display table grids</a>
          </li>
          <li>
            <a href="#flexbox-grids">Flexbox grids</a>
          </li>
          <li>
            <a href="#responsive-grids">Responsive grids</a>
            <ul className="ml-4">
              <li>
                <a href="#breakpoints">Breakpoints</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#containers">Containers</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
