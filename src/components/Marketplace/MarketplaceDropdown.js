import React from "react";
import Dropdown from "../UI/Dropdown";
import "./MarketplaceDropdown.css";

const MarketplaceDropdown = (props) => {
  return (
    <div className="marketplaceField">
      <p className="marketplaceFieldLabel">{props.label}</p>
      <div className="marketplaceFieldWrap">
        <Dropdown options={props.options} />
      </div>
    </div>
  );
};

export default MarketplaceDropdown;
