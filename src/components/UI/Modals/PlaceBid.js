import React from "react";

import "./PlaceBid.css";
import MainButton from "../MainButton";
import OutlineButton from "../OutlineButton";

const PlaceBid = (props) => {
  const cancelHandler = () => {
    props.onClick();
  };

  const confirmHandler = () => {
    props.onConfirm();
  };
  return (
    <div className="modal">
      <p className="modalTitle">Place a bid</p>
      <p className="modalInfo">You are about to purchase</p>
      <p className="modalSubtitle">Your bid</p>
      <ul className="modalTable">
        <li className="modalRow">
          <div className="modalColumn">Enter bid</div>
          <div className="modalColumn">
            <div className="modalBid">
              <input type="text" className="modalRate" />
              <p className="modalCurrency">ETH</p>
            </div>
          </div>
        </li>
        <li className="modalRow">
          <div className="modalColumn">Your balance</div>
          <div className="modalColumn">8.498 ETH</div>
        </li>
        <li className="modalRow">
          <div className="modalColumn">Service fee</div>
          <div className="modalColumn">0.00005 ETH</div>
        </li>
        <li className="modalRow">
          <div className="modalColumn">Total bid amount</div>
          <div className="modalColumn">0 ETH</div>
        </li>
      </ul>
      <div className="modalBtns">
        <div className="bidBtn" onClick={confirmHandler}>
          <MainButton>Place a bid</MainButton>
        </div>
        <div className="bidBtn" onClick={cancelHandler}>
          <OutlineButton>Cancel</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default PlaceBid;
