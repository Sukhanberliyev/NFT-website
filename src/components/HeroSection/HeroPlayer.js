import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import classes from "./HeroPlayer.module.css"

import kryptonite from "../../assets/images/kryptonite.jpeg";

const HeroPlayer = () => {
  return (
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
  );
};

export default HeroPlayer;
