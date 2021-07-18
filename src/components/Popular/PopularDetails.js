import React from 'react'

import classes from "./PopularDetails.module.css"
const PopularDetails = () => {
  return (
    <div className={classes.slickList}>
      <div className={classes.popularItem}>
        <div className={classes.popularHead}>
          <div className={classes.popularRating}>
            <div className={classes.popularIcon}>
              <img src="" alt="" />
            </div>
            <p className={classes.popularNumber}>#1</p>
          </div>
          <div className={classes.popularControl}>
            <div className={classes.addUser}></div>
            <div className={classes.link}></div>
          </div>
        </div>
        <div className={classes.popularBody}>
          <div className={classes.popularAvatar}>
            <div className={classes.popularPreview}>
              <img src="" alt="" />
            </div>
            <div className={classes.popularReward}>
              <img src="" alt="" />
            </div>
          </div>
            <p className={classes.popularName}>Billy Campbell</p>
            <p className={classes.popularPrice}>2.35 ETH</p>
        </div>
      </div>
    </div>
  )
}

export default PopularDetails
