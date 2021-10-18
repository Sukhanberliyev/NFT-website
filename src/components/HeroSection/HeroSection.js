import React, { useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./HeroSection.module.css";
import "./ReactSlick.css";
import Container from "../Layout/Container";
import OutlineButton from "../UI/OutlineButton";
import HeroItem from "./HeroItem";
import Typed from "typed.js";

const HeroSection = (props) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<span>The new creative</span> <span>economy</span>",
        "<span>Create your dream</span> <span>gallery</span>",
        "<span>Discover, and</span> <span>collect NFTs</span>",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

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
            <h3 style={{ whiteSpace: "pre" }} ref={el} />
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
