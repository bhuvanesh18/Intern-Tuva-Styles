import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";
import { Link } from "react-router-dom";

function LargeButton() {
  return (
    <React.Fragment>
      <Heading heading="Large button" id="large-button" />
      <Paragraph paragraph="Use .btn-large to increase the padding and border radius of a button. This is useful for prominent calls to action in hero sections." />
      <p>
        <Link to="/support/typography#font-size-variables"> Typography </Link>{" "}
        can be used to alter the font-size if needed. Padding is applied in em's
        so that it scales proportionally with the font-size.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn btn-large mr-2" type="button">
              Large button
            </button>
            <a className="btn btn-large" href="#url" role="button">
              Large link button
            </a>
          </div>
        ]}
        codeline={[
          `
      <button class="btn btn-large mr-2" type="button">Large button</button>
      <a class="btn btn-large" href="#url" role="button">Large link button</a>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .btn-large with a type scale utility to transform the text to a bigger size." />
      <CodeBlocks
        htmlcoderender={[
          <div className="h3">
            <button
              className="btn btn-large btn-outline-blue mr-2"
              type="button"
            >
              Large button button
            </button>
            <a className="btn btn-large" href="#url" role="button">
              Large link button
            </a>
          </div>
        ]}
        codeline={[
          `
      <div class="h3">
        <button class="btn btn-large btn-outline-blue mr-2" type="button">Large button button</button>
        <a class="btn btn-large" href="#url" role="button">Large link button</a>
      </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default LargeButton;
