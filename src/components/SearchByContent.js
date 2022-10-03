import React from "react";
import SearchQuotesContent from "../pages/SearchQuotesContent";

const SearchByContent = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <SearchQuotesContent />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default SearchByContent;
