import React, { useState } from "react";

import "./CreateSingleCategory.css";

const CreateSingleOptionCategory = (props) => {
  const [switchToggle, setSwitchToggle] = useState(false);

  const swithToggleHandler = () => {
    setSwitchToggle(!switchToggle);
  };
  return (
    <div className="createSingleOptionCategory">
      <div className="categoryBox">
        <p className="categoryTitle">{props.title}</p>
        <p className="categoryText">{props.text}</p>
      </div>
      <div className="switch" onClick={swithToggleHandler}>
        <input className="switchInput" type="checkbox" />
        <span className="switchInner">
          <span
            className={!switchToggle ? "switchBox" : "switchBox active"}
          ></span>
        </span>
      </div>
    </div>
  );
};
export default CreateSingleOptionCategory;
