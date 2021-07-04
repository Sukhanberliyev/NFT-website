import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../Layout/Container";
import OutlineButton from "../UI/OutlineButton";
import classes from "./HeroSection.module.css";
import HeroItem from "./HeroItem";

const HeroSection = () => {
  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <section>
      <Container>
        <main className={classes.main}>
          <div className={classes.mainHead}>
            <p>CREATE, EXPLORE, & COLLECT DIGITAL ART NFTs.</p>
            <h3>The new creative economy</h3>
            <OutlineButton>Start your search</OutlineButton>
          </div>
          <div className={classes.mainBottom}>
            <Slider {...settings} className={classes.slides}>
              <HeroItem />
              <HeroItem />
            </Slider>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default HeroSection;
