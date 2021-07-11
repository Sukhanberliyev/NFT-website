import React from "react";

// importing css
import classes from "./SecondHeroSidebar.module.css";
// importing components
import OutlineButton from "../UI/OutlineButton";
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
          </li>
          <li className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creator10} alt="" />
              <div className={classes.badge}>5</div>
            </div>
          </li>
          <li className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creator10} alt="" />
              <div className={classes.badge}>5</div>
            </div>
          </li>
          <li className={classes.creators}>
            <div className={classes.avatar}>
              <img src={creator10} alt="" />
              <div className={classes.badge}>5</div>
            </div>
          </li>
        </ul>
        <OutlineButton></OutlineButton>
      </div>
    </div>
  );
};

export default SecondHeroSidebar;
