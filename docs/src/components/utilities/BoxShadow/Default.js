import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";
import { Link } from "react-router-dom";

function Default() {
  return (
    <React.Fragment>
      <Heading heading="Default" id="default" />
      <Paragraph paragraph="Default shadows are mainly used on things that need to appear slightly elevated, like pricing cards or UI elements containing important information." />
      <CodeBlocks
        htmlcoderender={[<div className="box-shadow p-3">.box-shadow</div>]}
        codeline={[
          `
        <div class="box-shadow p-3">
          .box-shadow
        </div>
          `
        ]}
        lang="html"
      />
      <p>
        These types of shadows are typically applied to elements with borders,
        such as the
        <Link to="/components/box">Box component</Link> .
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="col-6">
            <div className="Box box-shadow">
              <div className="Box-row">
                <h3 className="m-0">Organization</h3>
              </div>
              <div className="Box-row">
                <p className="mb-0 text-gray">
                  Taxidermy live-edge mixtape, keytar tumeric locavore meh
                  selvage deep v letterpress vexillologist lo-fi tousled
                  church-key thundercats. Brooklyn bicycle rights tousled, marfa
                  actually.
                </p>
              </div>
              <div className="Box-row">
                <button
                  type="button"
                  name="Create an organization"
                  className="btn btn-primary btn-block"
                >
                  Create an organization
                </button>
              </div>
            </div>
          </div>
        ]}
        codeline={[
          `
          <div class="col-6">
          <div class="Box box-shadow">
            <div class="Box-row">
              <h3 class="m-0">Organization</h3>
            </div>
            <div class="Box-row">
              <p class="mb-0 text-gray">
                Taxidermy live-edge mixtape, keytar tumeric locavore meh selvage deep v letterpress vexillologist lo-fi tousled
                church-key thundercats. Brooklyn bicycle rights tousled, marfa actually.
              </p>
            </div>
            <div class="Box-row">
              <button type="button" name="Create an organization" class="btn btn-primary btn-block">
                Create an organization
              </button>
            </div>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Default;
