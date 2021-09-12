import React from "react";

// importing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Popular.css"; // importing css
import Container from "../Layout/Container";
import PopularTop from "./PopularTop";
import PopularDetails from "./PopularDetails";
import SellersData from "../../data/Sellers.json";// importing DUMMY DATA
import nextArrow from "../../assets/icons/nextArrow.svg"; // importing icons
import prevArrow from "../../assets/icons/prevArrow.svg";// importing icons

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

const Popular = (props) => {
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
    <section className="popular">
      <Container>
        <PopularTop />
        <Slider {...settings}>
          {SellersData.map((user) => (
            <PopularDetails
              key={user.id}
              svg={user.svg}
              rank={user.rank}
              creatorImg={user.creatorImg}
              name={user.name}
              amount={user.amount}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Popular;
