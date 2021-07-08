import React from "react";
import { Link } from "react-router-dom";

// importing css
import classes from "./HeroRow.module.css";

// importing components
import Bid from "../UI/Bid";

// importing images
import nftImage5 from "../../assets/images/nftImage5.jpeg";
import creator1 from "../../assets/avatars/creator1.png";
const HeroRow = () => {
  return (
    <div className={classes.secondHeroRow}>
      <div className={classes.columnOne}>
        <Link className={classes.preview}>
          <div className={classes.previewImg}>
            <img src={nftImage5} alt="nft" />
          </div>
          <div className={classes.previewDetails}>
            <div className={classes.line}>
              <img src={creator1} alt="creator" />
              <div className={classes.description}>
                <p className={classes.title}>The future of NFT</p>
                <p className={classes.count}>16 in stock</p>
              </div>
              <div className={classes.box}>
                <p>Highest Bid</p>
                <Bid>0.3 ETH</Bid>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={classes.columnTwo}>
        <Link>
          <div className={classes.selectionPreview}>
            <img src="" alt="" />
          </div>
          <div className={classes.selectionDescription}>
            <p className={classes.selectionTitle}>ETH never die</p>
            <div>
              <img src="" alt="" />
              <Bid />
              <p>1 of 12</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroRow;
