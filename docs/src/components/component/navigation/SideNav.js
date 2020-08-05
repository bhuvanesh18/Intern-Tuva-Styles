import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function SideNav() {
  return (
    <React.Fragment>
      <Heading heading="Side Nav" id="side-nav" />
      <Paragraph paragraph="The Side Nav is a vertical list of navigational links, typically used on the left side of a page. For maximum flexibility, Side Nav elements have no default width or positioning." />
      <p>
        We suggest using <a href="/objects/grid">column grid</a> classes or an
        inline width style for sizing, and{" "}
        <a href="/utilities/flexbox">flexbox utilities</a> for positioning
        alongside content.
      </p>
      <ul className="ml-4">
        <li>
          You can use a border if the parent element doesn't have it already.
        </li>
        <li>
          Add aria-current="page" to show a link as selected. Selected button
          elements in tab-like UIs should instead have aria-selected="true".
        </li>
      </ul>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="SideNav border" style={{ maxWidth: 360 + "px" }}>
              <a className="SideNav-item" href="#url">
                Account
              </a>
              <a className="SideNav-item" href="#url" aria-current="page">
                Profile
              </a>
              <a className="SideNav-item" href="#url">
                Emails
              </a>
              <a className="SideNav-item" href="#url">
                Notifications
              </a>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="SideNav border" style="max-width: 360px">
          <a class="SideNav-item" href="#url">Account</a>
          <a class="SideNav-item" href="#url" aria-current="page">Profile</a>
          <a class="SideNav-item" href="#url">Emails</a>
          <a class="SideNav-item" href="#url">Notifications</a>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Different kind of content can be added inside a Side Nav item. Use utility classes to further style them if needed." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="SideNav border" style={{ maxWidth: 360 + "px" }}>
              <a className="SideNav-item" href="#url">
                Text only
              </a>
              <a className="SideNav-item" href="#url">
                <img
                  className="avatar avatar-small mr-2"
                  src="https://avatars.githubusercontent.com/hubot?s=40"
                  alt="hubot"
                  height="20"
                  width="20"
                />
                With an avatar
              </a>
              <a className="SideNav-item" href="#url">
                <svg
                  version="1.1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="octicon octicon-octoface mr-2"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                  />
                </svg>
                With an icon
              </a>
              <a
                className="SideNav-item d-flex flex-items-center flex-justify-between"
                href="#url"
              >
                With a status icon
                <svg
                  version="1.1"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  className="octicon octicon-primitive-dot color-red-5 ml-2 float-right"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
                  />
                </svg>
              </a>
              <a
                className="SideNav-item d-flex flex-items-center flex-justify-between"
                href="#url"
              >
                With a label{" "}
                <span className="Label bg-blue" title="Label: label">
                  label
                </span>
              </a>
              <a
                className="SideNav-item d-flex flex-items-center flex-justify-between"
                href="#url"
              >
                With a counter{" "}
                <span className="Counter bg-gray-2 ml-1">16</span>
              </a>
              <a className="SideNav-item" href="#url">
                <h5>With a heading</h5>
                <span>and some longer description</span>
              </a>
            </nav>
          </div>
        ]}
        codeline={[
          `
          <nav class="SideNav border" style="max-width: 360px">
          <a class="SideNav-item" href="#url">
            Text only
          </a>
          <a class="SideNav-item" href="#url">
            <img
              class="avatar avatar-small mr-2"
              src="https://avatars.githubusercontent.com/hubot?s=40"
              alt="hubot"
              height="20"
              width="20"
            />
            With an avatar
          </a>
          <a class="SideNav-item" href="#url">
            <!-- <%= octicon "octoface", class: "mr-2" %> -->
            <svg
              version="1.1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="octicon octicon-octoface mr-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
              />
            </svg>
            With an icon
          </a>
          <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
            With a status icon
            <!-- <%= octicon "primitive-dot", class: "color-green-5 ml-2 float-right" %> -->
            <svg
              version="1.1"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              class="octicon octicon-primitive-dot color-red-5 ml-2 float-right"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
            </svg>
          </a>
          <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
            With a label <span class="Label bg-blue" title="Label: label">label</span>
          </a>
          <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
            With a counter <span class="Counter bg-gray-2 ml-1">16</span>
          </a>
          <a class="SideNav-item" href="#url">
            <h5>With a heading</h5>
            <span>and some longer description</span>
          </a>
        </nav>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="The .SideNav-subItem is an alternative, more lightweight version without borders and more condensed. It can be used stand-alone." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <aside
              className="bg-gray-light border p-3"
              style={{ maxWidth: 360 + "px" }}
            >
              <h5 className="text-gray mb-2 pb-1 border-bottom">Menu</h5>
              <nav className="SideNav">
                <a className="SideNav-subItem" href="#url">
                  Account
                </a>
                <a className="SideNav-subItem" href="#url" aria-current="page">
                  Profile
                </a>
                <a className="SideNav-subItem" href="#url">
                  Emails
                </a>
                <a className="SideNav-subItem" href="#url">
                  Notifications
                </a>
              </nav>
            </aside>
          </div>
        ]}
        codeline={[
          `
        <aside class="bg-gray-light border p-3" style="max-width: 360px">
          <h5 class="text-gray mb-2 pb-1 border-bottom">Menu</h5>
          <nav class="SideNav">
            <a class="SideNav-subItem" href="#url">Account</a>
            <a class="SideNav-subItem" href="#url" aria-current="page">Profile</a>
            <a class="SideNav-subItem" href="#url">Emails</a>
            <a class="SideNav-subItem" href="#url">Notifications</a>
          </nav>
        </aside>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Or also appear nested, as a sub navigation. Use margin/padding utility classes to add indentation." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <nav className="SideNav border" style={{ maxWidth: 360 + "px" }}>
              <a className="SideNav-item" href="#url">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  className="octicon octicon-person mr-2"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
                  />
                </svg>
                <span>Account</span>
              </a>
              <a className="SideNav-item" href="#url" aria-current="page">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="octicon octicon-octoface mr-2"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                  />
                </svg>
                <span>Profile</span>
              </a>
              <nav className="SideNav bg-white border-top py-3 pl-6">
                <a className="SideNav-subItem" href="#url" aria-current="page">
                  Sub item 1
                </a>
                <a className="SideNav-subItem" href="#url">
                  Sub item 2
                </a>
                <a className="SideNav-subItem" href="#url">
                  Sub item 3
                </a>
              </nav>
              <a className="SideNav-item" href="#url">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  className="octicon octicon-mail mr-2"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                  />
                </svg>
                <span>Emails</span>
              </a>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <nav class="SideNav border" style="max-width: 360px">
          <a class="SideNav-item" href="#url">
            <!-- <%= octicon "person", class: "mr-2" %> -->
            <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-person mr-2" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
              />
            </svg>
            <span>Account</span>
          </a>
          <a class="SideNav-item" href="#url" aria-current="page">
            <!-- <%= octicon "octoface", class: "mr-2" %> -->
            <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-octoface mr-2" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
              />
            </svg>
            <span>Profile</span>
          </a>
          <nav class="SideNav bg-white border-top py-3 pl-6">
            <a class="SideNav-subItem" href="#url" aria-current="page">Sub item 1</a>
            <a class="SideNav-subItem" href="#url">Sub item 2</a>
            <a class="SideNav-subItem" href="#url">Sub item 3</a>
          </nav>
          <a class="SideNav-item" href="#url">
            <!-- <%= octicon "mail", class: "mr-2" %> -->
            <svg width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-mail mr-2" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
              />
            </svg>
            <span>Emails</span>
          </a>
        </nav>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default SideNav;
