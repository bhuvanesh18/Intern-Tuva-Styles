import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading
} from "./../../mini_components";

function CircleBadge() {
  return (
    <React.Fragment>
      <Heading heading="Circle Badge" id="circle-badge" />
      <Paragraph paragraph=".CircleBadge allows for the display of badge-like icons or logos. They are used mostly with Octicons or partner integration icons." />
      <Paragraph paragraph='.CircleBadge should have an aria-label, title (for a link), or an alt (for child img elements) attribute specified if there is no text-based alternative to describe it. If there is a text-based alternative or the icon has no semantic value, aria-hidden="true" or an empty alt attribute may be used.' />
      <SubHeading subheading="Small" id="small" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <a
              className="CircleBadge CircleBadge--small float-left mr-2"
              href="#small"
              title="Travis CI"
            >
              <img
                src="https://github.com/travis-ci.png"
                className="CircleBadge-icon"
                alt=""
              />
            </a>
            <a
              className="CircleBadge CircleBadge--small bg-yellow"
              title="Zap this!"
              href="#small"
            >
              <svg
                className="CircleBadge-icon text-white octicon octicon-zap"
                viewBox="0 0 10 16"
                version="1.1"
                width="10"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 7H6l3-7-9 9h4l-3 7 9-9z"
                ></path>
              </svg>
            </a>
          </div>
        ]}
        codeline={[
          `
        <a class="CircleBadge CircleBadge--small float-left mr-2" href="#small" title="Travis CI">
          <img src="https://github.com/travis-ci.png"  class="CircleBadge-icon" alt=""/>
        </a>
        <a class="CircleBadge CircleBadge--small bg-yellow" title="Zap this!" href="#small">
          <svg class="CircleBadge-icon text-white octicon octicon-zap" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"></path></svg>
        </a>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Medium" id="medium" />
      <CodeBlocks
        htmlcoderender={[
          <div className="CircleBadge CircleBadge--medium bg-gray-dark">
            <img
              src="https://github.com/travis-ci.png"
              alt="Travis CI"
              className="CircleBadge-icon"
            />
          </div>
        ]}
        codeline={[
          `
      <div class="CircleBadge CircleBadge--medium bg-gray-dark">
        <img src="https://github.com/travis-ci.png" alt="Travis CI" class="CircleBadge-icon" />
      </div>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Large" id="large" />
      <CodeBlocks
        htmlcoderender={[
          <div className="CircleBadge CircleBadge--large bg-gray-dark">
            <img
              src="https://github.com/travis-ci.png"
              alt="Travis CI"
              className="CircleBadge-icon"
            />
          </div>
        ]}
        codeline={[
          `
      <div class="CircleBadge CircleBadge--large bg-gray-dark">
        <img src="https://github.com/travis-ci.png" alt="Travis CI" class="CircleBadge-icon" />
      </div>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Dashed connection" id="dashed-connection" />
      <Paragraph paragraph="For specific cases where two badges or more need to be shown as related or connected (such as integrations or specific product workflows), a DashedConnection class was created. Use utility classes to ensure badges are spaced correctly." />
      <CodeBlocks
        htmlcoderender={[
          <div className="DashedConnection">
            <ul
              className="d-flex list-style-none flex-justify-between"
              aria-label="A sample GitHub workflow"
            >
              <li
                className="CircleBadge CircleBadge--small"
                aria-label="GitHub"
              >
                <svg
                  className="octicon octicon-mark-github width-full height-full"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </li>

              <li className="CircleBadge CircleBadge--small" aria-label="Slack">
                <img
                  src="https://github.com/slackhq.png"
                  alt=""
                  className="CircleBadge-icon"
                />
              </li>

              <li
                className="CircleBadge CircleBadge--small"
                aria-label="Travis CI"
              >
                <img
                  src="https://github.com/travis-ci.png"
                  alt=""
                  className="CircleBadge-icon"
                />
              </li>
            </ul>
          </div>
        ]}
        codeline={[
          `
        <div class="DashedConnection">
          <ul class="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
            <li class="CircleBadge CircleBadge--small" aria-label="GitHub">
              <svg class="octicon octicon-mark-github width-full height-full" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </li>

            <li class="CircleBadge CircleBadge--small" aria-label="Slack">
                <img src="https://github.com/slackhq.png"  alt="" class="CircleBadge-icon">
            </li>

            <li class="CircleBadge CircleBadge--small" aria-label="Travis CI">
                <img src="https://github.com/travis-ci.png"  alt="" class="CircleBadge-icon">
            </li>
          </ul>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default CircleBadge;
