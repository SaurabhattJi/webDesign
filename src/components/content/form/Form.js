import React from "react";
import "./form.css";

const Form = () => {
  return (
    <>
      <div className="formCont container-fluid nav_bg">
        <h3 className="pt-2" style={{ color: "white", textAlign: "center" }}>
          About You
        </h3>
        <div className="col-md-10 pt-3 mx-auto">
          <div className="container-fluid mx-10">
            <div class="row g-3 mb-3">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full name"
                  aria-label="Full name"
                  required={true}
                />
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Contact number"
                  aria-label="Contact number"
                  required={true}
                />
              </div>
            </div>
            <form class="row g-3">
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Your Email"
                  required={true}
                />
              </div>
              <div class="col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Your Password"
                  required={true}
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Your Current Address"
                  required={true}
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Your Permanent Address"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              <div class="col-md-4">
                <select id="inputState" class="form-select">
                  <option selected>Select State</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Uttarakhand</option>
                  <option>Himanchal</option>
                  <option>Panjab</option>
                </select>
              </div>
              <div class="col-md-2">
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  placeholder="Zip"
                  required={true}
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    class="form-check-label"
                    for="gridCheck"
                    style={{ color: "white" }}
                  >
                    Terms & Conditions
                  </label>
                </div>
              </div>
              <div class="col-12 mx-auto mb-3">
                <button type="submit" class="btn btn-success">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
