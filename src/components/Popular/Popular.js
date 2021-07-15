import React from "react";

// importing css
import classes from "./Popular.module.css";
// importing components
import Container from "../Layout/Container";
import PopularTop from "./PopularTop";

const Popular = () => {
  return (
    <section className={classes.popular}>
      <Container>
        <PopularTop />
        <div className={classes.popularBottom}></div>
      </Container>
    </section>
  );
};

export default Popular;
