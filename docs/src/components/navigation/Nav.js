import React, { useState, useEffect } from "react";
import Search from "./../search/Search";
import SearchResults from "./../search/SearchResults";
import $ from "jquery";

function Nav() {
  useEffect(() => {
    $("#tuva-menu").on("click", function () {
      if ($("#checkbox_id").prop("checked") === true) {
        $("#sidenav").css("display", "inline-block");
        $(".tuva-container").css({
          "margin-left": "340px",
          "margin-right": "80px",
        });
        $("#menu_value").text("X");
      } else {
        $("#sidenav").css("display", "none");
        $(".tuva-container").css({
          "margin-left": "30px",
          "margin-right": "30px",
        });
        $("#menu_value").text("|||");
      }
    });
  }, []);

  const [isSearchEmpty, setSearchEmpty] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="nav box-shadow-medium p-5 bg-gray-dark  d-flex flex-wrap flex-content-center">
        <h2 className="text-blue text-shadow-light font-weight-medium float-left mr-6">
          Tuva Styles
        </h2>
        <Search
          handler={setSearchEmpty}
          setSearchValueHandler={setSearchValue}
        />
      </div>
      {!isSearchEmpty && <SearchResults searchInputValue={searchValue} />}
      <label htmlFor="checkbox_id" id="tuva-menu" className="btn btn-primary">
        <h6 id="menu_value">X</h6>
      </label>
      <input type="checkbox" id="checkbox_id" />
    </>
  );
}

export default Nav;
