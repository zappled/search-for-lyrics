import React from "react";
import SearchQuotesContent from "../components/SearchQuotesContent";

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
              isLoading={props.isLoading}
              setIsLoading={props.setIsLoading}
              hasSearched={props.hasSearched}
              setHasSearched={props.setHasSearched}
              favIndicate={props.favIndicate}
              setFavIndicate={props.setFavIndicate}
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default SearchByContent;
