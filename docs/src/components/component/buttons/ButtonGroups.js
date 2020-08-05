import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function ButtonGroups() {
  return (
    <React.Fragment>
      <Heading heading="Button groups" id="button-groups" />
      <Paragraph paragraph="Have a hankering for a series of buttons that are attached to one another? Wrap them in a .BtnGroup and the buttons will be rounded and spaced automatically." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix">
            <div className="BtnGroup mr-2">
              <button className="btn BtnGroup-item" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item" type="button">
                Button
              </button>
            </div>

            <div className="BtnGroup mr-2">
              <button className="btn BtnGroup-item btn-outline" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item btn-outline" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item btn-outline" type="button">
                Button
              </button>
            </div>

            <div className="BtnGroup">
              <button className="btn BtnGroup-item btn-sm" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item btn-sm" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item btn-sm" type="button">
                Button
              </button>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="BtnGroup mr-2">
          <button class="btn BtnGroup-item" type="button">Button</button>
          <button class="btn BtnGroup-item" type="button">Button</button>
          <button class="btn BtnGroup-item" type="button">Button</button>
        </div>

        <div class="BtnGroup mr-2">
          <button class="btn BtnGroup-item btn-outline" type="button">Button</button>
          <button class="btn BtnGroup-item btn-outline" type="button">Button</button>
          <button class="btn BtnGroup-item btn-outline" type="button">Button</button>
        </div>

        <div class="BtnGroup">
          <button class="btn BtnGroup-item btn-sm" type="button">Button</button>
          <button class="btn BtnGroup-item btn-sm" type="button">Button</button>
          <button class="btn BtnGroup-item btn-sm" type="button">Button</button>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="Add .BtnGroup-parent to parent elements, like <form>s or <details>s, within .BtnGroups for proper spacing and rounded corners." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="BtnGroup">
              <button className="btn BtnGroup-item" type="button">
                Button
              </button>
              <form className="BtnGroup-parent">
                <button className="btn BtnGroup-item" type="button">
                  Button in a form
                </button>
              </form>
              <button className="btn BtnGroup-item" type="button">
                Button
              </button>
              <button className="btn BtnGroup-item" type="button">
                Button
              </button>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="BtnGroup">
          <button class="btn BtnGroup-item" type="button">Button</button>
          <form class="BtnGroup-parent">
            <button class="btn BtnGroup-item" type="button">Button in a form</button>
          </form>
          <button class="btn BtnGroup-item" type="button">Button</button>
          <button class="btn BtnGroup-item" type="button">Button</button>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ButtonGroups;
