import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function DisplayTableGrids() {
  return (
    <React.Fragment>
      <Heading heading="Display table grids" id="display-table-grids" />
      <p className="mt-2">
        Using <a href="/utilities/layout#display">display table utilities</a>{" "}
        with columns gives you some alternative layout options.
      </p>
      <Paragraph paragraph="A useful example is being able to keep the height of the container equal across a row when the length of content may differ." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-table col-12">
              <div className="col-4 d-table-cell border p-2">
                Bacon ipsum dolor amet leberkas pork pig kielbasa shankle ribeye
                meatball, salami alcatra venison.
              </div>
              <div className="col-4 d-table-cell border p-2">
                Pork chop cupim cow turkey frankfurter, landjaeger fatback
                hamburger meatball salami spare ribs. Rump tenderloin salami,
                hamburger frankfurter landjaeger andouille.
              </div>
              <div className="col-4 d-table-cell border p-2">
                Brisket tongue frankfurter cupim strip steak rump picanha
                pancetta pork pig kevin pastrami biltong. Shankle venison
                meatball swine sausage ground round. Tail pork loin ribeye
                kielbasa short ribs pork chop.
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="d-table col-12">
          <div class="col-4 d-table-cell border p-2">
            Bacon ipsum dolor amet leberkas pork pig kielbasa shankle ribeye meatball, salami alcatra venison.
          </div>
          <!--
          -->
          <div class="col-4 d-table-cell border p-2">
            Pork chop cupim cow turkey frankfurter, landjaeger fatback hamburger meatball salami spare ribs. Rump tenderloin
            salami, hamburger frankfurter landjaeger andouille.
          </div>
          <!--
          -->
          <div class="col-4 d-table-cell border p-2">
            Brisket tongue frankfurter cupim strip steak rump picanha pancetta pork pig kevin pastrami biltong. Shankle venison
            meatball swine sausage ground round. Tail pork loin ribeye kielbasa short ribs pork chop.
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <p className="mt-2">
        You can also create an alternative{" "}
        <a href="/utilities/layout#media-object">media object</a> layout with
        .display-table and column widths.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-table col-12">
              <div className="col-2 d-table-cell v-align-middle">
                <img
                  className="width-full avatar"
                  src="https://tuvalabs.com/static/img/favicon.ico"
                  alt="github"
                />
              </div>
              <div className="col-10 d-table-cell v-align-middle pl-4">
                <h1 className="text-normal lh-condensed">Tuva labs</h1>
                <p className="h4 text-gray text-normal mb-2">
                  How people build software.
                </p>
                <a className="text-gray text-small" href="#url">
                  https://tuvalabs.com
                </a>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="d-table col-12">
          <div class="col-2 d-table-cell v-align-middle">
            <img class="width-full avatar" src="https://tuvalabs.com/static/img/favicon.ico" alt="github" />
          </div>
          <div class="col-10 d-table-cell v-align-middle pl-4">
            <h1 class="text-normal lh-condensed">Tuva labs</h1>
            <p class="h4 text-gray text-normal mb-2">How people build software.</p>
            <a class="text-gray text-small" href="#url">https://tuvalabs.com</a>
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="Note that table cells will fill the width of their container even when the total columns doesn't add up to 12." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="d-table col-12">
              <div className="col-4 d-table-cell border">
                .col-4 .d-table-cell
              </div>
              <div className="col-4 d-table-cell border">
                .col-4 .d-table-cell
              </div>
              <div className="col-2 d-table-cell border">
                .col-2 .d-table-cell
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div class="d-table col-12">
          <div class="col-4 d-table-cell border">
            .col-4 .d-table-cell
          </div>
          <!--
          -->
          <div class="col-4 d-table-cell border">
            .col-4 .d-table-cell
          </div>
          <!--
          -->
          <div class="col-2 d-table-cell border">
            .col-2 .d-table-cell
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default DisplayTableGrids;
