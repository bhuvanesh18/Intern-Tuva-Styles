import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function LinkButton() {
  return (
    <React.Fragment>
      <Heading heading="Link button" id="link-button" />
      <Paragraph paragraph="Create a button that looks like a link with .btn-link. Rather than using an <a> to trigger JS, this style on a <button> should be used for better accessibility." />
      <Paragraph paragraph="The .btn-link class is not designed to be used with .btn; the overlapping styles are not compatible." />
      <CodeBlocks
        htmlcoderender={[
          <button className="btn-link" type="button">
            Link button
          </button>
        ]}
        codeline={[
          `
          <button class="btn-link" type="button">Link button</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default LinkButton;
