import React from 'react'

// importing icons
import addBtn from "../../assets/icons/addBtn.svg"
import link from "../../assets/icons/link.svg"
import diamond from "../../assets/icons/diamond.svg"


import classes from "./PopularDetails.module.css"
const PopularDetails = (props) => {
  return (
    <div className={classes.slickList}>
      <div className={classes.popularItem}>
        <div className={classes.popularHead}>
          <div className={classes.popularRating}>
            <div className={classes.popularIcon}>
              <img src={props.svg} alt="icons" />
            </div>
            <p className={classes.popularNumber}>#{props.rank}</p>
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
              <img src={props.creatorImg} alt="creator" />
            </div>
            <div className={classes.popularReward}>
              <img src={diamond} alt="" />
            </div>
          </div>
            <p className={classes.popularName}>{props.name}</p>
            <p className={classes.popularPrice}><span>{props.amount}</span> ETH</p>
        </div>
      </div>
    </div>
  )
}

export default PopularDetails
