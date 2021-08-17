import React from "react";
import { Link } from "react-router-dom";
// importing css
import "./Marketplace.css";
// importing components
import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";

const Marketplace = () => {
  const discoverTimeframe = ["Newest", "Oldest"];
  return (
    <section className="marketplace">
      <Container>
        <div className="marketplaceTop">
          <p className="marketplaceTitle">Type your keywords</p>
          <form action="" className="marketplaceSearch">
            <input
              className="marketplaceInput"
              type="text"
              name="search"
              placeholder="Search"
              required
            />
            <button className="marketplaceBtn">S</button>
          </form>
        </div>
        <div className="marketplaceSorting">
          <div className="marketplaceDropdown">
            <Dropdown options={discoverTimeframe} />
          </div>
          <div className="marketplaceNav">
            <Link className="marketplaceLink active">All items</Link>
            <Link className="marketplaceLink">Art</Link>
            <Link className="marketplaceLink">Photography</Link>
            <Link className="marketplaceLink">Music</Link>
            <Link className="marketplaceLink">Video</Link>
          </div>
        </div>
        <div className="marketplaceRow"></div>
      </Container>
    </section>
  );
};

export default Marketplace;
