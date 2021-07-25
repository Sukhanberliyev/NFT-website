import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection/HeroSection";

// Importing components
import SecondHero from "../components/SecondHero/SecondHero";
import Popular from "../components/Popular/Popular";
import Hot from "../components/HotBid/Hot";

// DUMMY DATA which should be removed in the future
import nftImage10 from "../assets/images/nftImage10.png";
import nftImage11 from "../assets/images/nftImage11.png";
import nftImage12 from "../assets/images/nftImage12.png";
import creatorImg from "../assets/avatars/creator1.png";
import creatorImg2 from "../assets/avatars/creator2.png";
import creatorImg3 from "../assets/avatars/creator3.png";
import Collections from "../components/Collections/Collections";

const DUMMY_HERO_SECTION = [
  {
    id: "h1",
    nftImage: nftImage10,
    title: "the creator network®",
    creatorImg: creatorImg,
    creatorName: "Fur Elize",
    instantPrice: "3.5 ETH",
    currentBid: "1.00 ETH",
    realPrice: "$2,200.18",
  },
  {
    id: "h2",
    nftImage: nftImage11,
    title: "enjoy the moment®",
    creatorImg: creatorImg2,
    creatorName: "Joseph West",
    instantPrice: "0.9 ETH",
    currentBid: "0.9 ETH",
    realPrice: "$1,950.23",
  },
  {
    id: "h3",
    nftImage: nftImage12,
    title: "enjoy the moment®",
    creatorImg: creatorImg3,
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
      <Popular />
      <Hot />
      <Collections />
    </Fragment>
  );
};

export default Home;
