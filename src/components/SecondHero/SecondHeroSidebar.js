import React from "react";

import classes from "./SecondHeroSidebar.module.css"; // importing css
import OutlineButton from "../UI/OutlineButton";
import Bid from "../UI/Bid";
import CreatorsData from "../../data/Creators.json";

const SecondHeroSidebar = () => {
  return (
    <div className={classes.sideBar}>
      <p className={classes.info}>latest upload from creators🔥</p>
      <ul className={classes.creatorList}>
        {CreatorsData.map((creators) => (
          <li key={creators.id} className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creators.creatorImage} alt="creator" />
              <div className={classes.badge}>3</div>
            </div>
            <div className={classes.description}>
              <p className={classes.creatorName}>{creators.name}</p>
              <Bid>{creators.amount} ETH</Bid>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.btn}>
        <OutlineButton>Discover more</OutlineButton>
      </div>
    </div>
  );
};

export default SecondHeroSidebar;
