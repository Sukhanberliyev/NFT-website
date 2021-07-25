import React from "react";

// importing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing components
import Container from "../Layout/Container";
import CollectionItem from "./CollectionItem";

// importing css
import classes from "./Collections.module.css";

// importing nfts
import nftImage1 from "../../assets/images/nftImage1.png";
import nftImage2 from "../../assets/images/nftImage2.png";
import nftImage4 from "../../assets/images/nftImage4.png";
import nftImage5 from "../../assets/images/nftImage5.png";
import nftImage6 from "../../assets/images/nftImage6.png";
import nftImage7 from "../../assets/images/nftImage7.png";
import nftImage8 from "../../assets/images/nftImage8.png";
import nftImage9 from "../../assets/images/nftImage9.png";
import nftImage17 from "../../assets/images/nftImage17.png";
import nftImage18 from "../../assets/images/nftImage18.png";
import nftImage19 from "../../assets/images/nftImage19.png";
import nftImage20 from "../../assets/images/nftImage20.png";

// importing creators
import creatorImg8 from "../../assets/avatars/creator8.png";
import creatorImg30 from "../../assets/avatars/creator30.png";

// importing DUMMY_DATA

const hotCollections = [
  {
    id: "c1",
    collectionImg1: nftImage1,
    collectionImg2: nftImage2,
    collectionImg3: nftImage7,
    collectionImg4: nftImage8,
    title: "Crazy collection",
    creator: creatorImg8,
    name: "Julia Maystruk",
    amount: "28",
  },
  {
    id: "c2",
    collectionImg1: nftImage9,
    collectionImg2: nftImage4,
    collectionImg3: nftImage6,
    collectionImg4: nftImage5,
    title: "Crypto collection",
    creator: creatorImg8,
    name: "Julia Maystruk",
    amount: "19",
  },
  {
    id: "c3",
    collectionImg1: nftImage19,
    collectionImg2: nftImage18,
    collectionImg3: nftImage17,
    collectionImg4: nftImage20,
    title: "Cryptoworld",
    creator: creatorImg30,
    name: "Ilias Sounas",
    amount: "15",
  },
];

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
              {hotCollections.map((hotCollection) => (
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
