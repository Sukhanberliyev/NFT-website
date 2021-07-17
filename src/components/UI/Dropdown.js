import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./Dropdown.css";

const options = ["Today", "Morning", "Dinner", "Evening"];

const DropdownTwo = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);
  const toggleHandler = () => {
    setOpen(!open);
  };

  const optionClicked = (value) => () => {
    setSelection(value);
    setOpen(false);
    console.log(setSelection);
  };

  return (
    <div tabIndex="0" className="select">
      <div onClick={toggleHandler} className="current">
        {selection || "Today"}
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {open && (
        <ul className="list">
          {options.map((option) => (
            <li
              className="option"
              onClick={optionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownTwo;
