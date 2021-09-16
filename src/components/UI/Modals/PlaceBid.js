import React from "react";
import ReactDOM from "react-dom";

import "./PlaceBid.css";
import MainButton from "../MainButton";
import OutlineButton from "../OutlineButton";
import Backdrop from "../Backdrop";

const BidOverlayModal = (props) => {
  const cancelHandler = () => {
    props.onClick();
  };

  const confirmHandler = () => {
    props.onConfirm();
  };
  return (
    <div className="modalCenter" onClick={confirmHandler}>
      <div className="modal">
        <p className="modalTitle">Place a bid</p>
        <p className="modalInfo">You are about to purchase</p>
        <p className="modalSubtitle">Your bid</p>
        <ul className="modalTable">
          <li className="modalRow">
            <div className="modalColumn">Enter bid</div>
            <div className="modalColumn">
              <div className="modalBid">
                <input type="tel" className="modalRate" />
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
    </div>
  );
};

const PlaceBid = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <BidOverlayModal
          onConfirm={props.onConfirm}
          onClick={props.cancelHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default PlaceBid;
