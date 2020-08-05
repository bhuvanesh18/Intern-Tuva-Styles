import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function WithIcon() {
  return (
    <React.Fragment>
      <Heading heading="With icon" id="with-icon" />
      <Paragraph paragraph="Add an icon to the left of the flash message to give it some funky fresh attention." />
      <CodeBlocks
        htmlcoderender={[
          <div className="flash">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="octicon octicon-alert mr-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
              />
            </svg>
            Flash message with an icon goes here.
          </div>
        ]}
        codeline={[
          `
        <div class="flash">
          <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-alert mr-2" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
            />
          </svg>
          Flash message with an icon goes here.
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default WithIcon;
