import React from "react";
import {
  Heading,
  CodeBlocks,
  Paragraph,
  SubHeading
} from "./../../mini_components";

function Sizing() {
  return (
    <React.Fragment>
      <Heading heading="Sizing" id="sizing" />
      <Paragraph paragraph="Make inputs smaller, larger, or full-width with an additional class." />
      <SubHeading subheading="Small" id="small" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <input
                className="form-control input-sm"
                type="text"
                placeholder="Small input"
                aria-label="Small input"
              />
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <input class="form-control input-sm" type="text" placeholder="Small input" aria-label="Small input" />
        </form>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Large" id="large" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <input
                className="form-control input-lg"
                type="text"
                placeholder="Large input"
                aria-label="Large input"
              />
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <input class="form-control input-lg" type="text" placeholder="Large input" aria-label="Large input" />
        </form>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Block" id="block" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <input
                className="form-control input-block"
                type="text"
                placeholder="Full-width input"
                aria-label="Full-width input"
              />
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <input class="form-control input-block" type="text" placeholder="Full-width input" aria-label="Full-width input" />
        </form>
        `
        ]}
        lang="html"
      />
      <SubHeading subheading="Dark" id="dark" />
      <CodeBlocks
        htmlcoderender={[
          <div className="bg-gray-dark p-3 mt-n3 ml-n3 mr-n3">
            <input
              className="form-control input-dark"
              type="text"
              placeholder="Dark input"
              aria-label="Dark input"
            />
            <input
              className="form-control input-dark input-sm"
              type="text"
              placeholder="Dark input small"
              aria-label="Dark input"
            />
          </div>
        ]}
        codeline={[
          `
        <div class="bg-gray-dark p-3 mt-n3 ml-n3 mr-n3">
          <input class="form-control input-dark" type="text" placeholder="Dark input" aria-label="Dark input">
          <input class="form-control input-dark input-sm" type="text" placeholder="Dark input small" aria-label="Dark input">
        </div>
        `
        ]}
        lang="html"
      />
      <SubHeading
        subheading="Hide webkit's contact info autofill icon"
        id="hide-webkits-contact-info-autofill-icon"
      />
      <Paragraph paragraph="Webkit sometimes gets confused and tries to add an icon/dropdown to autofill contact information on fields that may not be appropriate (such as input for number of users). Use this class to override the display of this icon." />
      <CodeBlocks
        htmlcoderender={[
          <form>
            <input
              className="form-control input-hide-webkit-autofill"
              placeholder="Hide Webkit's contact autofill on this input"
              type="text"
              aria-label="Hide Webkit's contact autofill on this input"
            />
          </form>
        ]}
        codeline={[
          `
        <form>
          <input
            class="form-control input-hide-webkit-autofill"
            placeholder="Hide Webkit's contact autofill on this input"
            type="text"
            aria-label="Hide Webkit's contact autofill on this input"
          />
        </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Sizing;
