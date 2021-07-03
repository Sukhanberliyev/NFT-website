import React from "react";

import classes from "./MainButton.module.css"
const MainButton = (props) => {
  return <button className={classes.button}>{props.children}</button>
};

export default MainButton;
