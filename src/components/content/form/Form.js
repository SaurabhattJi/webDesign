import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    state: "",
    city: "",
    zip: "",
  });

  const handle = (e) => {
    const newData = { ...state };
    newData[e.target.id] = e.target.value;
    setState(newData);
    // console.log(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <div className="formCont container-fluid nav_bg">
        <h3 className="pt-2" style={{ color: "white", textAlign: "center" }}>
          About You
        </h3>
        <div className="col-md-10 pt-3 mx-auto">
          <div className="container-fluid mx-10">
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col">
                  <input
                    type="text"
                    onChange={(e) => handle(e)}
                    value={state.name}
                    id="name"
                    className="form-control"
                    placeholder="Full name"
                    aria-label="Full name"
                    required={true}
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    onChange={(e) => handle(e)}
                    value={state.number}
                    id="number"
                    className="form-control"
                    placeholder="Contact number"
                    aria-label="Contact number"
                    required={true}
                  />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="email"
                    onChange={(e) => handle(e)}
                    value={state.email}
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    required={true}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => handle(e)}
                    value={state.password}
                    id="password"
                    placeholder="Your Password"
                    required={true}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    onChange={(e) => handle(e)}
                    value={state.address}
                    id="address"
                    className="form-control"
                    // id="inputAddress"
                    placeholder="Your Current Address"
                    required={true}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Your Permanent Address"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    onChange={(e) => handle(e)}
                    value={state.city}
                    id="city"
                    className="form-control"
                    // id="inputCity"
                    placeholder="City"
                  />
                </div>{" "}
                <div className="col-md-2">
                  <input
                    type="text"
                    onChange={(e) => handle(e)}
                    value={state.state}
                    id="state"
                    className="form-control"
                    // id="inputZip"
                    placeholder="State"
                    required={true}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    onChange={(e) => handle(e)}
                    value={state.zip}
                    id="zip"
                    className="form-control"
                    // id="inputZip"
                    placeholder="Zip"
                    required={true}
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridCheck"
                      style={{ color: "white" }}
                    >
                      Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="col-12 mx-auto mb-3">
                  <button className="btn btn-primary">Sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
