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

// importing icons
import cup from "../../assets/icons/cup.svg";

// importing creators
import creator24 from "../../assets/avatars/creator24.png";
const users = [
  {
    id: "u1",
    svg: cup,
    rank: "1",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u2",
    svg: cup,
    rank: "2",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "3",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "4",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "5",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "6",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "7",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "8",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "9",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
  {
    id: "u1",
    svg: cup,
    rank: "10",
    creatorImg: creator24,
    name: "Billy Campbell",
    amount: "4.1",
  },
];

const Popular = (props) => {
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
          {users.map((user) => (
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
