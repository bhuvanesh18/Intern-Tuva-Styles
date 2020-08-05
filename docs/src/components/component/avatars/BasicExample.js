import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading
} from "./../../mini_components";

function Default() {
  return (
    <React.Fragment>
      <Heading heading="Basic Example" id="basic-example" />
      <Paragraph paragraph="Add .avatar to any <img> element to make it an avatar. This resets some key styles for alignment, address a Firefox image placeholder bug, and rounds the corners." />
      <Paragraph paragraph="Be sure to set width and height attributes for maximum browser performance." />
      <CodeBlocks
        htmlcoderender={[
          <img
            className="avatar"
            alt="tuva-icon"
            src="https://tuvalabs.com/static/img/favicon.ico"
            width="72"
            height="72"
          />
        ]}
        codeline={[
          `
    <img class="avatar" alt="tuva-icon" src="https://tuvalabs.com/static/img/favicon.ico" width="72" height="72" />`
        ]}
        lang="html"
      />
      <SubHeading subheading="Small avatars" id="small-avatars" />
      <Paragraph paragraph="We occasionally use smaller avatars. Anything less than 48px wide should include the .avatar-small modifier class to reset the border-radius to a more appropriate level." />
      <CodeBlocks
        htmlcoderender={[
          <img
            className="avatar avatar-small"
            alt="tuva-icon"
            src="https://tuvalabs.com/static/img/favicon.ico"
            width="32"
            height="32"
          />
        ]}
        codeline={[
          `
    <img className="avatar avatar-small" alt="tuva-icon" src="https://tuvalabs.com/static/img/favicon.ico" width="32" height="32" />`
        ]}
        lang="html"
      />
      <SubHeading subheading="Parent-child avatars" id="parent-child-avatars" />
      <Paragraph paragraph="When you need a larger parent avatar, and a smaller child one, overlaid slightly, use the parent-child classes." />
      <CodeBlocks
        htmlcoderender={[
          <div className="avatar-parent-child d-inline-flex">
            <img
              className="avatar"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="48"
              height="48"
            />
            <img
              className="avatar avatar-child"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
              height="20"
            />
          </div>
        ]}
        codeline={[
          `
        <div class="avatar-parent-child d-inline-flex">
          <img class="avatar" alt="tuva-icon" src="https://tuvalabs.com/static/img/favicon.ico" width="48" height="48" />
          <img class="avatar avatar-child" alt="tuva-icon" src="https://tuvalabs.com/static/img/favicon.ico" width="20" height="20" />
        </div>`
        ]}
        lang="html"
      />
      <SubHeading subheading="Avatar stack" id="avatar-stack" />
      <Paragraph paragraph="Stacked avatars can be used to show multiple collaborators or participants when there is limited space available. When you hover over the stack, the avatars will reveal themselves." />
      <CodeBlocks
        htmlcoderender={[
          <div className="AvatarStack AvatarStack--three-plus">
            <div
              className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
              aria-label="You Hovered On This!!!"
            >
              <img
                class="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="AvatarStack AvatarStack--three-plus">
          <div
            class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
            aria-label="You Hovered On This!!!">
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Based on the number of avatars in the stack, add these modifier classes:" />
      <ul className="ml-4 my-2">
        <li>AvatarStack--two for 2 avatars.</li>
        <li>AvatarStack--three-plus for 3 or more avatars.</li>
      </ul>
      <Paragraph paragraph="If you have more than three avatars, add a div with the classes avatar avatar-more as the third avatar in the stack, as such:" />
      <CodeBlocks
        htmlcoderender={[
          <div className="AvatarStack AvatarStack--three-plus">
            <div
              className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
              aria-label="You Hovered On This!!!"
            >
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <div class="avatar avatar-more"></div>
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="AvatarStack AvatarStack--three-plus">
          <div
            class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
            aria-label="You Hovered On This!!!">
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <div class="avatar avatar-more"></div>
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can also link individual avatars. To do this shift the avatar class over to the anchor:" />
      <CodeBlocks
        htmlcoderender={[
          <div className="AvatarStack AvatarStack--two">
            <div
              className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
              aria-label="The is tuva-icon"
            >
              <a href="#url1" className="avatar">
                <img
                  height="20"
                  alt="tuva-icon"
                  src="https://tuvalabs.com/static/img/favicon.ico"
                  width="20"
                />
              </a>
              <a href="#url2" className="avatar">
                <img
                  height="20"
                  alt="tuva-icon"
                  src="https://tuvalabs.com/static/img/favicon.ico"
                  width="20"
                />
              </a>
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="AvatarStack AvatarStack--two">
          <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="The is tuva-icon">
            <a href="#url1" class="avatar">
              <img
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
            </a>
            <a href="#u2" class="avatar">
              <img
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
            </a>
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use AvatarStack--right to right-align the avatar stack. Remember to switch the alignment of tooltips when making this change." />
      <CodeBlocks
        htmlcoderender={[
          <div className="AvatarStack AvatarStack--three-plus AvatarStack--right">
            <div
              className="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1"
              aria-label="You Hovered this!!!"
            >
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="tuva-icon"
                src="https://tuvalabs.com/static/img/favicon.ico"
                width="20"
              />
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="AvatarStack AvatarStack--three-plus AvatarStack--right">
          <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="You Hovered this!!!">
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
            <img
              class="avatar"
              height="20"
              alt="tuva-icon"
              src="https://tuvalabs.com/static/img/favicon.ico"
              width="20"
            />
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Default;
