import React, { useState } from "react";
import Dropdown from "../UI/Dropdown";
import classes from "./PopularTop.module.css"; // importing css
import useClickOutside from "../../hooks/use-click-outside"; // importing custom-hook

// --------------- Special Dropdown: "Popular" START ---------------
const MyDropdown = ({classes}) => {
    const options = ["Sellers", "Buyers"];
    const [selection, setSelection] = useState(null);
    const [open, setOpen] = useState(false);

    const toggleHandler = () => {
      setOpen(!open);
    };
  
    const optionClicked = (value) => () => {
      setSelection(value);
      setOpen(false);
    };
      // calling and custom hook which allows click outside
    const domNode = useClickOutside(() => {
      setOpen(false);
    });

    return (
    <div ref={domNode} onClick={toggleHandler} className={classes.select}>
      <div className={classes.current}>{selection || "Seller"}</div>
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
    </div>);
};
// --------------- Special Dropdown: "Popular" END ---------------

const PopularTop = () => {
  const timeframeOptions = ["Today", "Morning", "Dinner", "Evening"];
  const anotherArrayOfOptions = ['a', 'b', 'c'];
  return (
    <div className={classes.popularTop}>
      <div className={classes.popularBox}>
        <p className={classes.title}>Popular</p>
        <MyDropdown classes={classes}/>
      </div>
      <div className={classes.field}>
        <p className={classes.label}>TIMEFRAME</p>
        <Dropdown options={timeframeOptions}/>
        <Dropdown options={anotherArrayOfOptions}/>
      </div>
    </div>
  );
};

export default PopularTop;
