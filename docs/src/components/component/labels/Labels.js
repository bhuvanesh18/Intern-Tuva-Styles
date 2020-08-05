import React from "react";
import {
  Heading,
  CodeBlocks,
  Paragraph,
  SubHeading
} from "./../../mini_components";

function Labels() {
  return (
    <React.Fragment>
      <Heading heading="Labels" id="labels" />
      <Paragraph paragraph="The base label component styles the text, adds padding and rounded corners, and an inset box shadow. Labels come in various themes which apply colors and different border styles." />
      <Paragraph paragraph="The base Label style does not apply a background color. Here's an example using the bg-blue utility to apply a blue background:" />
      <CodeBlocks
        htmlcoderender={[
          <div id="default-label-styles">
            <span title="Label: default label" className="Label bg-blue">
              default label
            </span>
          </div>
        ]}
        codeline={[
          `
        <span title="Label: default label" class="Label bg-blue">default label</span>
        `
        ]}
        lang="html"
      />
      <b>Note:</b>
      <Paragraph paragraph="Be sure to include a title attribute on labels, as it's helpful for people using screen-readers to differentiate a label from other text. For example, without the title attribute, the following case would read as 'New select component design', rather than identifying design as a label." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <a href="#url">New select component</a>
            <span className="Label bg-blue ml-1">design</span>
          </div>
        ]}
        codeline={[
          `
        <!-- Don't do this -->
        <a href="#url">New select component</a><span class="Label bg-blue ml-1">design</span>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Label themes" id="label-themes" />
      <Paragraph paragraph="Labels come in a few different themes. Use a theme that helps communicate the content of the label, and ensure it's used consistently." />
      <Paragraph paragraph="Use Label--gray to create a label with a light gray background and gray text. This label is neutral in color and can be used in contexts where all you need to communicate is metadata, or when you want a label to feel less prominent compared with labels with stronger colors." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span title="Label: gray label" className="Label Label--gray">
              gray label
            </span>
          </div>
        ]}
        codeline={[
          `
        <span title="Label: gray label" class="Label Label--gray">gray label</span>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use Label--gray-darker to create a label with a dark-gray background color. This label is also neutral in color, however, since its background is darker, it can stand out more compared to Label--gray." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span
              title="Label: dark gray label"
              className="Label Label--gray-darker"
            >
              dark gray label
            </span>
          </div>
        ]}
        codeline={[
          `
        <span title="Label: dark gray label" class="Label Label--gray-darker">dark gray label</span>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use Label--yellow to communicate 'warning'. The yellow background color is very close to red, so avoid using next to labels with a red background color since most people will find it hard to tell the difference." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span title="Label: yellow label" className="Label Label--yellow">
              yellow label
            </span>
          </div>
        ]}
        codeline={[
          `
          <span title="Label: yellow label" class="Label Label--yellow">yellow label</span>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use Label--outline to create a label with gray text, a gray border, and a transparent background. The outline reduces the contrast of this label in combination with filled labels. Use this in contexts where you need it to stand out less than other labels and communicate a neutral message." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span title="Label: outline label" className="Label Label--outline">
              outlined label
            </span>
          </div>
        ]}
        codeline={[
          `
          <span title="Label: outline label" class="Label Label--outline">outlined label</span>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use Label--outline-blue in combination with Label--outline to communicate a positive message." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span
              title="Label: blue outline label"
              className="Label Label--outline Label--outline-blue"
            >
              blue outlined label
            </span>
          </div>
        ]}
        codeline={[
          `
          <span title="Label: green outline label" class="Label Label--outline Label--outline-green">green outlined label</span>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Labels;
