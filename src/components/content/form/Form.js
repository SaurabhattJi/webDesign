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
                <h6 class="card-title px-4 mt-4">
                  Ensure High Availability of Your Service
                </h6>
                <h4 class="card-text px-4">
                  Easy Solution for All <br /> Difficult IT Problems, Keep
                  <br /> Business Safe & Ensure <br />
                  High Availability.
                </h4>
                <p class="card-text py-3 px-4">
                  <button>Get Started</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
