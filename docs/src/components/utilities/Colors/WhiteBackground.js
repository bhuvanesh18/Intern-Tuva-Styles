import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function WhiteBackground() {
  return (
    <React.Fragment>
      <Heading heading="White background" id="white-background" />
      <Paragraph paragraph="You can make a background explicitly white (#fff) with the bg-white utility:" />
      <CodeBlocks
        htmlcoderender={[
          <div className="bg-gray-dark p-2">
            <span className="bg-white">.bg-white over .bg-gray-dark</span>
          </div>
        ]}
        codeline={[
          `
       <div class="bg-gray-dark p-2">
          <span class="bg-white">.bg-white over .bg-gray-dark</span>
        </div>
          `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default WhiteBackground;
