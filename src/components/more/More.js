import React from "react";
import Img from "../../images/backimg.jpg";
import Code from "../../images/Code.jpg";
import Button from "../button/Button";
import "./more.css";

const More = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h2>
              <strong>
                Latest Software
                <br /> To Your Possible <br /> Customers!!
              </strong>
            </h2>
            <h5>
              We are experienced professionals who understand it service is
              <br />
              changing and true partners who care about your success.
            </h5>
            <div style={{ paddingTop: "20px" }}>
              <Button text={"Get Started"} />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Code} className="d-block w-100" alt="..." />
          <div
            style={{ borderBottom: "250px" }}
            className="carousel-caption  d-md-block"
          >
            <h2>
              <strong>
                Latest Software
                <br /> To Your Possible <br /> Customers!!
              </strong>
            </h2>
            <h5>
              We are experienced professionals who understand it service is
              <br />
              changing and true partners who care about your success.
            </h5>
            <div style={{ paddingTop: "20px" }}>
              <Button text={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
      <button
        className="caro carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="caro carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default More;
