import React, { useState } from "react";
import { Link } from "react-router-dom";

// importing css
import classes from "./Card.module.css";

// importing components
import Bid from "../UI/Bid";

// importing icons
import candles from "../../assets/icons/candles.svg";
import candle from "../../assets/icons/candle.svg";
// import LikBtn from "../../assets/icons/heart.svg";

const heartSvg = (
  <svg
    className={classes.heart}
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Light/Heart">
      <g id="Heart">
        <path
          id="Stroke 1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.26501 21.2636C3.29784 15.1219 5.59684 8.10209 12.0447 6.02492C15.4363 4.93042 19.18 5.57576 21.9997 7.69692C24.6672 5.63442 28.5483 4.93776 31.9363 6.02492C38.3842 8.10209 40.6978 15.1219 38.7325 21.2636C35.6708 30.9986 21.9997 38.4969 21.9997 38.4969C21.9997 38.4969 8.42934 31.1123 5.26501 21.2636Z"
          stroke-width="2.75"
          // stroke-linecap="round"
          // stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
);

const Card = (props) => {
  const [click, setClick] = useState(false);

  const likeButtonHandler = () => {
    setClick(true);
  }
  return (
    <div className={classes.card}>
      <div className={classes.cardPreview}>
        <img src={props.mainNft} alt="nft" />
        <div className={classes.cardControl}>
          <div className={classes.cardCategory}>PURCHASING !</div>
          <div className={classes.likeBtn} onClick={likeButtonHandler} >{heartSvg}</div>
          <button className={classes.cardButton}>
            Place a bid
            <img src={candle} alt="icon" />
          </button>
        </div>
      </div>
      <Link className={classes.cardLink}>
        <div className={classes.cardBody}>
          <div className={[classes.cardLine, classes.cardMargin].join(" ")}>
            <p className={classes.cardTitle}>{props.title}</p>
            <Bid>{props.bid} ETH</Bid>
          </div>
          <div className={classes.cardLine}>
            <div className={classes.cardUsers}>
              <div className={classes.cardAvatar}>
                <img src={props.creator1} alt="creator" />
              </div>
              <div
                className={[classes.cardAvatar, classes.avatarMargin].join(" ")}
              >
                <img src={props.creator2} alt="creator" />
              </div>
              <div
                className={[classes.cardAvatar, classes.avatarMargin].join(" ")}
              >
                <img src={props.creator3} alt="creator" />
              </div>
            </div>
            <p className={classes.cardCounter}>{props.amount} in stock</p>
          </div>
        </div>
        <div className={classes.cardFoot}>
          <div className={classes.cardStatus}>
            <img src={candles} alt="icon" />
            <p>
              Highest bid <span>{props.price} ETH</span>
            </p>
          </div>
          <p className={classes.cardBid}>New Bid🔥</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
