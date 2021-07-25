import React from "react";
import { Link } from "react-router-dom";

// importing css
import classes from "./HeroRow.module.css";

// importing components
import Bid from "../UI/Bid";
import OutlineButton from "../UI/OutlineButton";

// importing images
import nftImage21 from "../../assets/images/nftImage21.png";
import nftImage22 from "../../assets/images/nftImage22.png";
import nftImage25 from "../../assets/images/nftImage25.png";
import nftImage24 from "../../assets/images/nftImage24.png";
import creator18 from "../../assets/avatars/creator18.png";
import creator9 from "../../assets/avatars/creator9.png";
import creator23 from "../../assets/avatars/creator23.png";
import creator24 from "../../assets/avatars/creator24.png";

const HeroRow = () => {
  return (
    <div className={classes.secondHeroRow}>
      <div className={classes.columnOne}>
        <Link className={classes.preview}>
          <div className={classes.previewImg}>
            <img src={nftImage21} alt="nft" />
          </div>
          <div className={classes.previewDetails}>
            <div className={classes.line}>
              <div className={classes.creatorImage}>
                <img src={creator18} alt="creator" />
              </div>
              <div className={classes.description}>
                <p className={classes.title}>The future of NFT</p>
                <p className={classes.count}>16 in stock</p>
              </div>
            </div>
            <div className={classes.box}>
              <p>Highest Bid</p>
              <Bid>0.3 ETH</Bid>
            </div>
          </div>
        </Link>
      </div>
      <div className={classes.columnTwo}>
        <Link className={classes.selectionItem}>
          <div className={classes.selectionPreview}>
            <img src={nftImage22} alt="nft" />
          </div>
          <div className={classes.selectionDescription}>
            <p className={classes.selectionTitle}>ETH never die</p>
            <div className={classes.selectionLine}>
              <div className={classes.avatar}>
                <img src={creator9} alt="" />
              </div>
              <Bid>0.3 ETH</Bid>
              <p className={classes.selectionContent}>1 of 12</p>
            </div>
            <OutlineButton className={classes.button}>
              Place a bid
            </OutlineButton>
          </div>
        </Link>
        <Link className={classes.selectionItem}>
          <div className={classes.selectionPreview}>
            <img src={nftImage25} alt="nft" />
          </div>
          <div className={classes.selectionDescription}>
            <p className={classes.selectionTitle}>ETH never die</p>
            <div className={classes.selectionLine}>
              <div className={classes.avatar}>
                <img src={creator23} alt="" />
              </div>
              <Bid>0.3 ETH</Bid>
              <p className={classes.selectionContent}>1 of 12</p>
            </div>
            <OutlineButton>Place a bid</OutlineButton>
          </div>
        </Link>
        <Link className={classes.selectionItem}>
          <div className={classes.selectionPreview}>
            <img src={nftImage24} alt="nft" />
          </div>
          <div className={classes.selectionDescription}>
            <p className={classes.selectionTitle}>ETH never die</p>
            <div className={classes.selectionLine}>
              <div className={classes.avatar}>
                <img src={creator24} alt="" />
              </div>
              <Bid>0.3 ETH</Bid>
              <p className={classes.selectionContent}>1 of 12</p>
            </div>
            <OutlineButton>Place a bid</OutlineButton>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroRow;
