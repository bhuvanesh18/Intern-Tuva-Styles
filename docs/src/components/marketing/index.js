import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../mini_components";
import Headings from "./Headings";
import Subtitles from "./Subtitles";
import Paragraphs from "./Paragraphs";
import Links from "./Links";
import Buttons from "./Buttons";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Marketing"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/marketing"
      />
      <Content />
      <Headings />
      <Subtitles />
      <Paragraphs />
      <Links />
      <Buttons />
    </div>
  );
}

export default index;
