import React from "react";

import "./Marketplace.css"; // importing css
import Container from "../Layout/Container";
import MarketplaceBottom from "./MarketplaceBottom";
import search from "../../assets/icons/search.svg"; // importing icons



const Marketplace = () => {
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
            <button className="marketplaceBtn">
              <img src={search} alt="icon" />
            </button>
          </form>
        </div>
        <MarketplaceBottom />
      </Container>
    </section>
  );
};

export default Marketplace;
