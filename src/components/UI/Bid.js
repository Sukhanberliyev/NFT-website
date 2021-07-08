import React from "react";

import classes from "./Bid.module.css";
const Bid = (props) => {
  return <div className={classes.bid}>{props.children}</div>;
};

export default Bid;
