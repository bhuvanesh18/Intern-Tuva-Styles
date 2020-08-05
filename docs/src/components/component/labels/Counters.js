import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Counters() {
  return (
    <React.Fragment>
      <Heading heading="Counters" id="counters" />
      <Paragraph paragraph="Use the Counter component to add a count to navigational elements and buttons. Counters come in 3 variations: the default Counter with a light gray background, Counter--gray with a dark-gray background and inverse white text, and Counter--gray-light with a light-gray background and dark gray text. When a counter is empty, its visibility will be hidden." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <span className="Counter">16</span>
            <span className="Counter Counter--gray">32</span>
            <span className="Counter Counter--gray-light">64</span>
          </div>
        ]}
        codeline={[
          `
        <span class="Counter">16</span>
        <span class="Counter Counter--gray">32</span>
        <span class="Counter Counter--gray-light">64</span>
        `
        ]}
        lang="html"
      />
      <p>
        Use the Counter in navigation to indicate the number of items without
        the user having to click through or count the items. See more options in{" "}
        <a href="/components/navigation">navigation</a>.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div className="tabnav">
            <nav className="tabnav-tabs" aria-label="Foo bar">
              <a href="#url" className="tabnav-tab" aria-current="page">
                Foo tab <span className="Counter">23</span>
              </a>
              <a href="#url" className="tabnav-tab">
                Bar tab
              </a>
            </nav>
          </div>
        ]}
        codeline={[
          `
        <div class="tabnav">
          <nav class="tabnav-tabs" aria-label="Foo bar">
            <a href="#url" class="tabnav-tab" aria-current="page">Foo tab <span class="Counter">23</a>
            <a href="#url" class="tabnav-tab">Bar tab</a>
          </nav>
        </div>
        `
        ]}
        lang="html"
      />
      <p>
        Counters can also be used in Box headers to indicate the number of items
        in a list. See more on the <a href="/components/box">box component</a>.
      </p>
      <CodeBlocks
        htmlcoderender={[
          <div>
            <div className="Box">
              <div className="Box-header">
                <h3 className="Box-title">
                  Box title
                  <span className="Counter Counter--gray">3</span>
                </h3>
              </div>
              <ul>
                <li className="Box-row">Box row one</li>
                <li className="Box-row">Box row two</li>
                <li className="Box-row">Box row three</li>
              </ul>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="Box">
          <div class="Box-header">
            <h3 class="Box-title">
              Box title
              <span class="Counter Counter--gray">3</span>
            </h3>
          </div>
          <ul>
            <li class="Box-row">
              Box row one
            </li>
            <li class="Box-row">
              Box row two
            </li>
            <li class="Box-row">
              Box row three
            </li>
          </ul>
        </div>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Counters;
