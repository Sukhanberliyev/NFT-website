import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./Modals.css";
import MainButton from "../MainButton";
import OutlineButton from "../OutlineButton";
import Backdrop from "../Backdrop";

const ConnectWalletOverlay = (props) => {
  const cancelHandler = () => {
    props.onClose();
  };

  return (
    <div className="modalCenter" onClick={cancelHandler}>
      <div className="modal">
        <div className="connectWalletImg">
          <img src="/assets/icons/wallet.svg" alt="walletImg" />
        </div>
        <p className="connectWalletDescription">
          You need to connect your wallet first to sign messages and send
          transaction to
          <br />
          <span>Ethereum network</span>
        </p>
        <div className="modalBtns">
          <div className="modalBtn">
            <Link to="/connect-wallet">
              <MainButton>Connect wallet</MainButton>
            </Link>
          </div>
          <div className="modalBtn" onClick={cancelHandler}>
            <OutlineButton>Cancel</OutlineButton>
          </div>
        </div>
        <button
          title="Close (Esc)"
          type="button"
          className="closeBtn"
          onClick={cancelHandler}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18L6 6Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ConnectWallet = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ConnectWalletOverlay
          onClose={props.onClose}
          onClick={props.cancelHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ConnectWallet;
