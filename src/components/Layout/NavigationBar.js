import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./NavigationBar.css";

function NavigationBar() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const navBarHandler = () => {
    if (window.innerWidth >= 768) {
      setOpen(false);
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", navBarHandler);
    return () => window.removeEventListener("resize", navBarHandler);
  }, []);

  const handleClick = () => setClick(!click);

  const closeMenuHandler = () => {
    setClick(false);
    setOpen(false);
  };

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
            <li className="nav-item">
              <NavLink
                to="/discover"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenuHandler}
              >
                Discover
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/how-it-works"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenuHandler}
              >
                How it works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/upload"
                className="uploadBtn"
                onClick={closeMenuHandler}
              >
                Upload
              </NavLink>
            </li>
            <li className="nav-item">
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
