import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MyWallet.module.css";

const MyWallet = () => {
  const [open, setOpen] = useState(false);

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
          <span>What is a wallet?</span>
        </p>
        <ul>
          <li className={classes.walletList}>
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
      </div>
    </div>
  );
};

export default MyWallet;
