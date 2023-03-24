import React from "react";
import { BsSearch } from "react-icons/bs";
import Button from "../button/Button";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <nav class="navbar navbar-expand-lg bg-light ">
              <div class="container-fluid mx-auto">
                <a class="navbar-brand " href="#">
                  🅰️🅱
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  className="mainNav collapse ms-150 navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mx-auto px-auto mb-2 mx-lg-0 mb-lg-0">
                    <li class="nav-item">
                      <a
                        class="nav-link active navborder"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active navborder" href="#">
                        Company
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  active navborder" href="#">
                        Contact
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active navborder" href="#">
                        News&Media
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active navborder" href="#">
                        Features
                      </a>
                    </li>
                    <span className=" mar mx-15 my-20">
                      <Button text={"Reaquest a Ques"} />
                    </span>
                    <span className="mysearch">
                      <BsSearch />
                    </span>
                  </ul>
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
