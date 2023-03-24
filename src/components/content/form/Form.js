import React from "react";
import Maps from "../../../images/map.jpg";
import "./form.css";

const Form = () => {
  return (
    <>
      <div class="card text-bg-dark rounded-0">
        <img src={Maps} class="card-img" alt="..." />
        <div className="container-fluid nav_bg ">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div class="card-img-overlay">
                <h6 class="card-title">
                  Ensure High Availability of Your Service
                </h6>
                <h4 class="card-text">
                  Easy Solution for All <br /> Difficult IT Problems, Keep
                  <br /> Business Safe & Ensure <br />
                  High Availability.
                </h4>
                <p class="card-text">
                  <button>Get Started</button>
                </p>
                <div
                  className="px-5 py-2 rounded-3"
                  style={{
                    background: "transparent",
                    backgroundColor: "#6c757d33",
                  }}
                >
                  <div class="row g-3">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <div class="row g-3 py-3">
                    <div class="col-sm-7">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                        aria-label="City"
                      />
                    </div>
                    <div class="col-sm ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="State"
                        aria-label="State"
                      />
                    </div>
                    <div class="col-sm">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Zip"
                        aria-label="Zip"
                      />
                    </div>
                  </div>
                </div>
                <button className="mx-auto my-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
