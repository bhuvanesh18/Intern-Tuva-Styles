import React from "react";
import { Heading, CodeBlocks } from "../mini_components";

function Links() {
  return (
    <React.Fragment>
      <Heading heading="Links" id="links" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div>
              <a href="#url" className="link-mkt-0">
                This is a Marketing link0
              </a>
            </div>
            <div>
              <a href="#url" className="link-mkt-1">
                This is a Marketing link1
              </a>
            </div>
            <div>
              <a href="#url" className="link-mkt-2">
                This is a Marketing link2
              </a>
            </div>
          </div>,
        ]}
        codeline={[
          `
          <div>
            <a href="#url" class="link-mkt-0">
              This is a Marketing link0
            </a>
          </div>
          <div>
            <a href="#url" class="link-mkt-1">
              This is a Marketing link1
            </a>
          </div>
          <div>
            <a href="#url" class="link-mkt-2">
              This is a Marketing link2
            </a>
          </div>
          `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Links;
