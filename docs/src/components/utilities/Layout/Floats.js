import React from "react";
import {
  Heading,
  Paragraph,
  CodeBlocks,
  SubHeading
} from "../../mini_components";

function Floats() {
  return (
    <React.Fragment>
      <Heading heading="Floats" id="floats" />
      <Paragraph paragraph="Use .float-left and .float-right to set floats, and .clearfix to clear." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix border border-gray">
            <div className="float-left border border-gray">.float-left</div>
            <div className="float-right border border-gray">.float-right</div>
          </div>
        ]}
        codeline={[
          `
      <div class="clearfix border border-gray">
       <div class="float-left border border-gray">
         .float-left
       </div>
       <div class="float-right border border-gray">
         .float-right
       </div>
     </div>
       `
        ]}
        lang="html"
      />
      <SubHeading subheading="Responsive floats" id="responsive-floats" />
      <p>
        Float utilities can be applied or changed per{" "}
        <a href="#url">breakpoint</a>. This can be useful for responsive layouts
        when you want an element to be full width on mobile but floated at a
        larger breakpoint.
      </p>
      <Paragraph paragraph="Each responsive float utility is applied to the specified breakpoint and up, using the following formula: float-[breakpoint]-[property]. For example: float-md-left. Remember to use .clearfix to clear." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix border border-gray">
            <div className="float-md-left border border-gray">
              .float-md-left
            </div>
            <div className="float-md-right border border-gray">
              .float-md-right
            </div>
          </div>
        ]}
        codeline={[
          `
      <div class="clearfix border border-gray">
        <div class="float-md-left border border-gray">
          .float-md-left
        </div>
        <div class="float-md-right border border-gray">
          .float-md-right
        </div>
      </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Floats;
