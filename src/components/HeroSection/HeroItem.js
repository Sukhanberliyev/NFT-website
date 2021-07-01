import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

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
          <div className={classes.playerControl}>
            <div className={classes.playerBtn}>
              <FontAwesomeIcon className={classes.icon} icon={faPlay} />
            </div>
            <div className={classes.line}>
              <div className={classes.progress}></div>
            </div>
            <div className={classes.time}>1:25</div>
            <div className={classes.playerBtn}>
              <FontAwesomeIcon className={classes.icon} icon={faVolumeUp} />
            </div>
            <div className={classes.expand}>
              <FontAwesomeIcon className={classes.icon} icon={faExpand} />
            </div>
          </div>
        </div>
        <div className="mainDetails">
          <h2>Hello World</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroItem;
