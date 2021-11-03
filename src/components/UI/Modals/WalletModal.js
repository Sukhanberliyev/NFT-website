import React from "react";
import ReactDOM from "react-dom";
// import classes from "./WalletModal.module.css";
import Backdrop from "../Backdrop";
import "./Modals.css";

const WalletModal = (props) => {
  const cancelHandler = () => {
    props.onClose();
  };

  return (
    <div className="modalCenter" onClick={cancelHandler}>
      <div className="walletModal">
        <h2>What is a wallet?</h2>
        <p>
          Wallets are used to send, receive, and store digital assets like
          Ether. Wallets come in many forms. They are either built into your
          browser, an extension added to your browser, a piece of hardware
          plugged into your computer or even an app on your phone.
        </p>
      </div>
    </div>
  );
};

const WalletModalOverlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <WalletModal onClose={props.onClose} onClick={props.cancelHandler} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default WalletModalOverlay;
