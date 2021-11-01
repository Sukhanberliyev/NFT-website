import React from "react";
import classes from "./WalletModal.module.css";


const WalletModal = () => {
  return (
    <div className={classes.walletModal}>
      <h2>What is a wallet?</h2>
      <p>
        Wallets are used to send, receive, and store digital assets like Ether.
        Wallets come in many forms. They are either built into your browser, an
        extension added to your browser, a piece of hardware plugged into your
        computer or even an app on your phone.
      </p>
    </div>
  );
};

export default WalletModal;
