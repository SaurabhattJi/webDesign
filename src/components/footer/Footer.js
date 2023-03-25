import React from "react";
import { FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div class="bg-dark " style={{ color: "white" }}>
        <footer class="py-5">
          <div class="row me-0">
            <div class="col-6 col-md-2 mb-3 mx-5">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Your Email"
                    required={true}
                  />
                  <button
                    class="btn btn-primary"
                    type="submit"
                    fdprocessedid="xgr0ek"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 mx-5 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a
                  class="link-body-emphasis"
                  href="https://www.instagram.com/saurabh__bhatt_/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="link-body-emphasis"
                  href="https://github.com/SaurabhattJi"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
