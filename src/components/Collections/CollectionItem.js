import React from "react";
import { Link } from "react-router-dom";

// importing css
import classes from "./CollectionItem.module.css"

const CollectionItem = (props) => {
  return (
    <Link className={classes.collectionItem}>
      <div className={classes.collectionGallery}>
        <div className={classes.collectionPreview}>
          <img src={props.collectionImg1} alt="collections" />
        </div>
        <div className={classes.collectionPreview}>
          <img src={props.collectionImg2} alt="collections" />
        </div>
        <div className={classes.collectionPreview}>
          <img src={props.collectionImg3} alt="collectionscollections" />
        </div>
        <div className={classes.collectionPreview}>
          <img src={props.collectionImg4} alt="collections" />
        </div>
      </div>
      <p className={classes.collectionSubTitle}>{props.title}</p>
      <div className={classes.collectionLine}>
        <div className={classes.collectionUser}>
          <div className={classes.collectionAvatar}>
            <img src={props.creator} alt="avatar" />
          </div>
          <p className={classes.collectionAuthor}>
            By <span>{props.name}</span>
          </p>
        </div>
        <div className={classes.collectionCounter}>
          <span>{props.amount} items</span>
        </div>
      </div>
    </Link>
  );
};

export default CollectionItem;
