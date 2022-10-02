import React from "react";
import SearchSongContent from "../pages/SearchSongContent";

const SearchByContent = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <SearchSongContent />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default SearchByContent;
