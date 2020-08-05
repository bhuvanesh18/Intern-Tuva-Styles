import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import KitchenSink from "./KitchenSink";
import ExampleForm from "./ExampleForm";
import FormContrast from "./FormContrast";
import Sizing from "./Sizing";
import Selects from "./Selects";
import FormGroups from "./FormGroups";
import FormGroupValidation from "./FormGroupValidation";
import CheckboxesAndRadios from "./CheckboxesAndRadios";
import RadioGroup from "./RadioGroup";
import InputGroup from "./InputGroup";
import FormAction from "./FormAction";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Forms"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/forms"
      />
      <Content />
      <Paragraph paragraph="Style individual form controls and utilize common layouts." />
      <Paragraph paragraph="Overview:" />
      <ul className="ml-4">
        <li>
          We reset several elements' default styles for cross browser
          consistency and easier manipulation later. This includes
          &lt;fieldset&gt;s, WebKit validation bubbles, and most textual
          &lt;input&gt;s.
        </li>
        <li>
          Specific types of textual &lt;input&gt;s are styled automatically, but
          .form-control is available should you need it.
        </li>
        <li>Always declare a type on your &lt;button&gt;s.</li>
        <li>Form layouts rely on form groups.</li>
      </ul>

      <KitchenSink />
      <ExampleForm />
      <FormContrast />
      <Sizing />
      <Selects />
      <FormGroups />
      <FormGroupValidation />
      <CheckboxesAndRadios />
      <RadioGroup />
      <InputGroup />
      <FormAction />
    </div>
  );
}

export default index;
