import React from "react";
import {
  Heading,
  CodeBlocks,
  Paragraph,
  SubHeading
} from "./../../mini_components";

function Selects() {
  return (
    <React.Fragment>
      <Heading heading="Selects" id="selects" />
      <Paragraph paragraph="Primer CSS adds light height and vertical-align styles to <select>s for all browsers to render them consistently with textual inputs." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <select className="form-select" aria-label="Preference">
                <option>Choose an option</option>
                <option>Git</option>
                <option>Subversion</option>
                <option>Social Coding</option>
                <option>Beets</option>
                <option>Bears</option>
                <option>Battlestar Galactica</option>
              </select>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <select class="form-select" aria-label="Preference">
            <option>Choose an option</option>
            <option>Git</option>
            <option>Subversion</option>
            <option>Social Coding</option>
            <option>Beets</option>
            <option>Bears</option>
            <option>Battlestar Galactica</option>
          </select>
        </form>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Small" id="small-1" />
      <p>
        Use the .select-sm class to resize both default and custom
        &lt;select&gt;s to match the size of
        <a href="/components/buttons#default-buttons">our small buttons.</a>
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <select className="form-select select-sm" aria-label="Preference">
              <option>Choose an option</option>
              <option>Git</option>
              <option>Subversion</option>
              <option>Social Coding</option>
              <option>Beets</option>
              <option>Bears</option>
              <option>Battlestar Galactica</option>
            </select>

            <select className="form-select select-sm" aria-label="Preference">
              <option>Choose an option</option>
              <option>Git</option>
              <option>Subversion</option>
              <option>Social Coding</option>
              <option>Beets</option>
              <option>Bears</option>
              <option>Battlestar Galactica</option>
            </select>
          </div>
        ]}
        codeline={[
          `
        <select class="form-select select-sm" aria-label="Preference">
          <option>Choose an option</option>
          <option>Git</option>
          <option>Subversion</option>
          <option>Social Coding</option>
          <option>Beets</option>
          <option>Bears</option>
          <option>Battlestar Galactica</option>
        </select>

        <select class="form-select select-sm" aria-label="Preference">
          <option>Choose an option</option>
          <option>Git</option>
          <option>Subversion</option>
          <option>Social Coding</option>
          <option>Beets</option>
          <option>Bears</option>
          <option>Battlestar Galactica</option>
        </select>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Selects;
