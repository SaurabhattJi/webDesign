import React from "react";
import "./textfile.css";
import Img from "../../../images/Code.jpg";
import { TiTick } from "react-icons/ti";
import Button from "../../button/Button";

const Textfile = () => {
  return (
    <>
      <div
        className="textFile d-flex container-fluid nav_bg"
        style={{ marginTop: "75px" }}
      >
        <div className=" flex-1 ">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="firstDiv">
                <div className="card-body">
                  <p className="card-text">
                    Ensure high availablity of your service
                  </p>
                  <h5 className="mine card-title">
                    Keep Your Business Safe &
                    <br /> Ensure High Availablity
                  </h5>

                  <img
                    src={Img}
                    style={{ marginTop: "45px", height: "40vh" }}
                    className="card-img-top"
                    alt="..."
                    width="25px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid nav_bg flex-1 ">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h6 style={{ marginTop: "30px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                delectus unde excepturi doloremque libero quia totam pariatur,
                iste nulla quasi repudiandae quos officia cupiditate! Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
                repellat. Repellendus animi necessitatibus provident explicabo
                ex doloribus aliquam odio saepe ipsa, repudiandae sunt repellat
                dolorum.
              </h6>

              <div
                style={{ color: "#38e54d", fontSize: "20px" }}
                className="my-5 d-flex "
              >
                <TiTick />
                <span style={{ color: "black" }}>
                  <p>Delivered in more than 45000 client's interaction</p>
                </span>
              </div>
              <div
                style={{ color: "#38e54d", fontSize: "20px" }}
                className="my-5 d-flex "
              >
                <TiTick />
                <span style={{ color: "black" }}>
                  <p>
                    Provide Daily basis services to help critical challenges
                  </p>
                </span>
              </div>
              <div
                style={{ color: "#38e54d", fontSize: "20px" }}
                className="my-5 d-flex "
              >
                <TiTick />
                <span style={{ color: "black" }}>
                  <p>Complimeted by peer persespective and advice</p>
                </span>
              </div>
              <div className="BUtton">
                <Button text={"More About Us ➡️"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textfile;
