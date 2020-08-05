import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import Default from "./Default";
import Variations from "./Variations";
import ToastWithDismiss from "./ToastWithDismiss";
import ToastWithLink from "./ToastWithLink";
import ToastAnimationIn from "./ToastAnimationIn";
import ToastWithLoadingAnimation from "./ToastWithLoadingAnimation";
import ToastPosition from "./ToastPosition";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Toast"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/toasts"
      />
      <Content />
      <Paragraph paragraph="Toasts are used to show live, time-sensitive feedback to users." />
      <Default />
      <Variations />
      <ToastWithDismiss />
      <ToastWithLink />
      <ToastAnimationIn />
      <ToastWithLoadingAnimation />
      <ToastPosition />
    </div>
  );
}

export default index;
