import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function TypographicStyle() {
  return (
    <React.Fragment>
      <Heading heading="Typographic styles" id="typographic-styles" />
      <Paragraph paragraph="Change the font weight, styles, and alignment with these utilities." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p className="text-normal">Normal</p>
            <p className="text-italic">Italic</p>
            <p className="text-bold">Bold</p>
            <p className="text-uppercase">Uppercase</p>
            <p className="no-wrap">No wrap</p>
            <p className="ws-normal">Normal whitespace</p>
            <p className="text-underline">Text underline</p>
            <p className="no-underline">No underline</p>
            <p className="text-emphasized">Emphasized</p>
            <p className="text-small">Small</p>
            <p className="lead">
              Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef
              corned beef ground round prosciutto hamburger porchetta sausage
              alcatra tail.
            </p>
            <p className="text-mono">Monospace</p>
            <p className="user-select-none">User Select None</p>
          </div>
        ]}
        codeline={[
          `
          <p class="text-normal">Normal</p>
          <p class="text-italic">Italic</p>
          <p class="text-bold">Bold</p>
          <p class="text-uppercase">Uppercase</p>
          <p class="no-wrap">No wrap</p>
          <p class="ws-normal">Normal whitespace</p>
          <p class="text-underline">Text underline</p>
          <p class="no-underline">No underline</p>
          <p class="text-emphasized">Emphasized</p>
          <p class="text-small">Small</p>
          <p class="lead">Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.</p>
          <p class="text-mono">Monospace</p>
          <p class="user-select-none">User Select None</p>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TypographicStyle;
