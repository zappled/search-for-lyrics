import React, { useState } from "react";

const SearchResults = (props) => {
  // const [extraContent, setExtraContent] = useState("");

  const [details, setDetails] = useState(false);

  // const toggleDetails = (index) => {
  //   if (props.showDetails === false) {
  //     props.setShowDetails(true);
  //   } else if (props.showDetails === true) {
  //     props.setShowDetails(false);
  //   }
  // };

  return (
    <>
      <div
        className="result-container"
        // onClick={() => toggleDetails(props.index)}
        onClick={() => setDetails(!details)}
      >
        <div className="quote-author">{props.author}:</div>
        <div className="quote-content">"{props.content}"</div>
        {/* {props.showDetails ? ( */}
        {details ? (
          <>
            <div className="quote-extra">
              Quote length: <b>{props.content.split(" ").length} words</b>,
              tags:{" "}
              <b>
                <u>{props.tags?.toString().replace(",", ", ")}</u>
              </b>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {details ? (
        <button className="add-fav">
          <i className="material-icons">favorite</i>Add to Favourites
        </button>
      ) : (
        ""
      )}
      {/* <button className="add-fav">
        <i className="material-icons">favorite</i>
      </button> */}
    </>
  );
};

export default SearchResults;

// add 'create own quote' function as stretch goal
