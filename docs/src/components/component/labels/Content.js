import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#labels">Labels</a>
            <ul className="ml-4">
              <li>
                <a href="#label-themes">Label themes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#issue-labels">Issue labels</a>
          </li>
          <li>
            <a href="#states">States</a>
            <ul className="ml-4">
              <li>
                <a href="#state-themes">State themes</a>
              </li>
              <li>
                <a href="#small-states">Small states</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#counters">Counters</a>
          </li>
          <li>
            <a href="#diffstat">Diffstat</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
