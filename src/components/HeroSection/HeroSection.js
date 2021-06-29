import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../Layout/Container";
import OutlineButton from "../UI/OutlineButton";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default HeroSection;
