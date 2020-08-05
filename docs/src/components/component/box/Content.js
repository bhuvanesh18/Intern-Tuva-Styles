import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li>
            <a href="#box">Box</a>
          </li>
          <li>
            <a href="#box-elements">Boxelements</a>
            <ul className="ml-4">
              <li>
                <a href="#box-row">Box row</a>
              </li>
              <li>
                <a href="#box-row-markup-structure">Box row markup structure</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#box-padding-density">Box padding density</a>
          </li>
          <li>
            <a href="#blue-box-theme">Blue box theme</a>
          </li>
          <li>
            <a href="#blue-box-header-theme">Blue box header theme</a>
          </li>
          <li>
            <a href="#box-danger-theme">Box danger theme</a>
          </li>
          <li>
            <a href="#row-themes">Row themes</a>
            <ul className="ml-4">
              <li>
                <a href="#box-row-unread">Box row unread</a>
              </li>
              <li>
                <a href="#box-row-link">Box row link</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#dashed-border">Dashed border</a>
          </li>
          <li>
            <a href="#boxes-with-flash-alert">Boxes with flash alerts</a>
          </li>
          <li>
            <a href="#boxes-with-icons">Boxes with icons</a>
          </li>
          <li>
            <a href="#box-headers-with-counters">Box headers with counters</a>
          </li>
          <li>
            <a href="#form-elements-and-buttons-in-boxes">
              Form elements and buttons in boxes
            </a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
