import React from "react";
import { Link } from "react-router-dom";

// importing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing components
import Container from "../Layout/Container";

// importing css
import classes from "./Collections.module.css";

// importing nfts
import nftImage10 from "../../assets/images/nftImage10.png";

// importing creators
import creatorImg from "../../assets/avatars/creator7.png";

const Collections = () => {
  // React slick library setings
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className={classes.collection}>
      <Container>
        <div className={classes.collectionWrapper}>
          <h3 className={classes.collectionTitle}>Hot collections</h3>
          <div className={classes.collectionInner}>
            <Slider {...settings}>
              <Link className={classes.collectionItem}>
                <div className={classes.collectionGallery}>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage10} alt="collections" />
                  </div>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage10} alt="collections" />
                  </div>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage10} alt="collectionscollections" />
                  </div>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage10} alt="collections" />
                  </div>
                </div>
                <p className={classes.collectionSubTitle}>Awesome collection</p>
                <div className={classes.collectionLine}>
                  <div className={classes.collectionUser}>
                    <div className={classes.collectionAvatar}>
                      <img src={creatorImg} alt="avatar" />
                    </div>
                    <p className={classes.collectionAuthor}>
                      By <span>Maria Tate</span>
                    </p>
                  </div>
                  <div className={classes.collectionCounter}><span>28 items</span></div>
                </div>
              </Link>
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Collections;
