import React from "react";
import Code from "../../../images/Code.jpg";
import Img from "../../../images/backimg.jpg";
import Abc from "../../../images/map.jpg";

const Success = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              style={{ backgroundColor: "white" }}
              className="Cardhover py-3"
            >
              <h6 style={{ textAlign: "center", fontWeight: "600" }}>
                Latest case studies
              </h6>
              <h3 style={{ textAlign: "center", paddingBottom: "25px" }}>
                Success Stories
              </h3>
              <div className="cont container-fluid nav_bg  ">
                <div className="mx-3 my-1">
                  <div className="mx-auto">
                    <div className=" row row-cols-1 row-cols-md-3 g-4">
                      <div className="col">
                        <div className=" card ">
                          <div className="card-body p-0">
                            <img src={Code} alt="" width="100%" />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className=" card ">
                          <div className="card-body p-0">
                            <img src={Img} alt="" width="100%" />
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card ">
                          <div className="card-body p-0">
                            <img src={Abc} alt="" width="100%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
