import React from "react";

import Button from "../button/Button";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light ">
              <div className="container-fluid mx-auto">
                <a className="navbar-brand " href="/">
                  🅰️🅱
                </a>
                <button
                  style={{ boxShadow: "none" }}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon box-shadow-0"></span>
                </button>
                <div
                  className="mainNav collapse ms-150 navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto px-auto mb-2 mx-lg-0 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active navborder"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active navborder" href="/">
                        Company
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  active navborder" href="/">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active navborder" href="/">
                        News&Media
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active navborder" href="/">
                        Features
                      </a>
                    </li>
                    <span className=" mar mx-15 my-20">
                      <Button text={"Reaquest a Ques"} />
                    </span>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className=" form-control me-2"
                      type="search"
                      style={{ width: "150px" }}
                      placeholder="Search ..."
                      aria-label="Search"
                    />
                    <button
                      style={{ width: "100px" }}
                      className="btn btn-outline-primary w-30"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
