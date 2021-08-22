import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import OutlineButton from "../UI/OutlineButton";

import "./FAQItem.css";

const FAQItem = (props) => {
  const [open, setOpen] = useState(false);

  const dropHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="faqItem">
      <div className="faqHead" onClick={dropHandler}>
        {props.title}
        <FontAwesomeIcon
          className={!open ? "faqIcon" : "faqIcon active"}
          icon={faChevronDown}
        />
      </div>
      <div className={`faqBody ${open ? "displayBlock" : ""}`}>
        <div className="faqContent">{props.description}</div>
        <div className="faqBtn">
          <OutlineButton>Learn more</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
