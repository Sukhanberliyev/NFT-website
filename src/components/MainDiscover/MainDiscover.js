import React from "react";
import { Link } from "react-router-dom";

// importing components
import "./MainDiscover.css";
// importing components
import Dropdown from "../UI/Dropdown";
import Container from "../Layout/Container";
import Card from "../UI/Card";
import MainButton from "../UI/MainButton";

// importing NFTs
import nftImage32 from "../../assets/images/nftImage32.png";
import nftImage27 from "../../assets/images/nftImage27.png";
import nftImage28 from "../../assets/images/nftImage28.png";
import nftImage29 from "../../assets/images/nftImage29.png";
import nftImage30 from "../../assets/images/nftImage30.png";
import nftImage31 from "../../assets/images/nftImage31.png";
import nftImage33 from "../../assets/images/nftImage33.png";
import nftImage34 from "../../assets/images/nftImage34.png";

// importing creators
import creator24 from "../../assets/avatars/creator24.png";
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
import Slider from "react-slick";
import MainDiscoverDropdown from "./MainDiscoverDropdown";

// importing DUMMY_DATA
const discoverNfts = [
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage32,
    title: "Space Park",
    bid: "2.45",
    creator1: creator24,
    creator2: creator12,
    creator3: creator11,
    amount: "1",
    price: "0.1",
  },
];

// --------------- Setting out slider's setting ---------------
var settings = {
  dots: true,
  rows: 2,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        rows: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        rows: 4,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};
// --------------- Slider's setting end ---------------

const dropdowns = [
  { id: "d1", label: "Price", options: ["Highest price", "The lowest price"] },
  { id: "d2", label: "Likes", options: ["Most liked", "Least liked"] },
  { id: "d2", label: "Creator", options: ["Verified only", "All", "Most liked"] },
  { id: "d2", label: "Price Range", options: ["1", "2", "3"] },
];

const MainDiscover = () => {
  const mySlider = settings;

  return (
    <section className="discover">
      <Container>
        <h3 className="discoverTitle">Discover</h3>
        <div className="discoverTop">
          <div className="timeFrameDropDown">
            <Dropdown />
          </div>
          <div className="discoverNav">
            <Link className="discoverLink">All items</Link>
            <Link className="discoverLink">Art</Link>
            <Link className="discoverLink">Game</Link>
            <Link className="discoverLink">Photography</Link>
            <Link className="discoverLink">Music</Link>
            <Link className="discoverLink">Video</Link>
          </div>
          <div className="tabletShow">
            <Dropdown />
          </div>
          <MainButton>Filter</MainButton>
        </div>
        <div className="discoverFilters">
          <div className="discoverSorting">
            {dropdowns.map((dropdown) => (
              <MainDiscoverDropdown
                key={dropdown.id}
                label={dropdown.label}
                options={dropdown.options}
              />
            ))}
          </div>
        </div>
        <div className="discoverList">
          <Slider {...mySlider}>
            {discoverNfts.map((discoverNft) => (
              <Card
                key={discoverNft.id}
                mainNft={discoverNft.mainNft}
                title={discoverNft.title}
                bid={discoverNft.bid}
                creator1={discoverNft.creator1}
                creator2={discoverNft.creator2}
                creator3={discoverNft.creator3}
                amount={discoverNft.amount}
                price={discoverNft.price}
              />
            ))}
          </Slider>
        </div>
        <div className="discoverBtn"></div>
      </Container>
    </section>
  );
};

export default MainDiscover;
