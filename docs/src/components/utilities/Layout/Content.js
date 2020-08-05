import React from "react";

function Content() {
  return (
    <React.Fragment>
      <section className="mt-6 pt-6 pl-6">
        <ul>
          <li className="mt-1">
            <a href="#display">Display</a>
            <ul className="ml-6 mt-1">
              <li className="mt-1">
                <a href="#the-html-hidden-attribute">
                  The HTML hidden attribute
                </a>
              </li>
              <li className="mt-1">
                <a href="#display-table-wrapping-issues">
                  display:table wrapping issues
                </a>
              </li>
              <li className="mt-1">
                <a href="#responsive-display">Responsive display</a>
              </li>
              <li className="mt-1">
                <a href="#responsive-hide">Responsive hide</a>
              </li>
              <li className="mt-1">
                <a href="#text-direction">Text direction</a>
              </li>
            </ul>
          </li>
          <li className="mt-1">
            <a href="#visibility">Visibility</a>
          </li>
          <li className="mt-1">
            <a href="#overflow">Overflow</a>
          </li>
          <li className="mt-1">
            <a href="#floats">Floats</a>
            <ul className="ml-6 mt-1">
              <li className="mt-1">
                <a href="#responsive-floats">Responsive floats</a>
              </li>
            </ul>
          </li>
          <li className="mt-1">
            <a href="#alignment">Alignment</a>
          </li>
          <li className="mt-1">
            <a href="#width-and-height">Width and height</a>
          </li>
          <li className="mt-1">
            <a href="#position">Position</a>
            <ul className="ml-6 mt-1">
              <li className="mt-1">
                <a href="#sticky">Sticky</a>
                <ul className="ml-6 mt-1">
                  <li>
                    <a href="#top">Top</a>
                  </li>
                  <li>
                    <a href="#bottom">Bottom</a>
                  </li>
                  <li>
                    <a href="#left-and-right">Left and right</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#responsive-position">Responsive position</a>
              </li>
              <li className="mt-1">
                <a href="#screen-reader-only">Screen reader only</a>
              </li>
            </ul>
          </li>
          <li className="mt-1">
            <a href="#the-media-object">The media object</a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Content;
