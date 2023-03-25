import React from "react";
import "./singlecard.css";
const SingleCard = ({ blacktext, greentext }) => {
  return (
    <div className="container-fluid nav_bg ">
      <div className="row">
        <div className="content text-center my-5 col-md-10 mx-auto">
          <div className="d-flex flex-column">
            <div className="textSm">{greentext}</div>
            <div className="textBg py-3">
              <h3>{blacktext}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
