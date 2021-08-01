import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// importing css
import "./Footer.css";
// importing components
import Container from "./Container";

// importing assests
import logo from "../../assets/logo.png";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const dropHandler = () => {
    setOpen(!open);
  };
  const dropHandlerTwo = () => {
    setOpenTwo(!openTwo);
  };

  return (
    <footer>
      <Container>
        <div className="footerRow">
          <div className="footerColumn">
            <Link className="footerLogo">
              <img src={logo} alt="logo" />
              <p>Cryptonite</p>
            </Link>
            <p className="footerInfo">The New Creative Economy</p>
            <div className="footerMode">
              <p className="footerDetails">Dark mode</p>
              {/* toggleHandler goes here */}
            </div>
          </div>
          <div className="footerColumn">
            <div className="footerGroup">
              <div className="footerHead" onClick={dropHandler}>
                Cryptonite
                <FontAwesomeIcon
                  className={open ? "icon" : "iconActive"}
                  icon={faChevronDown}
                />
              </div>
              <div className={`footerBody ${open ? "display" : ""}`}>
                <div className="footerMenu">
                  <Link className="footerLink">Discover</Link>
                  <Link className="footerLink">Connect Wallet</Link>
                </div>
              </div>
            </div>
            <div className="footerGroup">
              <div className="footerHead" onClick={dropHandlerTwo}>
                Info
                <FontAwesomeIcon
                  className={openTwo ? "icon" : "iconActive"}
                  icon={faChevronDown}
                />
              </div>
              <div className={`footerBody ${openTwo ? "displayBlock" : ""}`}>
                <div className="footerMenu">
                  <Link className="footerLink">FAQ</Link>
                  <Link className="footerLink">Create item</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footerColumn">
            <p className="footerCategory">Join Newsletter</p>
            <p className="footerText">
              Subscribe our newsletter to get more free design course and
              resource
            </p>
            <form className="subscription" action="">
              <input
                className="subscriptionInput"
                type="email"
                name="email"
                placeholder="Enter your email"
                required="required"
              />
              <button className="subscriptionBtn">{/* <svg></svg> */}N</button>
            </form>
          </div>
        </div>
        <div className="footerFoot">
          <p className="footerCopyright">
            Copyright © 2021 UI8 LLC. All rights reserved
          </p>
          <div className="footerNote">
            We use cookies for better service.
            <Link to="#">Accept</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
