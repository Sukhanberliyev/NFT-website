import React, { Fragment } from "react";
import classes from "./HeroItem.module.css";
import kryptonite from "../../assets/images/kryptonite.jpeg";

const HeroItem = () => {
  return (
    <Fragment>
      <div className={classes.mainRow}>
        <div className={classes.player}>
          <div className={classes.playerPreview}>
            <img src={kryptonite} alt="hero" />
          </div>
          <div className={classes.playerControl}></div>
        </div>
        <div className="mainDetails">
          <h2>Hello World</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroItem;
