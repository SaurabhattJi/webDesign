import React from "react";
import "./trusted.css";
import { BsArrowRightCircle } from "react-icons/bs";

const Trusted = () => {
  return (
    <div className="File container-fluid nav_bg  my-5 ">
      <div className="row h-50">
        <div className="col-md-8 mx-auto">
          <div className="res d-flex">
            <div className="flex-1 px-4 mx-30">
              <h6 className="px-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                libero. Deserunt, iste. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Minus, libero. Deserunt, iste. libero.
                Deserunt, iste. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Minus, libero. Deserunt, iste.
              </h6>
            </div>
            <div className="d-flex mx-auto my-3 flex-1 px-4">
              <button
                style={{
                  background: "transparent",
                  backgroundColor: "#0d6efd",
                }}
              >
                Find Your Solution
              </button>
            </div>
            <h4 className="mx-auto my-2">
              Explore All Services
              <span className="Aro">
                <BsArrowRightCircle />
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
