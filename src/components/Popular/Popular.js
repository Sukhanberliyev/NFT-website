import React from "react";

// importing css
import classes from "./Popular.module.css";

// importing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing components
import Container from "../Layout/Container";
import PopularTop from "./PopularTop";
import PopularDetails from "./PopularDetails";

const Popular = () => {
  // React slick library setings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={classes.popular}>
      <Container>
        <PopularTop />
        <Slider {...settings}>
          <PopularDetails />
        </Slider>
      </Container>
    </section>
  );
};

export default Popular;
