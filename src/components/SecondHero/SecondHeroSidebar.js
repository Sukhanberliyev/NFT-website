import React from 'react'

import classes from "./SecondHeroSidebar.module.css"
import OutlineButton from "../UI/OutlineButton";
const SecondHeroSidebar = () => {
  return (
    <div>
      <div className={classes.sideBar}>
            <p>latest upload from creators</p>
            <ul className={classes.creatorList}>
              <li className={classes.creators}>
                <div className={classes.avatar}>
                  <img src="" alt="" />
                  <div className={classes.badge}>5</div>
                </div>
              </li>
              <li className={classes.creators}>
                <div className={classes.avatar}>
                  <img src="" alt="" />
                  <div className={classes.badge}>5</div>
                </div>
              </li>
              <li className={classes.creators}>
                <div className={classes.avatar}>
                  <img src="" alt="" />
                  <div className={classes.badge}>5</div>
                </div>
              </li>
              <li className={classes.creators}>
                <div className={classes.avatar}>
                  <img src="" alt="" />
                  <div className={classes.badge}>5</div>
                </div>
              </li>
            </ul>
            <OutlineButton></OutlineButton>
          </div>
    </div>
  )
}

export default SecondHeroSidebar
