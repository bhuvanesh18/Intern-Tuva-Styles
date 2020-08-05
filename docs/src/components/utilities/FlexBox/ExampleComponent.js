import React from "react";
import {
  Heading,
  Paragraph,
  SubHeading,
  CodeBlocks
} from "../../mini_components";

function ExampleComponent() {
  return (
    <React.Fragment>
      <Heading heading="Example components" id="example-components" />
      <Paragraph paragraph="The flex utilities can be used to create a number of components. Here are some examples." />
      <SubHeading subheading="Media object" id="media-object" />
      <Paragraph paragraph="You can use flex utilities to make a simple media object, like this:" />
      <CodeBlocks
        htmlcoderender={[
          <div className="border d-flex flex-items-center p-4">
            <div className="p-5 border bg-gray-light">image</div>
            <p className="pl-4 m-0">This is a example code.</p>
          </div>
        ]}
        codeline={[
          `
        <div class="border d-flex flex-items-center p-4">
          <div class="p-5 border bg-gray-light">image</div>
          <p class="pl-4 m-0">This is a example code.</p>
        </div>
      `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Responsive media object"
        id="responsive-media-object"
      />
      <p>
        Here is an example of a media object that is{" "}
        <b>vertically centered on large screens</b>, but converts to a stacked
        column layout on small screens.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="border p-3 d-flex flex-column flex-md-row flex-md-items-center">
            <div className="pr-0 pr-md-3 mb-3 mb-md-0 d-flex flex-justify-center flex-md-justify-start">
              <img
                style={{ maxWidth: "100px", maxHeight: "100px" }}
                src="https://tuvalabs.com/static/img/favicon.ico"
              />
            </div>
            <div className="d-flex text-md-left">
              <p>This is a example code.</p>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="border p-3 d-flex flex-column flex-md-row flex-md-items-center">
          <div class="pr-0 pr-md-3 mb-3 mb-md-0 d-flex flex-justify-center flex-md-justify-start">
            <img style="max-width:100px; max-height:100px;" src="https://tuvalabs.com/static/img/favicon.ico" />
          </div>
          <div class="d-flex text-md-left">
            <p>This is a example code.</p>
          </div>
        </div>
     `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ExampleComponent;
