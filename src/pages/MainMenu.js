import React, { useState } from "react";
import SearchQuotesAuthor from "./SearchQuotesAuthor";

const MainMenu = (props) => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <SearchQuotesAuthor
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

export default MainMenu;
