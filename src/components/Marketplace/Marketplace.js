import React from "react";
import { Link } from "react-router-dom";
// importing css
import "./Marketplace.css";
// importing components
import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";
import MarketplaceDropdown from "./MarketplaceDropdown";

const dropdowns = [
  { id: "d1", label: "Price", options: ["Highest price", "The lowest price"] },
  { id: "d2", label: "Likes", options: ["Most liked", "Least liked"] },
  {
    id: "d3",
    label: "Creator",
    options: ["Verified only", "All", "Most liked"],
  },
];

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
        <div className="marketplaceRow">
          <div className="marketplaceFilters">
            <div className="range">
              <p className="rangeLabel">Price Range</p>
              <input type="range" min="0" max="100" className="slider" />
              <div className="rangeIndicators">
                <p className="rangeText">0.01 ETH</p>
                <p className="rangeText">10 ETH</p>
              </div>
            </div>
            <div className="marketplaceDropdowns">
              {dropdowns.map((dropdown) => (
                <MarketplaceDropdown
                  key={dropdown.id}
                  label={dropdown.label}
                  options={dropdown.options}
                />
              ))}
            </div>
          </div>
          <div className="marketplaceWrapper"></div>
        </div>
      </Container>
    </section>
  );
};

export default Marketplace;
