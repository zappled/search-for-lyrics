import React, { useState, useEffect } from "react";
import Favourites from "../components/Favourites";

const FavouritesPage = (props) => {
  const [showConfirmBox, setShowConfirmBox] = useState("none");

  //sortType state is used to sort entries within favourites list
  const [sortType, setSortType] = useState("");

  const confirmEmpty = () => {
    setShowConfirmBox("block");
  };

  const clickYes = () => {
    props.setFavList([]);
    setShowConfirmBox("none");
  };

  const clickNo = () => {
    setShowConfirmBox("none");
  };

  //useEffect sorts entries within favourites list, based on selected property
  useEffect(() => {
    const sortArray = (type) => {
      const property = type;
      const sortList = [...props.favList];
      if (property === "author" || property === "tags") {
        sortList.sort((a, b) =>
          a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
        );
      } else if (property === "length") {
        sortList.sort((a, b) =>
          b.content.split(" ").length > a.content.split(" ").length
            ? 1
            : a.content.split(" ").length > b.content.split(" ").length
            ? -1
            : 0
        );
      }
      props.setFavList(sortList);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <>
      {/* Favourites page toggles depending on whether there is already an entry */}
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <div>Need a reference? View your favourite quotes here:</div>

            {props.favList.length !== 0 ? (
              <>
                <div className="quote-extra">
                  <select
                    style={{
                      marginLeft: "5px",
                      marginBottom: "12.5px",
                      marginTop: "12.5px",
                    }}
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option>Sort favourites by...</option>
                    <option value="author">Author</option>
                    <option value="length">Length</option>
                    <option value="tags">Tags</option>
                  </select>
                  <br />
                  <button
                    className="remove-fav"
                    onClick={confirmEmpty}
                    style={{ marginBottom: "10px" }}
                  >
                    Clear Favourites List
                  </button>
                </div>
                {props.favList.map((fav) => {
                  return (
                    <Favourites
                      content={fav.content}
                      author={fav.author}
                      length={fav.length}
                      tags={fav.tags}
                      key={Math.random()}
                      favList={props.favList}
                      setFavList={props.setFavList}
                      fav={fav}
                    />
                  );
                })}
              </>
            ) : (
              <>
                <br />
                <div className="fav-empty">
                  <i>Add a favourite to start viewing your list</i>
                </div>
              </>
            )}
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* additional div for confirmation box, hidden by default */}
      <div className="confirm-box" style={{ display: showConfirmBox }}>
        <div className="confirm-text">
          Are you sure you want to empty your favourites list?
        </div>
        <div className="confirm-text">
          <button className="confirm-button" onClick={clickYes}>
            Yes
          </button>
          <button className="confirm-button" onClick={clickNo}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default FavouritesPage;
