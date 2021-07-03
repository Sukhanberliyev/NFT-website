import React from "react";

import classes from "./HeroDetails.module.css";
import MainButton from "../UI/MainButton";
import OutlineButton from "../UI/OutlineButton";

import avatar from "../../assets/avatars/elize.png";
import eth from "../../assets/avatars/eth.png";



const HeroDetails = () => {
  return (
    <div className={classes.mainDetails}>
      <h1>the creator network®</h1>
      <ul className={classes.items}>
        <li className={classes.mainItem}>
          <img className={classes.avatar} src={avatar} alt="avatar" />
          <div className={classes.description}>
            <p className={classes.mainCategory}>Creator</p>
            <p className={classes.mainText}>Fur Elize</p>
          </div>
        </li>
        <li className={classes.mainItem}>
          <img className={classes.avatar} src={eth} alt="cryptocurrency" />
          <div className={classes.description}>
            <p className={classes.mainCategory}>Instant price</p>
            <p className={classes.mainText}>3.5 ETH</p>
          </div>
        </li>
      </ul>
      <div className={classes.mainWrap}>
        <p className={classes.mainInfo}>Current Bid</p>
        <p className={classes.mainCurrency}>1.00 ETH</p>
        <p className={classes.mainPrice}>$2,200.18</p>
        <p className={classes.mainInfo}>Auction end in</p>
        <ul className={classes.mainTimer}>
          <li className={classes.mainBox}>
            <p className={classes.mainNumber}>07</p>
            <p className={classes.mainTime}>hrs</p>
          </li>
          <li className={classes.mainBox}>
            <p className={classes.mainNumber}>48</p>
            <p className={classes.mainTime}>mins</p>
          </li>
          <li className={classes.mainBox}>
            <p className={classes.mainNumber}>59</p>
            <p className={classes.mainTime}>secs</p>
          </li>
        </ul>
      </div>
      <div className={classes.mainBtns}>
        <MainButton>Place a bid</MainButton>
        <OutlineButton>View Item</OutlineButton>
      </div>
    </div>
  );
};

export default HeroDetails;
