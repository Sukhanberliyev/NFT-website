import React from "react";
import { Link } from "react-router-dom";

import Container from "../Layout/Container";
import OutlineButton from "../UI/OutlineButton";
import classes from "./SecondHero.module.css";

const SecondHero = () => {
  return (
    <section>
      <Container>
        <div className={classes.secondHero}>
          <div className={classes.secondHeroRow}>
            <div className={classes.columnOne}>
              <Link className={classes.preview}>
                <div className={classes.previewImg}></div>
                <div className={classes.previewDetails}></div>
              </Link>
            </div>
            <div className={classes.columnTwo}></div>
          </div>
          <div className={classes.sideBar}>
            <p>latest upload from creators</p>
            <div className={classes.creatorList}></div>
            <OutlineButton></OutlineButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecondHero;
