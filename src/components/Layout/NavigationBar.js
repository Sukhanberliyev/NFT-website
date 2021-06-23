import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import logo from "../../assets/logo.png"

const NavigationBar = () => {
  return (
    <header>
      <div className={classes.center}>
        <div className={classes.navBar}>
          <div>
            <NavLink to="/" className={classes.logo}>
              <img src={logo} alt="" />
              Cryptonite
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink className={classes.links} to="/discover">
                  Discover
                </NavLink>
              </li>
              <li>
                <NavLink className={classes.links} to="/how-it-works">
                  How it works?
                </NavLink>
              </li>
              <li>
                <NavLink className={classes.uploadBtn} to="/upload">
                  Upload
                </NavLink>
              </li>
              <li>
                <NavLink className={classes.walletBtn} to="/connect-wallet">
                  Connect Wallet
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
