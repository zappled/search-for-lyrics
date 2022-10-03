import React, { useState } from "react";

const SearchResults = (props) => {
  // const [extraContent, setExtraContent] = useState("");

  const toggleDetails = () => {
    if (props.showDetails === false) {
      props.setShowDetails(true);
    } else if (props.showDetails === true) {
      props.setShowDetails(false);
    }
  };

  return (
    <>
      <button className="result-container" onClick={toggleDetails}>
        <div className="quote-author">{props.author}:</div>
        <div className="quote-content">"{props.content}"</div>
        {props.showDetails ? (
          <div className="quote-extra">
            Quote length: <b>{props.content.split(" ").length} words</b>, tags:{" "}
            <b>
              <u>{props.tags?.toString().replace(",", ", ")}</u>
            </b>
          </div>
        ) : (
          ""
        )}
      </button>
    </>
  );
};

export default SearchResults;
