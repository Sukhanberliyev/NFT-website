import React from "react";
import { Link } from "react-router-dom";

// importing components
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="footerRaw">
          <div className="footerColumn">
            <Link className="footerLogo">
              <img src="" alt="logo" />
            </Link>
            <p>The New Creative Economy</p>
            <div className="footerMode">
              <p className="footerDetails">Dark mode</p>
              {/* toggleHandler goes here */}
            </div>
          </div>
          <div className="footerColumn">
            <div className="footerGroup">
              <div className="footerHead">
                Cryptonite
                <svg></svg>
              </div>
              <div className="footerBody">
                <div className="footerMenu">
                  <Link>Discover</Link>
                  <Link>Connect Wallet</Link>
                </div>
              </div>
            </div>
            <div className="footerGroup">
              <div className="footerHead">
                Info
                <svg></svg>
              </div>
              <div className="footerBody">
                <div className="footerMenu">
                  <Link>FAQ</Link>
                  <Link>Create item</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footerColumn">
            <p className="footerCategory">Join Newsletter</p>
            <p className="footerText">Subscribe our newsletter to get more free design course and resource</p>
            <form className="subscription" action="">
              <input className="subscriptionInput" type="email" name="email" placeholder="Enter your email" required="required" />
              <button className="subscriptionBtn">
                <svg></svg>
              </button>
            </form>
          </div>
        </div>
        <div className="footerFoot"></div>
      </Container>
    </div>
  );
};

export default Footer;
