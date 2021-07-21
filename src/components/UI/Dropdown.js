import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// importing custom-hook
import useClickOutside from "../../hooks/use-click-outside";

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
  };

  // calling and custom hook which allows click outside
  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div ref={domNode} tabIndex="0" className="select">
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
