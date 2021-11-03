import React from "react";
import { Link } from "react-router-dom";
import Container from "../Layout/Container";
import MainButton from "../UI/MainButton";
import OutlineButton from "../UI/OutlineButton";


// importing css
import classes from "./Description.module.css";

const Description = () => {
  return (
    <section className={classes.description}>
      <Container>
        <div className={classes.descriptionWrap}>
          <p className={classes.descriptionStage}>SAVE YOUR TIME WITH STACKS</p>
          <h1 className={classes.descriptionTitle}>
            Earn free crypto with Cryptonite
          </h1>
          <p className={classes.descriptionText}>
            A creative agency that lead and inspire
          </p>
          <div className={classes.descriptionBtns}>
            <Link to="/upload">
              <MainButton>Create Item</MainButton>
            </Link>
            <Link to="/discover">
            <OutlineButton>Discover more</OutlineButton>
            </Link>
          </div>
        </div>
        <div className={classes.descriptionGallery}>
          <div className={classes.descriptionPreview}>
            <img src="/assets/images/moneyJar.svg" alt="CTA" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
