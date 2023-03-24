import React from "react";
import Img from "../../images/backimg.jpg";
import Code from "../../images/Code.jpg";
import Button from "../button/Button";
import "./more.css";

const More = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Img} class="d-block w-100" alt="..." />
          <div class="carousel-caption  d-md-block">
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
        <div class="carousel-item">
          <img src={Code} class="d-block w-100" alt="..." />
          <div
            style={{ borderBottom: "250px" }}
            class="carousel-caption  d-md-block"
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
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{ marginTop: "250px" }}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{ marginTop: "250px" }}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default More;
