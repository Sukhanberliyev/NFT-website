import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection/HeroSection";

// DUMMY DATA which should be removed in the future
import nftImage1 from "../assets/images/nftImage1.jpg";
import enjoyNeon from "../assets/images/enjoy.jpg";
import creatorImg from "../assets/avatars/creator1.png";
import creatorImg2 from "../assets/avatars/creator2.png"

const DUMMY_HERO_SECTION = [
  {
    id: "h1",
    nftImage: nftImage1,
    title: "the creator network®",
    creatorImg: creatorImg ,
    creatorName: "Fur Elize",
    instantPrice: "3.5 ETH",
    currentBid: "1.00 ETH",
    realPrice: "$2,200.18",
  },
  {
    id: "h1",
    nftImage: enjoyNeon,
    title: "enjoy the moment®",
    creatorImg: creatorImg2 ,
    creatorName: "Joseph West",
    instantPrice: "2.9 ETH",
    currentBid: "0.9 ETH",
    realPrice: "$1,950.23",
  },
];

const Home = () => {
  return (
    <Fragment>
      <HeroSection nfts={DUMMY_HERO_SECTION} />
    </Fragment>
  );
};

export default Home;
