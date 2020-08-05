import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import BasicExample from "./BasicExample";
import RightAligned from "./RightAligned";
import SelectedState from "./SelectedState";
import ListItems from "./ListItems";
import Divider from "./Divider";
import Footer from "./Footer";
import Filter from "./Filter";
import Tabs from "./Tabs";
import Message from "./Message";
import Loading from "./Loading";
import Blankslate from "./Blankslate";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Select menu"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/select-menu"
      />
      <Content />
      <Paragraph paragraph="The SelectMenu component provides advanced support for navigation, filtering, and more. Any menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup." />

      <BasicExample />
      <RightAligned />
      <SelectedState />
      <ListItems />
      <Divider />
      <Footer />
      <Filter />
      <Tabs />
      <Message />
      <Loading />
      <Blankslate />
    </div>
  );
}

export default index;
