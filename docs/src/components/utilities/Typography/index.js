import React from "react";
import Content from "./Content";
import { ComponentHeading } from "../../mini_components";
import { Link } from "react-router-dom";
import HeadingUtility from "./HeadingUtility";
import LineHeightStyle from "./LineHeightStyle";
import TypographicStyle from "./TypographicStyle";
import WordBreak from "./WordBreak";
import TextAlignment from "./TextAlignment";
import ResponsiveTextAlignment from "./ResponsiveTextAlignment";
import ListStyles from "./ListStyles";
import TextShadows from "./TextShadows";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Typography"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/typography.scss"
      />
      <Content />
      <p className="mt-2">
        Type utilities are designed to work in combination with line-height
        utilities so as to result in more sensible numbers wherever possible.
        These also exist as
        <Link to="/support/typography#typography-variables">
          {" "}
          variables{" "}
        </Link>{" "}
        that you can use in components or custom CSS.
      </p>
      <p className="mt-2">
        Font sizes are smaller on mobile and scale up at the md
        <Link to="/support/breakpoints"> breakpoints </Link> to be larger on
        desktop.
      </p>
      <HeadingUtility />
      <LineHeightStyle />
      <TypographicStyle />
      <WordBreak />
      <TextAlignment />
      <ResponsiveTextAlignment />
      <ListStyles />
      <TextShadows />
    </div>
  );
}

export default index;
