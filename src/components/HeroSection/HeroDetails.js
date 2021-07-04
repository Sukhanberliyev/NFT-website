import React, { useEffect, useState } from "react";

import classes from "./HeroDetails.module.css";
import MainButton from "../UI/MainButton";
import OutlineButton from "../UI/OutlineButton";

import avatar from "../../assets/avatars/elize.png";
import eth from "../../assets/avatars/eth.png";

const HeroDetails = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (hours > 0) {
      setTimeout(() => setMinutes(hours - 1), 600000);
    } else {
      setHours(7 - 1);
    }
    if (minutes > 0) {
      setTimeout(() => setMinutes(minutes - 1), 60000);
    } else {
      setMinutes(60 - 1);
    }
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(60 - 1);
    }
  }, [seconds, minutes, hours]);
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
            <p className={classes.mainNumber}>0{hours}</p>
            <p className={classes.mainTime}>hrs</p>
          </li>
          <li className={classes.mainBox}>
            <p className={classes.mainNumber}>{minutes}</p>
            <p className={classes.mainTime}>mins</p>
          </li>
          <li className={classes.mainBox}>
            <p className={classes.mainNumber}>{seconds}</p>
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
