import React, { useState } from "react";
import Dropdown from "../UI/Dropdown";

// importing css
import classes from "./PopularTop.module.css";

const options = ["Sellers", "Buyers"];

const PopularTop = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const toggleHandler = () => {
    setOpen(!open);
  };

  const optionClicked = (value) => () => {
    setSelection(value);
    setOpen(false);
  };

  return (
    <div className={classes.popularTop}>
      <div className={classes.popularBox}>
        <p className={classes.title}>Popular</p>
        <div onClick={toggleHandler} className={classes.select}>
          <div className={classes.current}>
            {selection || "Seller"}
          </div>
          {open && (
            <ul className={classes.list}>
              {options.map((option) => (
                <li
                  className={classes.option}
                  onClick={optionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={classes.field}>
        <p className={classes.label}>TIMEFRAME</p>
        <Dropdown />
      </div>
    </div>
  );
};

export default PopularTop;
