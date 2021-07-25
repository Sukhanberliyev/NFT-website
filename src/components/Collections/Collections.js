import React from "react";
import { Link } from "react-router-dom";
// importing components
import Container from "../Layout/Container";

// importing css
import classes from "./Collections.module.css";

// importing nfts
import nftImage37 from "../../assets/images/nftImage37.png";

// importing creators
import creatorImg from "../../assets/avatars/creator7.png";

const Collections = () => {
  return (
    <section>
      <Container>
        <div className={classes.collection}>
          <div className={classes.collectionWrapper}>
            <p className={classes.collectionTitle}>Hot collections</p>
            <div className={classes.collectionInner}>
              <Link className={classes.collectionItem}>
                <div className={classes.collectionGallery}>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage37} alt="collections" />
                  </div>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage37} alt="collections" />
                  </div>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage37} alt="collectionscollections" />
                  </div>
                  <div className={classes.collectionPreview}>
                    <img src={nftImage37} alt="collections" />
                  </div>
                </div>
                <p className={classes.collectionSubTitle}>Awesome collection</p>
                <div className={classes.collectionLine}>
                  <div className={classes.collectionUser}>
                    <div className={classes.collectionAvatar}>
                      <img src={creatorImg} alt="avatar" />
                    </div>
                    <p className={classes.collectionAuthor}>By Maria Tate</p>
                  </div>
                  <div className={classes.collectionCounter}></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Collections;
