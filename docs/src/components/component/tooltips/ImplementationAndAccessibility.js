import React from "react";
import { Heading, Paragraph } from "./../../mini_components";

function ImplementationAndAccessibility() {
  return (
    <React.Fragment>
      <Heading
        heading="Implementation and accessibility"
        id="implementation-and-accessibility"
      />
      <Paragraph paragraph="Tooltips as a UI pattern should be our last resort for conveying information because it is hidden by default and often with zero or little visual indicator of its existence." />
      <Paragraph paragraph="Before adding a tooltip, please consider: Is this information essential and necessary* Can the UI be made clearer? Can the information be shown on the page by default?" />
      <b>Attention:</b>
      <Paragraph paragraph=" we use aria-label for tooltip contents, because it is crucial that they are accessible to screen reader users. However, aria-label replaces the text content of an element in screen readers, so only use .tooltipped on elements with no existing text content, or consider using title for supplemental information." />
      <b>Note:</b>
      <Paragraph paragraph=" Tooltip classes will conflict with Octicon styles, and as such, must be applied to the parent element instead of the icon." />
    </React.Fragment>
  );
}

export default ImplementationAndAccessibility;
