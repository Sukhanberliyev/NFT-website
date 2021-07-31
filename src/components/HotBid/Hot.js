import React from "react";

// importing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing components
import Container from "../Layout/Container";
import Card from "../UI/Card";

// importing css
import classes from "./Hot.module.css";

// importing icons
import nextArrow from "../../assets/icons/nextArrow.svg";
import prevArrow from "../../assets/icons/prevArrow.svg";

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

// importing DUMMY_DATA

const hotNfts = [
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
    mainNft: nftImage27,
    title: "Monstroo",
    bid: "1.93",
    creator1: creator1,
    creator2: creator2,
    creator3: creator3,
    amount: "5",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage28,
    title: "Norway",
    bid: "2.23",
    creator1: creator4,
    creator2: creator5,
    creator3: creator6,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage29,
    title: "Digital Blade",
    bid: "1.89",
    creator1: creator7,
    creator2: creator8,
    creator3: creator9,
    amount: "4",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage30,
    title: "Waterflamefall",
    bid: "1.77",
    creator1: creator2,
    creator2: creator3,
    creator3: creator5,
    amount: "6",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage31,
    title: "Ethereuminisation",
    bid: "1.61",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage33,
    title: "Toxic flamingos",
    bid: "1.55",
    creator1: creator7,
    creator2: creator2,
    creator3: creator4,
    amount: "1",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage34,
    title: "Tauren Valley",
    bid: "1.01",
    creator1: creator6,
    creator2: creator3,
    creator3: creator5,
    amount: "9",
    price: "0.1",
  },
];

// arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{
        ...style,
        display: "block",
        width: "30px",
        height: "30px",
        marginRight: "-20px",
      }}
      onClick={onClick}
      src={nextArrow}
      alt=""
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{
        ...style,
        display: "block",
        width: "30px",
        height: "30px",
        marginLeft: "-20px",
      }}
      onClick={onClick}
      src={prevArrow}
      alt=""
    />
  );
}

const Hot = () => {
  // React slick library setings
  var settings = {
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={classes.hot}>
      <Container>
        <div className={classes.hotBox}>
          <h3 className={classes.hotTitle}>Hot bid</h3>
          <div className={classes.hotInner}>
            <Slider {...settings}>
              {hotNfts.map((hotNft) => (
                <Card
                  key={hotNft.id}
                  mainNft={hotNft.mainNft}
                  title={hotNft.title}
                  bid={hotNft.bid}
                  creator1={hotNft.creator1}
                  creator2={hotNft.creator2}
                  creator3={hotNft.creator3}
                  amount={hotNft.amount}
                  price={hotNft.price}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hot;
