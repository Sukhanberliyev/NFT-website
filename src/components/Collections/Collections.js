import React from "react";

import Slider from "react-slick"; // importing library
import "slick-carousel/slick/slick.css"; // importing library
import "slick-carousel/slick/slick-theme.css"; // importing library
import Container from "../Layout/Container";
import CollectionItem from "./CollectionItem";
import classes from "./Collections.module.css"; // importing css
import CollectionData from "../../data/Collection.json"; // importing DUMMY DATA

const Collections = () => {
  // React slick library setings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        breakpoint: 525,
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
              {CollectionData.map((hotCollection) => (
                <CollectionItem
                  key={hotCollection.id}
                  collectionImg1={hotCollection.collectionImg1}
                  collectionImg2={hotCollection.collectionImg2}
                  collectionImg3={hotCollection.collectionImg3}
                  collectionImg4={hotCollection.collectionImg4}
                  title={hotCollection.title}
                  creator={hotCollection.creator}
                  name={hotCollection.name}
                  amount={hotCollection.amount}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Collections;
