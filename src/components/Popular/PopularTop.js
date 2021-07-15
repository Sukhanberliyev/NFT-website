import React from "react";

// importing css
import classes from "./PopularTop.module.css";

const PopularTop = () => {
  return (
    <div className={classes.popularTop}>
      <div className={classes.popularBox}>
        <p className={classes.title}>Popular</p>
        <div className={classes.select}>
          <span className={classes.current}>Seller</span>
          <ul className={classes.list}>
            <li className={classes.option}>Sellers</li>
            <li className={classes.option}>Buyers</li>
          </ul>
        </div>
      </div>
      <div className={classes.field}></div>
    </div>
  );
};

export default PopularTop;
