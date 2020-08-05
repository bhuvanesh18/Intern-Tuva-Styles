import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#basic-examples">Basic examples</a>
          </li>
          <li>
            <a href="#options">Options</a>
            <ul className="ml-6">
              <li>
                <a href="#alignment">Alignment</a>
              </li>
              <li>
                <a href="#dividers">Dividers</a>
              </li>
              <li>
                <a href="#headers">Headers</a>
              </li>
              <li>
                <a href="#dark">Dark</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
