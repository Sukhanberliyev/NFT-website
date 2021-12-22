import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Container from "./Container"
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
        <Container>
          <div className="desktopNav">
            <NavLink to="/" className="navbar-logo" onClick={closeMenuHandler}>
              <img src={logo} alt="logo" />
              Cryptonite
            </NavLink>
            <div className="desktopMenu">
              <NavLink
                to="/discover"
                activeClassName="active"
                className="nav-links"
              >
                Discover
              </NavLink>
              <NavLink
                to="/how-it-works"
                activeClassName="active"
                className="nav-links"
              >
                How it works
              </NavLink>
              <NavLink
                to="/upload"
                className="uploadBtn"
              >
                Upload
              </NavLink>
              <NavLink
                to="/wallets"
                className="walletBtn"
              >
                Connect Wallet
              </NavLink>
            </div>
            <div className="burger" onClick={() => setOpen(!open)}>
              <span
                className={open ? "burgerLine active" : "burgerLine"}
              ></span>
              <span
                className={open ? "burgerLine active" : "burgerLine"}
              ></span>
              <span
                className={open ? "burgerLine active" : "burgerLine"}
              ></span>
            </div>
          </div>
          <div className="mobileNav">
            <div className={open ? "mobileMenu active" : "mobileMenu"}>
              <NavLink
                to="/discover"
                activeClassName="active"
                onClick={closeMenuHandler}
              >
                Discover
              </NavLink>
              <NavLink
                to="/how-it-works"
                activeClassName="active"
                onClick={closeMenuHandler}
              >
                How it works
              </NavLink>
              <NavLink
                to="/upload"
                onClick={closeMenuHandler}
              >
                Upload
              </NavLink>
              <NavLink
                to="/wallets"
                onClick={closeMenuHandler}
              >
                Connect Wallet
              </NavLink>
            </div>
            {open && (
              <div className="backdrop" onClick={() => setOpen(!open)}></div>
            )}
          </div>
          </Container>
      </nav>
    </>
  );
}

export default NavigationBar;
