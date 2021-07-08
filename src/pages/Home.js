import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection/HeroSection";

// DUMMY DATA which should be removed in the future
import nftImage1 from "../assets/images/nftImage1.jpg";
import nftImage2 from "../assets/images/nftImage2.jpg";
import nftImage3 from "../assets/images/nftImage3.jpg";
import creatorImg from "../assets/avatars/creator1.png";
import creatorImg2 from "../assets/avatars/creator2.png"
import creatorImg3 from "../assets/avatars/creator3.png"
import SecondHero from "../components/SecondHero/SecondHero";

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
    nftImage: nftImage2,
    title: "enjoy the moment®",
    creatorImg: creatorImg2 ,
    creatorName: "Joseph West",
    instantPrice: "0.9 ETH",
    currentBid: "0.9 ETH",
    realPrice: "$1,950.23",
  },
  {
    id: "h1",
    nftImage: nftImage3,
    title: "enjoy the moment®",
    creatorImg: creatorImg3 ,
    creatorName: "Joe Snow",
    instantPrice: "1 ETH",
    currentBid: "0.83 ETH",
    realPrice: "$1,890.78",
  },
];

const Home = () => {
  return (
    <Fragment>
      <HeroSection nfts={DUMMY_HERO_SECTION} />
      <SecondHero />
    </Fragment>
  );
};

export default Home;
