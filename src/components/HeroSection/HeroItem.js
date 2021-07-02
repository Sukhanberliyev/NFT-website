import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import classes from "./HeroItem.module.css";
import kryptonite from "../../assets/images/kryptonite.jpeg";
import avatar from "../../assets/avatars/elize.png"
import eth from "../../assets/avatars/eth.png"

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
        <div className={classes.mainDetails}>
          <h1>the creator network®</h1>
          <ul>
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
        </div>
      </div>
    </Fragment>
  );
};

export default HeroItem;
