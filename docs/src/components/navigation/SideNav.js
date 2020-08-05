import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

class SideNav extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div id="sidenav" className="bg-gray-dark text-white">
          <div className="sidenavheader">
            <h2 className="text-white text-shadow-light font-weight-medium">
              Tuva Styles
            </h2>
          </div>
          <div className="divider">
            <h3 className="font-weight-medium">Support</h3>
            <ul>
              <NavLink to="/support/breakpoints" activeClassName="active">
                <li>Breakpoints</li>
              </NavLink>
              <NavLink to="/support/colorsystem" activeClassName="active">
                <li>Color System</li>
              </NavLink>
              <NavLink to="/support/spacing" activeClassName="active">
                <li>Spacing</li>
              </NavLink>
              <NavLink to="/support/typography" activeClassName="active">
                <li>Typography</li>
              </NavLink>
              <NavLink to="/support/variables" activeClassName="active">
                <li>Variables</li>
              </NavLink>
            </ul>
          </div>
          <div className="divider">
            <h3 className="font-weight-medium">Utilities</h3>
            <ul>
              <NavLink to="/utilities/animation" activeClassName="active">
                <li>Animation</li>
              </NavLink>
              <NavLink to="/utilities/border" activeClassName="active">
                <li>Border</li>
              </NavLink>
              <NavLink to="/utilities/box-shadow" activeClassName="active">
                <li>Box-shadow</li>
              </NavLink>
              <NavLink to="/utilities/colors" activeClassName="active">
                <li>Colors</li>
              </NavLink>
              <NavLink to="/utilities/details" activeClassName="active">
                <li>Details</li>
              </NavLink>
              <NavLink to="/utilities/flexbox" activeClassName="active">
                <li>Flexbox</li>
              </NavLink>
              <NavLink to="/utilities/layout" activeClassName="active">
                <li>Layout</li>
              </NavLink>
              <NavLink to="/utilities/margin" activeClassName="active">
                <li>Margin</li>
              </NavLink>
              <NavLink to="/utilities/padding" activeClassName="active">
                <li>Padding</li>
              </NavLink>
              <NavLink to="/utilities/typography" activeClassName="active">
                <li>Typography</li>
              </NavLink>
            </ul>
          </div>
          <div className="divider">
            <h3 className="font-weight-medium">Objects</h3>
            <ul>
              <NavLink to="/objects/grid" activeClassName="active">
                <li>Grid</li>
              </NavLink>
              <NavLink to="/objects/table-object" activeClassName="active">
                <li>Table object</li>
              </NavLink>
            </ul>
          </div>
          <div className="divider">
            <h3 className="font-weight-medium">Components</h3>
            <ul>
              <NavLink to="/components/alert" activeClassName="active">
                <li>Alert</li>
              </NavLink>
              <NavLink to="/components/avatar" activeClassName="active">
                <li>Avatar</li>
              </NavLink>
              <NavLink to="/components/box" activeClassName="active">
                <li>Box</li>
              </NavLink>
              <NavLink to="/components/breadcrumbs" activeClassName="active">
                <li>Breadcrumbs</li>
              </NavLink>
              <NavLink to="/components/buttons" activeClassName="active">
                <li>Buttons</li>
              </NavLink>
              <NavLink to="/components/dropdown" activeClassName="active">
                <li>Dropdown</li>
              </NavLink>
              <NavLink to="/components/forms" activeClassName="active">
                <li>Forms</li>
              </NavLink>
              <NavLink to="/components/labels" activeClassName="active">
                <li>Labels</li>
              </NavLink>
              <NavLink to="/components/navigation" activeClassName="active">
                <li>Navigation</li>
              </NavLink>
              <NavLink to="/components/pagination" activeClassName="active">
                <li>Pagination</li>
              </NavLink>
              <NavLink to="/components/popover" activeClassName="active">
                <li>Popover</li>
              </NavLink>
              <NavLink to="/components/progress" activeClassName="active">
                <li>Progress</li>
              </NavLink>
              <NavLink to="/components/select-menu" activeClassName="active">
                <li>Select-menu</li>
              </NavLink>
              <NavLink to="/components/subhead" activeClassName="active">
                <li>Subhead</li>
              </NavLink>
              <NavLink to="/components/toasts" activeClassName="active">
                <li>Toasts</li>
              </NavLink>
              <NavLink to="/components/tooltips" activeClassName="active">
                <li>Tooltips</li>
              </NavLink>
              <NavLink to="/components/truncate" activeClassName="active">
                <li>Truncate</li>
              </NavLink>
            </ul>
          </div>
          <div className="divider">
            <h3 className="font-weight-medium">Marketing</h3>
            <ul>
              <NavLink to="/marketing" activeClassName="active">
                <li>Marketing</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
