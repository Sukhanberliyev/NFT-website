import React from "react";

import classes from "./OutlineButton.module.css";
const OutlineButton = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default OutlineButton;
