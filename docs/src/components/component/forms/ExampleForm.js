import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function ExampleForm() {
  return (
    <React.Fragment>
      <Heading heading="Example form" id="example-form" />
      <Paragraph paragraph="Form controls in Primer CSS currently have no basic layout specified (this is by design). You'll need to use <fieldset>s, <div>s, or other elements and styles to rearrange them." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <form>
              <label for="name">Name</label>
              <input className="form-control" type="text" id="name" />

              <label for="email">Email address</label>
              <input className="form-control" type="email" id="email" />

              <label>
                {" "}
                <input type="checkbox" /> Remember me{" "}
              </label>

              <label>
                {" "}
                <input
                  type="radio"
                  id="herp"
                  name="herpderp"
                  checked
                /> Herp{" "}
              </label>
              <label>
                {" "}
                <input type="radio" id="derp" name="herpderp" /> Derp{" "}
              </label>

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        ]}
        codeline={[
          `
        <form>
          <label for="name">Name</label>
          <input class="form-control" type="text" id="name" />

          <label for="email">Email address</label>
          <input class="form-control" type="email" id="email" />

          <label> <input type="checkbox" /> Remember me </label>

          <label> <input type="radio" id="herp" name="herpderp" checked /> Herp </label>
          <label> <input type="radio" id="derp" name="herpderp" /> Derp </label>

          <button class="btn" type="submit">Submit</button>
        </form>
        `
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default ExampleForm;
