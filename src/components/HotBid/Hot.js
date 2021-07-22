import React from "react";

// Importing components
import Container from "../Layout/Container";

// importing css
import classes from "./Hot.module.css";

// import sliderƒ

const hot = () => {
  return (
    <section className={classes.hot}>
      <Container>
        <div className={classes.hotBox}>
          <h3 className={classes.hotTitle}>Hot bid</h3>
            <div className={classes.hotInner}>
               
            </div>
        </div>
      </Container>
    </section>
  );
};

export default hot;
