import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import A from "../images/favicon.png";
import "./Footer.css";

const Footer = () => {

    let date = new Date()
  let year = date.getFullYear()
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <h1 className="title" style={{ fontSize: "40px" }}>
                K R{" "}
                <Link to="/">
                  <img
                    className="logo"
                    src={A}
                    alt="Logo"
                    style={{ width: "45px", height: "45px" }}
                  />
                </Link>
                T E
              </h1>
            </div>
            <h3 className="website-rights">
              © Krate {year}. All rights reserved.
            </h3>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to={
                  "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                }
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
