import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Containers() {
  return (
    <React.Fragment>
      <Heading heading="Containers" id="containers" />
      <Paragraph paragraph="Container widths match our breakpoints and are available at a sm, md, lg, and xl size. Containers apply a max-width rather than a fixed width for responsive layouts, and they center the container." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="container-sm border">
              .container-sm, max-width 544px
            </div>

            <div className="container-md border">
              .container-md, max-width 768px
            </div>

            <div className="container-lg border">
              .container-lg, max-width 1012px
            </div>

            <div className="container-xl border">
              .container-xl, max-width 1280px
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="container-sm border">
          .container-sm, max-width 544px
        </div>

        <div class="container-md border">
          .container-md, max-width 768px
        </div>

        <div class="container-lg border">
          .container-lg, max-width 1012px
        </div>

        <div class="container-xl border">
          .container-xl, max-width 1280px
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Containers;
