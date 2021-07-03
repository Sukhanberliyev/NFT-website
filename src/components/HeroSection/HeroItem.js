import React, { Fragment } from "react";
import HeroDetails from "./HeroDetails";



import classes from "./HeroItem.module.css";

import HeroPlayer from "./HeroPlayer";

const HeroItem = () => {
  return (
    <Fragment>
      <div className={classes.mainRow}>
        <HeroPlayer />
        <HeroDetails />
      </div>
    </Fragment>
  );
};

export default HeroItem;
