import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function FormGroups() {
  return (
    <React.Fragment>
      <Heading heading="Form groups" id="form-groups" />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <div className="form-group">
                <div className="form-group-header">
                  <label for="example-text">Example Text</label>
                </div>
                <div className="form-group-body">
                  <input
                    className="form-control"
                    type="text"
                    value="Example Value"
                    id="example-text"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-group-header">
                  <label for="example-select">Example Select</label>
                </div>
                <div className="form-group-body">
                  <select className="form-select" id="example-select">
                    <option>Choose an option</option>
                    <option>Git</option>
                    <option>Subversion</option>
                    <option>Social Coding</option>
                    <option>Beets</option>
                    <option>Bears</option>
                    <option>Battlestar Galactica</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="form-group-header">
                  <label for="example-textarea">Example Textarea</label>
                </div>
                <div className="form-group-body">
                  <textarea
                    className="form-control"
                    id="example-textarea"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <div class="form-group">
            <div class="form-group-header">
              <label for="example-text">Example Text</label>
            </div>
            <div class="form-group-body">
              <input class="form-control" type="text" value="Example Value" id="example-text" />
            </div>
          </div>

          <div class="form-group">
            <div class="form-group-header">
              <label for="example-select">Example Select</label>
            </div>
            <div class="form-group-body">
              <select class="form-select" id="example-select">
                <option>Choose an option</option>
                <option>Git</option>
                <option>Subversion</option>
                <option>Social Coding</option>
                <option>Beets</option>
                <option>Bears</option>
                <option>Battlestar Galactica</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="form-group-header">
              <label for="example-textarea">Example Textarea</label>
            </div>
            <div class="form-group-body">
              <textarea class="form-control" id="example-textarea"></textarea>
            </div>
          </div>
        </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default FormGroups;
