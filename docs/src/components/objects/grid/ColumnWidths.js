import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function ColumnWidths() {
  return (
    <React.Fragment>
      <Heading heading="Column widths" id="column-widths" />
      <Paragraph paragraph="Column widths can be used with any other block or inline-block elements to add percentage-based widths." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div>
              <div className="col-4 float-right p-2 border text-red">
                <svg
                  className="octicon octicon-heart"
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="12"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"
                  ></path>
                </svg>
                <span>Don't go bacon my heart.</span>
              </div>
              <p>
                T-bone drumstick alcatra ribeye. Strip steak chuck andouille
                tenderloin bacon tri-tip ball tip beef capicola rump. Meatloaf
                bresaola drumstick ball tip salami. Drumstick ham bacon alcatra
                pig porchetta, spare ribs leberkas pork belly.
              </p>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div>
          <div class="col-4 float-right p-2 border text-red">
            <!-- <%= octicon "heart" %> -->
            <svg class="octicon octicon-heart" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"></path></svg>
            <span>Don't go bacon my heart.</span>
          </div>
          <p>T-bone drumstick alcatra ribeye. Strip steak chuck andouille tenderloin bacon tri-tip ball tip beef capicola rump. Meatloaf bresaola drumstick ball tip salami. Drumstick ham bacon alcatra pig porchetta, spare ribs leberkas pork belly.</p>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ColumnWidths;
