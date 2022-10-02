import React from "react";

const SearchResults = (props) => {
  return (
    <button className="result-container">
      <div>{props.author}:</div>
      <div>{props.content}</div>
    </button>
  );
};

export default SearchResults;
