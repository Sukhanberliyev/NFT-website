import React from "react";

// importing css
import classes from "./SecondHeroSidebar.module.css";
// importing components
import OutlineButton from "../UI/OutlineButton";
import Bid from "../UI/Bid";
// importing images
import creator10 from "../../assets/avatars/creator10.png";
const SecondHeroSidebar = () => {
  return (
    <div>
      <div className={classes.sideBar}>
        <p className={classes.info}>latest upload from creators🔥</p>
        <ul className={classes.creatorList}>
          <li className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creator10} alt="creator" />
              <div className={classes.badge}>5</div>
            </div>
            <div className={classes.description}>
              <p className={classes.creatorName}>Jon Snow</p>
              <Bid> 2.456 ETH</Bid>
            </div>
          </li>
          <li className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creator10} alt="" />
              <div className={classes.badge}>5</div>
            </div>
            <div className={classes.description}>
              <p className={classes.creatorName}>Jon Snow</p>
              <Bid> 2.456 ETH</Bid>
            </div>
          </li>
          <li className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creator10} alt="" />
              <div className={classes.badge}>5</div>
            </div>
            <div className={classes.description}>
              <p className={classes.creatorName}>Jon Snow</p>
              <Bid> 2.456 ETH</Bid>
            </div>
          </li>
          <li className={[classes.lastCreators]}>
            <div className={classes.avatar}>
              <img src={creator10} alt="" />
              <div className={classes.badge}>5</div>
            </div>
            <div className={classes.description}>
              <p className={classes.creatorName}>Jon Snow</p>
              <Bid> 2.456 ETH</Bid>
            </div>
          </li>
        </ul>
        <OutlineButton>Discover more</OutlineButton>
      </div>
    </div>
  );
};

export default SecondHeroSidebar;
