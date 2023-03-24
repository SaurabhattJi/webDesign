import React from "react";
import "./singlecard.css";
const SingleCard = () => {
  return (
    <div className="container-fluid nav_bg ">
      <div className="row">
        <div className="content text-center my-5 col-md-10 mx-auto">
          <div className="d-flex flex-column">
            <div className="textSm">Worldwide Service</div>
            <div className="textBg py-3">
              <h3>
                Our technology allows you to offer
                <br /> the latest software
                <br /> to your possible customers!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
