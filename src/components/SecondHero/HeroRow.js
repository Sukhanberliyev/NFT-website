import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeroRow.module.css"; // importing css
import Bid from "../UI/Bid";
import OutlineButton from "../UI/OutlineButton";
import SecondHeroRow from "../../data/SecondHeroRow.json"; // DUMMYDATA
import nftImage21 from "../../assets/images/nftImage21.png"; // importing images
import creator18 from "../../assets/avatars/creator18.png"; // importing images

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
        {SecondHeroRow.map((SecondRow) => (
          <Link key={SecondRow.id} className={classes.selectionItem}>
            <div className={classes.selectionPreview}>
              <img src={SecondRow.nftImage} alt="nft" />
            </div>
            <div className={classes.selectionDescription}>
              <p className={classes.selectionTitle}>{SecondRow.title}</p>
              <div className={classes.selectionLine}>
                <div className={classes.avatar}>
                  <img src={SecondRow.creatorImg} alt="" />
                </div>
                <Bid>{SecondRow.currentBid}</Bid>
                <p className={classes.selectionContent}>{SecondRow.amount}</p>
              </div>
              <div className={classes.secondHeroBtn}>
                <OutlineButton>Place a bid</OutlineButton>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroRow;
