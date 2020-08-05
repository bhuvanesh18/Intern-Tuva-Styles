import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Default() {
  return (
    <React.Fragment>
      <Heading heading="Default" id="default" />
      <Paragraph paragraph="Flash messages start off looking decently neutral—they're just light blue rounded rectangles." />
      <CodeBlocks
        htmlcoderender={[<div className="flash">Flash message goes here.</div>]}
        codeline={[
          `
          <div class="flash">
            Flash message goes here.
          </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can put multiple paragraphs of text in a flash message—the last paragraph's bottom margin will be automatically override." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash">
            <p>
              This is a longer flash message in it's own paragraph. It ends up
              looking something like this. If we keep adding more text, it'll
              eventually wrap to a new line.
            </p>
            <p>And this is another paragraph.</p>
          </div>
        ]}
        codeline={[
          `
          <div class="flash">
          <p>
            This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more
            text, it'll eventually wrap to a new line.
          </p>
          <p>And this is another paragraph.</p>
          </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Should the need arise, you can quickly space out your flash message from surrounding content with a .flash-messages wrapper. Note the extra top and bottom margin in the example below." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash-messages">
            <div className="flash">Flash message goes here.</div>
          </div>
        ]}
        codeline={[
          `
          <div class="flash-messages">
          <div class="flash">
            Flash message goes here.
          </div>
          </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Default;
