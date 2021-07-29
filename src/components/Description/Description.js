import React from "react";
import Container from "../Layout/Container";
import MainButton from "../UI/MainButton";
import OutlineButton from "../UI/OutlineButton";

// importing css
import classes from "./Description.module.css";

const Description = () => {
  return (
    <section>
      <Container>
        <div className={classes.descriptionWrap}>
          <p className={classes.descriptionStage}>Save your time with Stacks</p>
          <h1 className={classes.descriptionTitle}>
            Save your time with Stacks
          </h1>
          <p className={classes.descriptionText}>
            A creative agency that lead and inspire
          </p>
          <div className={classes.descriptionBtns}>
            <MainButton>Create Item</MainButton>
            <OutlineButton>Discover more</OutlineButton>
          </div>
        </div>
        <div className={classes.descriptionGallery}>
          <div className={classes.descriptionPreview}>
            <img src="" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
