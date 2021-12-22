import React, { useState } from "react";
import WalletModal from "../UI/Modals/WalletModal";
import classes from "./MyWallet.module.css";
import WalletModalOverlay from "../UI/Modals/WalletModal";

const MyWallet = () => {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const showMoreHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.myWallet}>
      <div className={classes.walletContainer}>
        <div className={classes.mainImg}>
          <img src="/assets/images/ethereum.svg" alt="ethereum" />
        </div>
        <h2 className={classes.mainText}>Sign in with your wallet</h2>
        <p className={classes.subText}>
          Sign in with one of available wallet providers or create a new wallet.{" "}
          <span onClick={modalHandler}>What is a wallet?</span>
        </p>
        <ul>
          <li className={`${classes.walletList} ${classes.mainWallet}`}>
            <a href="https://metamask.io/">
              <div className={classes.walletImg}>
                <img src="/assets/images/metamask.svg" alt="" />
              </div>
              <p>Sign in with Metamask</p>
              <div className={classes.mostPopular}>Most Popular</div>
            </a>
          </li>
          <li className={classes.walletList}>
            <a href="https://wallet.coinbase.com/">
              <div className={classes.walletImg}>
                <img src="/assets/images/coinbaseWallet.png" alt="" />
              </div>
              <p>Coinbase</p>
            </a>
          </li>
          <li className={classes.walletList} onClick={showMoreHandler}>
            {!open ? <p>Show more options</p> : <p>Show less options</p>}
          </li>
        </ul>
        {open && (
          <ul>
            <li className={classes.walletList}>
              <a href="https://toruswallet.io/">
                <div className={classes.walletImg}>
                  <img src="/assets/images/torus.png" alt="" />
                </div>
                <p>Torus</p>
              </a>
            </li>
            <li className={classes.walletList}>
              <a href="https://fortmatic.com/">
                <div className={classes.walletImg}>
                  <img src="/assets/images/fortmatic.png" alt="" />
                </div>
                <p>Formatic</p>
              </a>
            </li>
          </ul>
        )}
        {modalIsOpen && <WalletModal onClick={modalHandler} />}
      </div>
    </div>
  );
};

export default MyWallet;
