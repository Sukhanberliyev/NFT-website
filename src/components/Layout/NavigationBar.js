import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./NavigationBar.css";

function NavigationBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenuHandler = () => {
    setClick(false);
    setOpen(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMenuHandler}>
            <img src={logo} alt="" />
            Cryptonite
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i
              onClick={() => setOpen(!open)}
              className={click ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
          {open && <div className="backdrop" onClick={closeMenuHandler} />}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                to="/discover"
                className="nav-links"
                onClick={closeMenuHandler}
              >
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className="nav-links"
                onClick={closeMenuHandler}
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upload"
                className="uploadBtn"
                onClick={closeMenuHandler}
              >
                Upload
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/connect-wallet"
                className="walletBtn"
                onClick={closeMenuHandler}
              >
                Connect Wallet
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
