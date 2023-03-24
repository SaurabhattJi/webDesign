import React from "react";
import { FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="container ">
            <div className="about">
              <h3>Saurabh Bhatt</h3>
              <p>Frontend Web Developer </p>
            </div>
            <div className="subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/saurabh__bhatt_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/SaurabhattJi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 9411128869</h3>
              <h3>+91 9084824789</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>@{new Date().getFullYear()} SauraBhatt. All Rights Reserved</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
