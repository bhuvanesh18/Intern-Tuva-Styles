import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Usage() {
  return (
    <React.Fragment>
      <Heading heading="Usage" id="usage" />
      <CodeBlocks
        htmlcoderender={[
          <nav aria-label="Breadcrumb">
            <ol>
              <li className="breadcrumb-item">
                <a href="#url1">Business</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#url2">Customers</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                MailChimp
              </li>
            </ol>
          </nav>
        ]}
        codeline={[
          `
      <nav aria-label="Breadcrumb">
        <ol>
          <li class="breadcrumb-item"><a href="#url1">Business</a></li>
          <li class="breadcrumb-item"><a href="#url2">Customers</a></li>
          <li class="breadcrumb-item" aria-current="page">MailChimp</li>
        </ol>
      </nav>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Usage;
