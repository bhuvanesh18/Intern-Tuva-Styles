import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function OcticonButton() {
  return (
    <React.Fragment>
      <Heading heading="Octicon button" id="octicon-button" />
      <Paragraph paragraph="Icon-only buttons that turn blue on hover. Use .btn-octicon-danger to turn an icon red on hover." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button
              className="btn-octicon"
              type="button"
              aria-label="Desktop icon"
            >
              <svg
                className="octicon octicon-device-desktop"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"
                ></path>
              </svg>
            </button>

            <button
              className="btn-octicon"
              type="button"
              aria-label="Pencil icon"
            >
              <svg
                className="octicon octicon-pencil"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
                ></path>
              </svg>
            </button>

            <button
              className="btn-octicon btn-octicon-danger"
              type="button"
              aria-label="Trashcan icon"
            >
              <svg
                className="octicon octicon-trashcan"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
                ></path>
              </svg>
            </button>

            <button
              className="btn-octicon"
              type="button"
              aria-label="Trashcan icon"
            >
              <svg
                className="octicon octicon-kebab-horizontal"
                viewBox="0 0 13 16"
                version="1.1"
                width="13"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                ></path>
              </svg>
            </button>
          </div>
        ]}
        codeline={[
          `
        <button class="btn-octicon" type="button" aria-label="Desktop icon">
          <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </button>

        <button class="btn-octicon" type="button" aria-label="Pencil icon">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
        </button>

        <button class="btn-octicon btn-octicon-danger" type="button" aria-label="Trashcan icon">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
        </button>

        <button class="btn-octicon" type="button" aria-label="Trashcan icon">
          <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
        </button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default OcticonButton;
