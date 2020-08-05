import React from "react";
import { ComponentHeading, Paragraph } from "../../mini_components";
import Content from "./Content";
import Menu from "./Menu";
import UnderlineNav from "./UnderlineNav";
import SideNav from "./SideNav";
import TabNav from "./TabNav";
import FilterList from "./FilterList";
import SubNavigation from "./SubNavigation";

function index() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Navigation"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/tree/dev-1/src/navigation"
      />
      <Content />
      <Paragraph paragraph="Primer CSS comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently." />

      <Menu />
      <UnderlineNav />
      <SideNav />
      <TabNav />
      <FilterList />
      <SubNavigation />
    </div>
  );
}

export default index;
