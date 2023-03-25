import React from "react";
import { FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-dark " style={{ color: "white" }}>
        <footer className="main py-5">
          <div className="row me-0">
            <div className="col-6 col-md-2 mb-3 mx-5">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our Newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Your Email"
                    required={true}
                  />
                  <button
                    className="btn btn-primary m-auto"
                    type="submit"
                    fdprocessedid="xgr0ek"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="respon d-flex  flex-column flex-sm-row justify-content-between py-4 my-4 mx-5 border-top">
            <p style={{ textAlign: "center" }}>
              © 2023 Company, Inc. All rights reserved.
            </p>
            <ul
              style={{ placeContent: "center" }}
              className="list-unstyled d-flex"
            >
              <li className="ms-3">
                <a className="link-body-emphasis" href="/">
                  <FaInstagram />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://github.com/SaurabhattJi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="/">
                  <FaDiscord />
                </a>
              </li>
            </ul>
            <p style={{ textAlign: "center" }}>Abhiwan Technology Pvt Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
