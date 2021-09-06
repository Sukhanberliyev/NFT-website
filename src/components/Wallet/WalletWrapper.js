import React from "react";

import OutlineButton from "../UI/OutlineButton";
import MainButton from "../UI/MainButton";

const WalletWrapper = () => {
  return (
    <div className="walletWrapper">
      <div className="walletBg">
        <img src="" alt="" />
      </div>
      <div className="walletGroups">
        <div className="walletGroup">
          <h3 className="walletTitle">Scan to connect</h3>
          <p className="walletText">Powered by Cryptonite Wallet</p>
          <div className="walletBox">
            <div className="walletCode">
              <img src="" alt="" />
            </div>
          </div>
          <div className="walletButton"></div>
        </div>
        <div className="walletGroup">
          <h3 className="walletTitle">Terms of service</h3>
          <p className="walletText">
            Please take a few minutes to read and understand{" "}
            <span>Stacks Terms of Service</span>. To continue, you’ll need to
            accept the terms of services by checking the boxes.{" "}
          </p>
          <div className="walletPreview">
            <img src="" alt="" />
          </div>
          <div className="walletVariants">
            <label className="checkbox">
              <input type="text" />
              <span className="checkboxInner">
                <span className="checkboxTick"></span>
                <span className="checkboxText">I am at least 13 years old</span>
              </span>
            </label>
            <label className="checkbox">
              <input type="text" />
              <span className="checkboxInner">
                <span className="checkboxTick"></span>
                <span className="checkboxText">
                  I agree Stack terms of service
                </span>
              </span>
            </label>
          </div>
          <div className="walletBtn">
            <OutlineButton>Cancel</OutlineButton>
            <MainButton>Get Started Now</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletWrapper;