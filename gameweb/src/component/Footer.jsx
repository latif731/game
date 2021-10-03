import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import googlePlay from "../asset/google-play.png";
import appleStore from "../asset/apple-store.png";
import free from "../asset/freedom.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-dark text-light pt-3">
        <div className="container d-flex border-bottom flex-column flex-md-row flex-lg-row">
          <div className="container mt-3">
            <a href="/" className="navbar-brand">
              <div className="text-light d-flex align-items-center">
                <img
                  src={free}
                  style={{ width: "200px", height: "200px" }}
                  alt="logo"
                />
              </div>
            </a>
          </div>
          <div className="mt-3 container d-flex justify-content-start jusify-content-sm-center justify-content-lg-center">
            <div className="d-flex flex-column" style={{ margin: "60px 0" }}>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard
                </p>
                {/* <a href="#">
                  <img src={googlePlay}></img>
                </a>
                <a href="#">
                  <img src={appleStore}></img>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 d-flex justify-content-center">
          {/* <p>Copyright © 2000-2002 MilanTV. All Rights Reserved</p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
