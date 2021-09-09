import React from "react";
import { useParams } from "react-router-dom";

import Nft from "../components/NFT/Nft";

// importing NFTs
import nftImage32 from "../assets/images/nftImage32.png";
import nftImage27 from "../assets/images/nftImage27.png";
import nftImage28 from "../assets/images/nftImage28.png";
import nftImage29 from "../assets/images/nftImage29.png";
import nftImage30 from "../assets/images/nftImage30.png";
import nftImage31 from "../assets/images/nftImage31.png";
import nftImage33 from "../assets/images/nftImage33.png";
import nftImage34 from "../assets/images/nftImage34.png";

// importing creators
import creator12 from "../assets/avatars/creator12.png";
import creator11 from "../assets/avatars/creator11.png";
import creator15 from "../assets/avatars/creator15.png";
import creator16 from "../assets/avatars/creator16.png";
import creator17 from "../assets/avatars/creator17.png";
import creator1 from "../assets/avatars/creator1.png";
import creator2 from "../assets/avatars/creator2.png";
import creator3 from "../assets/avatars/creator3.png";
import creator4 from "../assets/avatars/creator4.png";
import creator5 from "../assets/avatars/creator5.png";
import creator6 from "../assets/avatars/creator6.png";
import creator7 from "../assets/avatars/creator7.png";
import creator8 from "../assets/avatars/creator8.png";
import creator9 from "../assets/avatars/creator9.png";

// importing DUMMY_DATA
const discoverNfts = [
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
];

// create global dummy data and import it to every components where datas are necessary

const NftDetails = () => {
  const params = useParams();
  const { NftId } = params;

  return (
    <div>
      <Nft />
    </div>
  );
};

export default NftDetails;
