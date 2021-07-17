import React from "react";
import Dropdown from "../UI/Dropdown";
import DropdownTwo from "../UI/Dropdown";

// importing css
import classes from "./PopularTop.module.css";

// DUMMY DATA for dropdown

const DUMMY_ITEMS = [
  {
    id: 1,
    value: "Pulp fiction",
  },
  {
    id: 2,
    value: "The presitge",
  },
  {
    id: 3,
    value: "The godfather",
  },
];

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
      <div className={classes.field}>
        <p className={classes.label}>TIMEFRAME</p>
        {/* <Dropdown title="Select Movie" items={DUMMY_ITEMS} /> */}
        <DropdownTwo />
      </div>
    </div>
  );
};

export default PopularTop;
