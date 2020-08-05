import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function TabNav() {
  return (
    <React.Fragment>
      <Heading heading="TabNav" id="tab-nav" />
      <Paragraph paragraph="When you need to toggle between different views, consider using a tabnav. It'll give you a left-aligned horizontal row of... tabs!" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="tabnav">
              <nav className="tabnav-tabs" aria-label="Foo bar">
                <a className="tabnav-tab" href="#url" aria-current="page">
                  Foo tab
                </a>
                <a className="tabnav-tab" href="#url">
                  Bar tab
                </a>
              </nav>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="tabnav">
          <nav class="tabnav-tabs" aria-label="Foo bar">
            <a class="tabnav-tab" href="#url" aria-current="page">Foo tab</a>
            <a class="tabnav-tab" href="#url">Bar tab</a>
          </nav>
        </div>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Use .float-right to align additional elements in the .tabnav:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="tabnav">
              <a className="btn btn-sm float-right" href="#url" role="button">
                Button
              </a>
              <nav className="tabnav-tabs" aria-label="Foo bar">
                <a className="tabnav-tab" href="#url" aria-current="page">
                  Foo Tab
                </a>
                <a className="tabnav-tab" href="#url">
                  Bar Tab
                </a>
              </nav>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="tabnav">
          <a class="btn btn-sm float-right" href="#url" role="button">Button</a>
          <nav class="tabnav-tabs" aria-label="Foo bar">
            <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
            <a class="tabnav-tab" href="#url">Bar Tab</a>
          </nav>
        </div>
        `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Additional bits of text and links can be styled for optimal placement with .tabnav-extra:" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="tabnav">
              <div className="tabnav-extra float-right">
                Tabnav widget text here.
              </div>
              <nav className="tabnav-tabs" aria-label="Foo bar">
                <a className="tabnav-tab" href="#url" aria-current="page">
                  Foo Tab
                </a>
                <a className="tabnav-tab" href="#url">
                  Bar Tab
                </a>
              </nav>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="tabnav">
          <div class="tabnav-extra float-right">Tabnav widget text here.</div>
          <nav class="tabnav-tabs" aria-label="Foo bar">
            <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
            <a class="tabnav-tab" href="#url">Bar Tab</a>
          </nav>
        </div>
        `
        ]}
        lang="html"
      />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="tabnav">
              <div className="float-right">
                <a className="tabnav-extra" href="#url">
                  Tabnav extra link
                </a>
                <a className="tabnav-extra" href="#url">
                  Tabnav extra link
                </a>
              </div>
              <nav className="tabnav-tabs" aria-label="Foo bar">
                <a className="tabnav-tab" href="#url" aria-current="page">
                  Foo Tab
                </a>
                <a className="tabnav-tab" href="#url">
                  Bar Tab
                </a>
              </nav>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="tabnav">
          <div class="float-right">
            <a class="tabnav-extra" href="#url">Tabnav extra link</a>
            <a class="tabnav-extra" href="#url">Tabnav extra link</a>
          </div>
          <nav class="tabnav-tabs" aria-label="Foo bar">
            <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
            <a class="tabnav-tab" href="#url">Bar Tab</a>
          </nav>
        </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default TabNav;
