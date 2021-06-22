import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/discover">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works">How it works?</NavLink>
          </li>
          <li>
            <NavLink to="/upload">Upload</NavLink>
          </li>
          <li>
            <NavLink to="/connect-wallet">Connect Wallet</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
