import React from "react";

// importing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing css
import "./Popular.css";

// importing components
import Container from "../Layout/Container";
import PopularTop from "./PopularTop";
import PopularDetails from "./PopularDetails";

// importing icons
import cup from "../../assets/icons/cup.svg";
import ball from "../../assets/icons/ball.svg";
import flame from "../../assets/icons/flame.svg";
import nextArrow from "../../assets/icons/nextArrow.svg";
import prevArrow from "../../assets/icons/prevArrow.svg";

// importing creators
import creator24 from "../../assets/avatars/creator24.png";
import creator12 from "../../assets/avatars/creator12.png";
import creator11 from "../../assets/avatars/creator11.png";
import creator22 from "../../assets/avatars/creator22.png";
import creator31 from "../../assets/avatars/creator31.png";
import creator26 from "../../assets/avatars/creator26.png";
import creator19 from "../../assets/avatars/creator19.png";
import creator15 from "../../assets/avatars/creator15.png";
import creator14 from "../../assets/avatars/creator14.png";


const users = [
  {
    id: "u1",
    svg: cup,
    rank: "1",
    creatorImg: creator12,
    name: "Ruby Gallagher",
    amount: "5.1",
  },
  {
    id: "u2",
    svg: cup,
    rank: "2",
    creatorImg: creator22,
    name: "Joseph Miller",
    amount: "4.7",
  },
  {
    id: "u3",
    svg: cup,
    rank: "3",
    creatorImg: creator11,
    name: "Ella Rose",
    amount: "4.5",
  },
  {
    id: "u4",
    svg: ball,
    rank: "4",
    creatorImg: creator24,
    name: "Jayden Wattson",
    amount: "4.1",
  },
  {
    id: "u5",
    svg: ball,
    rank: "5",
    creatorImg: creator31,
    name: "Thomas Harper",
    amount: "3.9",
  },
  {
    id: "u6",
    svg: flame,
    rank: "6",
    creatorImg: creator26,
    name: "Megan Hayes",
    amount: "3.3",
  },
  {
    id: "u7",
    svg: flame,
    rank: "7",
    creatorImg: creator19,
    name: "Jasmine White",
    amount: "3",
  },
  {
    id: "u8",
    svg: flame,
    rank: "8",
    creatorImg: creator15,
    name: "Aaron Austin",
    amount: "2.8",
  },
  {
    id: "u9",
    svg: flame,
    rank: "9",
    creatorImg: creator14,
    name: "Sarah Cooke",
    amount: "2.5",
  },
];

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
