import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import "./card.css";
import Button from "../../button/Button";

const Card = () => {
  return (
    <>
      <div className="  container-fluid nav_bg my-10 ">
        <div className="d-flex row ">
          <div className="mainDiva d-flex col-md-10 mx-auto">
            <div class="hoverCard card my-5 mx-2">
              <div class="mainCard card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting
                  <br /> text below as a natural lead-in to <br /> additional
                  content
                </p>
                <BsArrowRightCircle />
              </div>
            </div>
            <div class="hoverCard card my-5 mx-2">
              <div class="mainCard card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting
                  <br /> text below as a natural lead-in to <br /> additional
                  content
                </p>
                <BsArrowRightCircle />
              </div>
            </div>
            <div class="hoverCard card my-5 mx-2">
              <div class="mainCard card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting
                  <br /> text below as a natural lead-in to <br /> additional
                  content
                </p>
                <BsArrowRightCircle />
              </div>
            </div>

            <div class="hoverCard card my-5 mx-2">
              <div class="mainCard card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati delectus saeplor sit amet, con
                </p>
                <div className="circle" style={{ display: "flex" }}>
                  <Button text={"Find Your Solutions"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
