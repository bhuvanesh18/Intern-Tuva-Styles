import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Notes() {
  return (
    <React.Fragment>
      <Heading heading="Notes" id="notes" />
      <Paragraph paragraph="Popovers are used to bring attention to specific user interface elements, typically to suggest an action or to guide users through a new experience." />
      <Paragraph paragraph="A popover consist of:" />
      <ul className="ml-4">
        <li>
          The block element, .Popover, which simply positions its content
          absolutely atop other body content.
        </li>
        <li>
          The child element, .Popover-message, which contains the markup for the
          intended messaging and the visual "caret."
        </li>
      </ul>
      <Paragraph paragraph="In the examples below, Popover-message, in particular, uses a handful of utility classes to style it appropriately. And these are intended to demonstrate the default, go-to presentation for the popover's message. By default, the message's caret is centered on the top edge of the message." />
      <Paragraph paragraph="The Popover-message element also supports several modifiers, most of which position the caret differently:" />
      <ul className="ml-4">
        <li>
          <a href="#">.Popover-message--top</a> (default): Places the caret on
          the top edge of the message, horizontally centered.
        </li>
        <li>
          <a href="#bottom">.Popover-message--bottom</a> Places the caret on the
          bottom edge of the message, horizontally centered.
        </li>
        <li>
          <a href="#right">.Popover-message--right</a> Places the caret on the
          right edge of the message, vertically centered.
        </li>
        <li>
          <a href="#left">.Popover-message--left</a> Places the caret on the
          left edge of the message, vertically centered.
        </li>
      </ul>
      <Paragraph paragraph="Each of these modifiers also support a syntax for adjusting the positioning the caret to the right, left, top, or bottom of its respective edge. That syntax looks like:" />
      <ul className="ml-4">
        <li>
          <a href="#bottom-left">.Popover-message--bottom-left</a>
        </li>
        <li>
          <a href="#bottom-right">.Popover-message--bottom-right</a>
        </li>
        <li>
          <a href="#left-bottom">.Popover-message--left-bottom</a>
        </li>
        <li>
          <a href="#left-top">.Popover-message--left-top</a>
        </li>
        <li>
          <a href="#right-bottom">.Popover-message--right-bottom</a>
        </li>
        <li>
          <a href="#right-top">.Popover-message--right-top</a>
        </li>
        <li>
          <a href="#top-left">.Popover-message--top-left</a>
        </li>
        <li>
          <a href="#top-right">.Popover-message--top-right</a>
        </li>
      </ul>
      <b className="mt-2">Note:</b>
      <Paragraph paragraph="The samples below include optional markup, like:" />
      <ul className="ml-4">
        <li>
          An outermost container that establishes stacking context (e.g.
          position-relative).
        </li>
        <li>
          A choice piece of user interface (a button, in this case) to relate
          the popover to.
        </li>
        <li>
          Use of the Details and js-details family of class names, which
          interact with JavaScript to demonstrate dismissal of the popover by
          clicking the nested "Got it!" button.
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Notes;
