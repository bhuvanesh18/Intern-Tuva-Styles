import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function RadioGroup() {
  return (
    <React.Fragment>
      <Heading heading="Radio group" id="radio-group" />
      <Paragraph paragraph="Radio groups are tab like controls. Their blue border gives extra emphasis to what is selected." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <div className="radio-group">
                <input
                  className="radio-input"
                  id="option-a"
                  type="radio"
                  name="options"
                />
                <label className="radio-label" for="option-a">
                  Option A
                </label>
                <input
                  className="radio-input"
                  id="option-b"
                  type="radio"
                  name="options"
                />
                <label className="radio-label" for="option-b">
                  Option B
                </label>
                <input
                  className="radio-input"
                  id="option-c"
                  type="radio"
                  name="options"
                />
                <label className="radio-label" for="option-c">
                  Option C
                </label>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <div class="radio-group">
            <input class="radio-input" id="option-a" type="radio" name="options">
            <label class="radio-label" for="option-a">Option A</label>
            <input class="radio-input" id="option-b" type="radio" name="options">
            <label class="radio-label" for="option-b">Option B</label>
            <input class="radio-input" id="option-c" type="radio" name="options">
            <label class="radio-label" for="option-c">Option C</label>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default RadioGroup;
