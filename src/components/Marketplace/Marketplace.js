import React from "react";
import { Link } from "react-router-dom";
// importing css
import "./Marketplace.css";
// importing components
import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";
import MarketplaceDropdown from "./MarketplaceDropdown";
import Card from "../UI/Card";

// importing NFTs
import nftImage32 from "../../assets/images/nftImage32.png";
import nftImage27 from "../../assets/images/nftImage27.png";
import nftImage28 from "../../assets/images/nftImage28.png";
import nftImage29 from "../../assets/images/nftImage29.png";
import nftImage30 from "../../assets/images/nftImage30.png";
import nftImage31 from "../../assets/images/nftImage31.png";
import nftImage33 from "../../assets/images/nftImage33.png";
import nftImage34 from "../../assets/images/nftImage34.png";
import nftImage36 from "../../assets/images/nftImage36.png";

// importing creators
import creator12 from "../../assets/avatars/creator12.png";
import creator11 from "../../assets/avatars/creator11.png";
import creator15 from "../../assets/avatars/creator15.png";
import creator16 from "../../assets/avatars/creator16.png";
import creator17 from "../../assets/avatars/creator17.png";
import creator1 from "../../assets/avatars/creator1.png";
import creator2 from "../../assets/avatars/creator2.png";
import creator3 from "../../assets/avatars/creator3.png";
import creator4 from "../../assets/avatars/creator4.png";
import creator5 from "../../assets/avatars/creator5.png";
import creator6 from "../../assets/avatars/creator6.png";
import creator7 from "../../assets/avatars/creator7.png";
import creator8 from "../../assets/avatars/creator8.png";
import creator9 from "../../assets/avatars/creator9.png";

// importing DUMMY_DATA
const marketplaceNfts = [
  {
    id: "h1",
    mainNft: nftImage34,
    title: "Tauren Valley",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h2",
    mainNft: nftImage33,
    title: "Toxic Flamingos",
    bid: "2.37",
    creator1: creator1,
    creator2: creator2,
    creator3: creator3,
    amount: "5",
    price: "0.13",
  },
  {
    id: "h3",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.01",
    creator1: creator4,
    creator2: creator5,
    creator3: creator6,
    amount: "12",
    price: "0.09",
  },
  {
    id: "h4",
    mainNft: nftImage31,
    title: "Ethereuminisation",
    bid: "3.44",
    creator1: creator7,
    creator2: creator8,
    creator3: creator9,
    amount: "9",
    price: "0.9",
  },
  {
    id: "h5",
    mainNft: nftImage30,
    title: "Waterflamefall",
    bid: "2.09",
    creator1: creator1,
    creator2: creator12,
    creator3: creator5,
    amount: "4",
    price: "0.13",
  },
  {
    id: "h6",
    mainNft: nftImage29,
    title: "Digital Blade",
    bid: "2.11",
    creator1: creator15,
    creator2: creator2,
    creator3: creator7,
    amount: "22",
    price: "0.5",
  },
  {
    id: "h7",
    mainNft: nftImage28,
    title: "Norway",
    bid: "2.20",
    creator1: creator17,
    creator2: creator1,
    creator3: creator4,
    amount: "1",
    price: "0.01",
  },
  {
    id: "h8",
    mainNft: nftImage27,
    title: "Monstroo",
    bid: "1.88",
    creator1: creator8,
    creator2: creator3,
    creator3: creator11,
    amount: "10",
    price: "0.15",
  },
  {
    id: "h9",
    mainNft: nftImage36,
    title: "Cyber Disco",
    bid: "1.41",
    creator1: creator5,
    creator2: creator2,
    creator3: creator15,
    amount: "5",
    price: "0.13",
  },
];

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
          <div className="marketplaceWrapper">
            <div className="marketplaceList">
              {marketplaceNfts.map((marketplaceNft) => (
                <div className="marketplaceCard">
                  <Card
                    key={marketplaceNft.id}
                    mainNft={marketplaceNft.mainNft}
                    title={marketplaceNft.title}
                    bid={marketplaceNft.bid}
                    creator1={marketplaceNft.creator1}
                    creator2={marketplaceNft.creator2}
                    creator3={marketplaceNft.creator3}
                    amount={marketplaceNft.amount}
                    price={marketplaceNft.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Marketplace;
