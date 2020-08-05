import React from "react";
import api from "../../api/componentsApi.json";
import EachSearchResult from "./EachSearchResult";

function SearchResults(props) {
  const { searchInputValue } = props;
  console.log(searchInputValue);

  // splited the single string search input into array
  let searchWordsArray = searchInputValue.split(" ").join("-").split("-");

  //set for accumulator results for each word in the array of splited search input
  let searchResultSet = new Set();
  let tempResult = [];

  for (var i = 0; i < searchWordsArray.length; i++) {
    tempResult = api.filter((component) =>
      component.keywords.some(
        (keyword) => keyword.indexOf(searchWordsArray[i]) >= 0
      )
    );
    //adding the temp result into the result set
    for (var j = 0; j < tempResult.length; j++) {
      searchResultSet.add(tempResult[j]);
    }
    tempResult = [];
  }
  //Final result array of result objects
  const searchResults = Array.from(searchResultSet);

  let haveResults = false;
  if (searchResults.length > 0) {
    haveResults = true;
  }
  return (
    <div
      id="searchResults"
      className="Box box-shadow-large bg-gray-dark container-lg clearfix d-inline-block position-fixed"
    >
      <h5 className="text-center text-yellow font-weight-normal py-2">
        Search Results
      </h5>
      {haveResults &&
        searchResults.map((component) => (
          <EachSearchResult key={component.id} component={component} />
        ))}
      {!haveResults && (
        <h4 className="text-center text-red bg-white font-weight-normal px-4 py-4 mb-2">
          No search results found!
        </h4>
      )}
    </div>
  );
}

export default SearchResults;
