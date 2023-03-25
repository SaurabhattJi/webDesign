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
    <div className="Cardhover cont d-flex  container-fluid nav_bg  ">
      <div className="d-flex mx-3 my-1">
        <div className="d-flex mx-auto">
          <div className=" d-flex py-3">
            <div className="row d-flex  row-cols-1 row-cols-sm- row-cols-md-3 g-4">
              <div className="col">
                <div className="bgren card  h-400">
                  <div className="card-body">
                    <img src={Img} alt="" width="100%" />
                    <h1 className="card-title">
                      <TbNetwork />
                    </h1>
                    <h4 className="dumtext">{texth3}</h4>
                    <p className="card-text h-20">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bgren card h-100">
                  <div className="card-body">
                    <img src={Bg} alt="" width="100%" />
                    <h1 className="card-title">
                      <IoMdGitNetwork />
                    </h1>
                    <h4>{texth3}</h4>
                    <p className="card-text">
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="bgren card-body">
                    <img src={Tcd} alt="" width="100%" />
                    <h1 className="card-title">
                      <SiNintendonetwork />
                    </h1>
                    <h4>{texth3}</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
