import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./Modals.css";
import MainButton from "../MainButton";
import OutlineButton from "../OutlineButton";
import Backdrop from "../Backdrop";

const BidOverlayModal = (props) => {
  const cancelHandler = () => {
    props.onClose();
  };

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div className="modalContainer">
      <div className="modalCenter">
        <div className="modal">
          <p className="modalTitle">Place a bid</p>
          <p className="modalInfo">You are about to purchase</p>
          <p className="modalSubtitle">Your bid</p>
          <ul className="modalTable">
            <li className="modalRow">
              <div className="modalColumn">Enter bid</div>
              <div className="modalColumn">
                <div className="modalBid">
                  <input ref={inputEl} type="tel" className="modalRate" />
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
            <div className="modalBtn" onClick={cancelHandler}>
              <MainButton>Place a bid</MainButton>
            </div>
            <div className="modalBtn" onClick={cancelHandler}>
              <OutlineButton>Cancel</OutlineButton>
            </div>
          </div>
          <button
            onClick={cancelHandler}
            title="Close (Esc)"
            type="button"
            className="closeBtn"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18L6 6Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const PlaceBid = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <BidOverlayModal
          onClose={props.onClose}
          onClick={props.cancelHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default PlaceBid;
