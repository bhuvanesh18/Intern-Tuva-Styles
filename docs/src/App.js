import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Style Sheets
import "./css/main.css";

//Home and sidenavs
import Home from "./components/Home";
import SideNav from "./components/navigation/SideNav";

//Support
import BreakPoints from "./components/support/Breakpoints/index";
import ColorSystem from "./components/support/ColorSystem/index";
import Spacing from "./components/support/Spacing/index";
import Typography from "./components/support/Typography/index";
import Variables from "./components/support/Variables/index";

//Utilites
import Animation from "./components/utilities/Animation/index";
import Border from "./components/utilities/Border/index";
import BoxShadow from "./components/utilities/BoxShadow/index";
import Colors from "./components/utilities/Colors/index";
import Details from "./components/utilities/Details/index";
import FlexBox from "./components/utilities/FlexBox/index";
import Layout from "./components/utilities/Layout/index";
import Margin from "./components/utilities/Margin/index";
import Padding from "./components/utilities/Padding/index";
import UtilitiyTypography from "./components/utilities/Typography/index";

//Objects
import Grid from "./components/objects/grid/index";
import TableObject from "./components/objects/table_objects/index";

//Components
import Alert from "./components/component/alert/index";
import Avatar from "./components/component/avatars/index";
import Box from "./components/component/box/index";
import Breadcrumbs from "./components/component/breadcrumbs/index";
import Buttons from "./components/component/buttons/index";
import Dropdown from "./components/component/dropdown/index";
import Forms from "./components/component/forms/index";
import Labels from "./components/component/labels/index";
import Navigation from "./components/component/navigation/index";
import Pagination from "./components/component/pagination/index";
import Popover from "./components/component/popover/index";
import Progress from "./components/component/progress/index";
import SelectMenu from "./components/component/selectmenu/index";
import Subhead from "./components/component/subhead/index";
import Toast from "./components/component/toast/index";
import Tooltips from "./components/component/tooltips/index";
import Truncate from "./components/component/truncate/index";

//Marketing component
import Marketing from "./components/marketing/index";

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/support/breakpoints" exact component={BreakPoints} />
          <Route path="/support/colorsystem" exact component={ColorSystem} />
          <Route path="/support/spacing" exact component={Spacing} />
          <Route path="/support/typography" exact component={Typography} />
          <Route path="/support/variables" exact component={Variables} />

          <Route path="/utilities/animation" exact component={Animation} />
          <Route path="/utilities/border" exact component={Border} />
          <Route path="/utilities/box-shadow" exact component={BoxShadow} />
          <Route path="/utilities/colors" exact component={Colors} />
          <Route path="/utilities/details" exact component={Details} />
          <Route path="/utilities/flexbox" exact component={FlexBox} />
          <Route path="/utilities/layout" exact component={Layout} />
          <Route path="/utilities/margin" exact component={Margin} />
          <Route path="/utilities/padding" exact component={Padding} />
          <Route
            path="/utilities/typography"
            exact
            component={UtilitiyTypography}
          />

          <Route path="/objects/grid" exact component={Grid} />
          <Route path="/objects/table-object" exact component={TableObject} />

          <Route path="/components/alert" exact component={Alert} />
          <Route path="/components/avatar" exact component={Avatar} />
          <Route path="/components/box" exact component={Box} />
          <Route path="/components/breadcrumbs" exact component={Breadcrumbs} />
          <Route path="/components/buttons" exact component={Buttons} />
          <Route path="/components/dropdown" exact component={Dropdown} />
          <Route path="/components/forms" exact component={Forms} />
          <Route path="/components/labels" exact component={Labels} />
          <Route path="/components/navigation" exact component={Navigation} />
          <Route path="/components/pagination" exact component={Pagination} />
          <Route path="/components/popover" exact component={Popover} />
          <Route path="/components/progress" exact component={Progress} />
          <Route path="/components/select-menu" exact component={SelectMenu} />
          <Route path="/components/subhead" exact component={Subhead} />
          <Route path="/components/toasts" exact component={Toast} />
          <Route path="/components/tooltips" exact component={Tooltips} />
          <Route path="/components/truncate" exact component={Truncate} />

          {/*Test Marketing Component*/}
          <Route path="/marketing" exact component={Marketing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
