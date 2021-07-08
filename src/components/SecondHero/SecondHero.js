import React from "react";

import Container from "../Layout/Container";

import HeroRow from "./HeroRow";
import classes from "./SecondHero.module.css";
import SecondHeroSidebar from "./SecondHeroSidebar";

const SecondHero = () => {
  return (
    <section>
      <Container>
        <div className={classes.secondHero}>
          <HeroRow />
          <SecondHeroSidebar />
        </div>
      </Container>
    </section>
  );
};

export default SecondHero;
