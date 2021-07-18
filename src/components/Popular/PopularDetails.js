import React from 'react'

// importing icons
import cup from "../../assets/icons/cup.svg"
import addBtn from "../../assets/icons/addBtn.svg"
import link from "../../assets/icons/link.svg"
import diamond from "../../assets/icons/diamond.svg"


// importing creators
import creator24 from "../../assets/avatars/creator24.png";

import classes from "./PopularDetails.module.css"
const PopularDetails = () => {
  return (
    <div className={classes.slickList}>
      <div className={classes.popularItem}>
        <div className={classes.popularHead}>
          <div className={classes.popularRating}>
            <div className={classes.popularIcon}>
              <img src={cup} alt="icons" />
            </div>
            <p className={classes.popularNumber}>#1</p>
          </div>
          <div className={classes.popularControl}>
            <div className={classes.addUser}>
              <img src={addBtn} alt="icons" />
            </div>
            <div className={classes.link}>
              <img src={link} alt="icons" />
            </div>
          </div>
        </div>
        <div className={classes.popularBody}>
          <div className={classes.popularAvatar}>
            <div className={classes.popularPreview}>
              <img src={creator24} alt="creator" />
            </div>
            <div className={classes.popularReward}>
              <img src={diamond} alt="" />
            </div>
          </div>
            <p className={classes.popularName}>Billy Campbell</p>
            <p className={classes.popularPrice}><span>2.35</span> ETH</p>
        </div>
      </div>
    </div>
  )
}

export default PopularDetails
