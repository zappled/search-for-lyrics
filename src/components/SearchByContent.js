import React from "react";
import SearchQuotesContent from "../pages/SearchQuotesContent";

const SearchByContent = (props) => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <SearchQuotesContent
              setFavList={props.setFavList}
              favList={props.favList}
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default SearchByContent;
