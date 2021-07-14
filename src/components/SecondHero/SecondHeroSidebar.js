import React from "react";

// importing css
import classes from "./SecondHeroSidebar.module.css";
// importing components
import OutlineButton from "../UI/OutlineButton";
import Bid from "../UI/Bid";
// importing images
import creator10 from "../../assets/avatars/creator10.png";
import creator22 from "../../assets/avatars/creator22.png";
import creator26 from "../../assets/avatars/creator26.png";
import creator13 from "../../assets/avatars/creator13.png";
const SecondHeroSidebar = () => {
  return (
    <div className={classes.sideBar}>
      <p className={classes.info}>latest upload from creators🔥</p>
      <ul className={classes.creatorList}>
        <li className={classes.creators}>
          <div className={classes.avatar}>
            <img src={creator10} alt="creator" />
            <div className={classes.badge}>3</div>
          </div>
          <div className={classes.description}>
            <p className={classes.creatorName}>Jess Green</p>
            <Bid> 2.456 ETH</Bid>
          </div>
        </li>
        <li className={classes.creators}>
          <div className={classes.avatar}>
            <img src={creator22} alt="" />
            <div className={classes.badge}>5</div>
          </div>
          <div className={classes.description}>
            <p className={classes.creatorName}>Fred Arthur</p>
            <Bid> 2.456 ETH</Bid>
          </div>
        </li>
        <li className={classes.creators}>
          <div className={classes.avatar}>
            <img src={creator13} alt="" />
            <div className={classes.badge}>8</div>
          </div>
          <div className={classes.description}>
            <p className={classes.creatorName}>Alan Irwin</p>
            <Bid> 2.456 ETH</Bid>
          </div>
        </li>
        <li className={[classes.lastCreators]}>
          <div className={classes.avatar}>
            <img src={creator26} alt="" />
            <div className={classes.badge}>6</div>
          </div>
          <div className={classes.description}>
            <p className={classes.creatorName}>Talia Snow</p>
            <Bid> 2.456 ETH</Bid>
          </div>
        </li>
      </ul>
      <OutlineButton>Discover more</OutlineButton>
    </div>
  );
};

export default SecondHeroSidebar;
