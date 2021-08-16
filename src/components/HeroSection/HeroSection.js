import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./HeroSection.module.css";
import "./ReactSlick.css";
import Container from "../Layout/Container";
import OutlineButton from "../UI/OutlineButton";

import HeroItem from "./HeroItem";

const HeroSection = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <main className={classes.main}>
          <div className={classes.mainHead}>
            <p>CREATE, EXPLORE, & COLLECT DIGITAL ART NFTs.</p>
            <h3>The new creative economy</h3>
            <div className={classes.heroButton}>
              <OutlineButton>Start your search</OutlineButton>
            </div>
          </div>
          <Slider {...settings}>
            {props.nfts.map((nft) => (
              <HeroItem
                key={nft.id}
                id={nft.id}
                nftImage={nft.nftImage}
                title={nft.title}
                creatorImg={nft.creatorImg}
                creatorName={nft.creatorName}
                instantPrice={nft.instantPrice}
                currentBid={nft.currentBid}
                realPrice={nft.realPrice}
              />
            ))}
          </Slider>
        </main>
      </Container>
    </section>
  );
};

export default HeroSection;
