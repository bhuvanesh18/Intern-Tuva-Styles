import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function WordBreak() {
  return (
    <React.Fragment>
      <Heading heading="Word-Break" id="word-break" />
      <Paragraph paragraph="There are two utilities for adjusting how lines and words of text break when they exceed the width of their containing element:" />
      <ol className="mt-2 ml-6">
        <li>
          break-word sets word-break: break-word and overflow-wrap: break-word,
          which will only break words if they would exceed the line length after
          wrapping.
        </li>
        <li>
          wb-break-all sets word-break: break-all, which will force a word to
          break regardless of whether it's shorter than the line length.
        </li>
      </ol>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p className="break-word p-2 bg-gray col-3 border-right">
              .break-word will only break long words that exceed the line
              length, such as supercalifragilisticexpialidocious. Long words
              like "exceedingly" will simply break to the next line.
            </p>
            <p className="wb-break-all p-2 bg-gray col-3 border-right">
              .wb-break-all will break any word that meets the end its line, and
              should be used sparingly. As you can see here, it's not
              particularly nice to read text that breaks in weird places.
            </p>
          </div>
        ]}
        codeline={[
          `
        <p class="break-word p-2 bg-gray col-3 border-right">.break-word will only break long words that exceed the line length, such as supercalifragilisticexpialidocious. Long words like "exceedingly" will simply break to the next line.</p>
        <p class="wb-break-all p-2 bg-gray col-3 border-right">.wb-break-all will break any word that meets the end its line, and should be used sparingly. As you can see here, it's not particularly nice to read text that breaks in weird places.</p>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default WordBreak;
