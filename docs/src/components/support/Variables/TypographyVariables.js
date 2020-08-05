import React from "react";
import { TableHeading, TableData, Heading } from "../../mini_components";
function TypographyVariables() {
  return (
    <React.Fragment>
      <Heading heading="Typography variables" id="typography" />
      <h4 className="mt-1">
        Defined in{" "}
        <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/typography.scss">
          src/support/variables/typography.scss
        </a>
      </h4>
      <table className="width-full border mt-2">
        <thead>
          <tr>
            <TableHeading style="py-2 px-3" th="Name" />
            <TableHeading style="py-2 px-3" th="Value" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData style="py-2 px-3" td="$h0-size-mobile" />
            <TableData style="py-2 px-3" td="46px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h1-size-mobile" />
            <TableData style="py-2 px-3" td="40px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h2-size-mobile" />
            <TableData style="py-2 px-3" td="28px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h3-size-mobile" />
            <TableData style="py-2 px-3" td="22px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h0-size" />
            <TableData style="py-2 px-3" td="54px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h1-size" />
            <TableData style="py-2 px-3" td="46px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h2-size" />
            <TableData style="py-2 px-3" td="30px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h3-size" />
            <TableData style="py-2 px-3" td="24px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h4-size" />
            <TableData style="py-2 px-3" td="20px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h5-size" />
            <TableData style="py-2 px-3" td="18px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$h6-size" />
            <TableData style="py-2 px-3" td="16px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-size-small" />
            <TableData style="py-2 px-3" td="12px" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-weight-black" />
            <TableData style="py-2 px-3" td="900" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-weight-bold" />
            <TableData style="py-2 px-3" td="700" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-weight-semibold" />
            <TableData style="py-2 px-3" td="600" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-weight-medium" />
            <TableData style="py-2 px-3" td="500" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-weight-normal" />
            <TableData style="py-2 px-3" td="400" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$font-weight-light" />
            <TableData style="py-2 px-3" td="300" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$lh-condensed-ultra" />
            <TableData style="py-2 px-3" td="1" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$lh-condensed" />
            <TableData style="py-2 px-3" td="1.25" />
          </tr>
          <tr>
            <TableData style="py-2 px-3" td="$lh-default" />
            <TableData style="py-2 px-3" td="1.5" />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TypographyVariables;
