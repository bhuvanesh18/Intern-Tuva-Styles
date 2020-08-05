import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function LinkColors() {
  return (
    <React.Fragment>
      <Heading heading="Link colors" id="link-colors" />
      <Paragraph paragraph="Base link styles turn links blue and apply an underline on hover. You can override the base link styles with text color utilities and the following link utilities. Bear in mind that link styles are easier for more people to see and interact with when the changes in styles do not rely on color alone." />
      <Paragraph paragraph="Use link-gray to turn the link color to $text-gray and remain hover on blue." />
      <CodeBlocks
        htmlcoderender={[
          <a className="link-gray" href="#url">
            link-gray
          </a>
        ]}
        codeline={[
          `
          <a class="link-gray" href="#url">link-gray</a>
          `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use link-gray-dark to turn the link color to $text-gray-dark and remain hover on blue." />
      <CodeBlocks
        htmlcoderender={[
          <a className="link-gray-dark" href="#url">
            link-gray-dark
          </a>
        ]}
        codeline={[
          `
          <a class="link-gray-dark" href="#url">link-gray-dark</a>
          `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .muted-link to turn the link light gray in color, and blue on hover or focus with no underline." />
      <CodeBlocks
        htmlcoderender={[
          <a className="muted-link" href="#url">
            muted-link
          </a>
        ]}
        codeline={[
          `
          <a class="muted-link" href="#url">muted-link</a>
          `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use link-hover-blue to make any text color used with links to turn blue on hover. This is useful when you want only part of a link to turn blue on hover." />
      <CodeBlocks
        htmlcoderender={[
          <a className="text-gray-dark no-underline" href="#url">
            A link with only part of it is{" "}
            <span class="link-hover-blue">blue on hover</span>.
          </a>
        ]}
        codeline={[
          `
        <a class="text-gray-dark no-underline" href="#url">
          A link with only part of it is <span class="link-hover-blue">blue on hover</span>.
        </a>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default LinkColors;
