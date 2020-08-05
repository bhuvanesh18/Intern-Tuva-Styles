import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function InlineBlockGrids() {
  return (
    <React.Fragment>
      <Heading heading="Inline block grids" id="inline-block-grids" />
      <Paragraph paragraph="Use column widths with d-inline-block as an alternative to floated grids." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div>
              <div className="col-4 d-inline-block border">
                .col-4 .d-inline-block
              </div>
              <div className="col-4 d-inline-block border">
                .col-4 .d-inline-block
              </div>
              <div className="col-4 d-inline-block border">
                .col-4 .d-inline-block
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
        <div>
          <div class="col-4 d-inline-block border">
            .col-4 .d-inline-block
          </div>
          <div class="col-4 d-inline-block border">
            .col-4 .d-inline-block
          </div>
          <div class="col-4 d-inline-block border">
            .col-4 .d-inline-block
          </div>
        </div>
        `,
        ]}
        lang="html"
      />
      <Paragraph paragraph="You can use column widths and other utilities on elements such as lists to create the layout you need while keeping the markup semantically correct." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <ul className="list-style-none">
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/broccolini.png"
                  alt="broccolini"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/jonrohan.png"
                  alt="jonrohan"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/muan.png"
                  alt="muan"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/pmarsceill.png"
                  alt="pmarsceill"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/sophshep.png"
                  alt="sophshep"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/cmwinters.png"
                  alt="cmwinters"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/jeejkang.png"
                  alt="jeejkang"
                />
              </li>
              <li className="d-inline-block col-2 p-2">
                <img
                  className="width-full avatar"
                  src="https://github.com/mdo.png"
                  alt="mdo"
                />
              </li>
            </ul>
          </div>,
        ]}
        codeline={[
          `
        <ul class="list-style-none">
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/broccolini.png" alt="broccolini" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/jonrohan.png" alt="jonrohan" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/muan.png" alt="muan" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/pmarsceill.png" alt="pmarsceill" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/sophshep.png" alt="sophshep" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/cmwinters.png" alt="cmwinters" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2">
            <img class="width-full avatar" src="https://github.com/jeejkang.png" alt="jeejkang" />
          </li>
          <!--
          -->
          <li class="d-inline-block col-2 p-2"><img class="width-full avatar" src="https://github.com/mdo.png" alt="mdo" /></li>
        </ul>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default InlineBlockGrids;
