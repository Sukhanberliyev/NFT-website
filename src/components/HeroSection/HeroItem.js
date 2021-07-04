import React from "react";
import HeroDetails from "./HeroDetails";



import classes from "./HeroItem.module.css";

import HeroPlayer from "./HeroPlayer";

const HeroItem = () => {
  return (
      <div className={classes.mainRow}>
        <HeroPlayer />
        <HeroDetails />
      </div>
  );
};

export default HeroItem;
