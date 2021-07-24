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
import nftImage from "../../assets/images/nftImage32.png";

// importing creators
import creator24 from "../../assets/avatars/creator24.png";
import creator12 from "../../assets/avatars/creator12.png";
import creator11 from "../../assets/avatars/creator11.png";
import creator15 from "../../assets/avatars/creator15.png";
import creator16 from "../../assets/avatars/creator16.png";
import creator17 from "../../assets/avatars/creator17.png";

// importing DUMMY_DATA

const hotNfts = [
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
    price: "0.1",
  },
  {
    id: "h1",
    mainNft: nftImage,
    title: "Digital World",
    bid: "2.45",
    creator1: creator15,
    creator2: creator16,
    creator3: creator17,
    amount: "3",
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
