import React from "react";
import "./maincard.css";
import { TbNetwork } from "react-icons/tb";
import { IoMdGitNetwork } from "react-icons/io";
import { SiNintendonetwork } from "react-icons/si";
import Img from "../../../images/backimg.jpg";
import Bg from "../../../images/Code.jpg";
import Tcd from "../../../images/jgh.jpg";

const MainCard = ({ texth3 }) => {
  return (
    <div className="Cardhover" style={{ padding: "25px 0" }}>
      <div className="cont container-fluid nav_bg  ">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div class="container row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-400">
                  <div class="card-body">
                    <img src={Img} alt="" width="100%" />
                    <h1 class="card-title">
                      <TbNetwork />
                    </h1>
                    <h3>{texth3}</h3>
                    <p class="card-text h-20">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                      with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <img src={Bg} alt="" width="100%" />
                    <h1 class="card-title">
                      <IoMdGitNetwork />
                    </h1>
                    <h3>{texth3}</h3>
                    <p class="card-text">
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                      with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <img src={Tcd} alt="" width="100%" />
                    <h1 class="card-title">
                      <SiNintendonetwork />
                    </h1>
                    <h3>{texth3}</h3>
                    <p class="card-text">
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                      with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default MainCard;
