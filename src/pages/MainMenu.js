import React from "react";
import SearchQuotesAuthor from "./SearchQuotesAuthor";

const MainMenu = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <SearchQuotesAuthor />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
