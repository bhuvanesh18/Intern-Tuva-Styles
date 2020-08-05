import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function DefaultButton() {
  return (
    <React.Fragment>
      <Heading heading="Default button" id="default-button" />
      <Paragraph paragraph="Use the standard—yet classy—.btn for form actions and primary page actions. These are used extensively around the site." />
      <Paragraph paragraph='When using a <button> element, always specify a type. When using a <a> element, always add role="button" for accessibility.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn mr-2" type="button">
              Button button
            </button>
            <a className="btn" href="#url" role="button">
              Link button
            </a>
          </div>
        ]}
        codeline={[
          `
      <button class="btn mr-2" type="button">Button button</button>
      <a class="btn" href="#url" role="button">Link button</a>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can find them in two sizes: the default .btn and the smaller .btn-sm." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <button className="btn mr-2" type="button">
              Button
            </button>
            <button className="btn btn-sm" type="button">
              Small button
            </button>
          </div>
        ]}
        codeline={[
          `
      <button class="btn mr-2" type="button">Button</button>
      <button class="btn btn-sm" type="button">Small button</button>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DefaultButton;
