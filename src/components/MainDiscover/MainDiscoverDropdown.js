import React from "react";
import Dropdown from "../UI/Dropdown";
import "./MainDiscoverDropdown.css";

const MainDiscoverDropdown = (props) => {
  return (
    <div className="discoverDropdown">
      <div className="field">
        <p className="fieldLabel">{props.label}</p>
        <div className="fieldWrap">
          <Dropdown options={props.options} />
        </div>
      </div>
    </div>
  );
};

export default MainDiscoverDropdown;
