import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";
import OutlineButton from "../UI/OutlineButton";
import "./FAQ.css";

const faqOptions = ["General", "Support", "Hosting", "Product"];

const FAQ = () => {
  return (
    <section className="faq">
      <Container>
        <div className="faqTop">
          <p className="faqStage">LEARN HOW TO GET STARTED</p>
          <h2 className="faqTitle">Frequently asked questions</h2>
          <p className="faqInfo">
            Join Stacks community now to get free updates and also alot of
            freebies are waiting for you or <a href="">Contact Support</a>
          </p>
          <div className="faqMobile">
            <Dropdown options={faqOptions} />
          </div>
        </div>
        <div className="faqRow">
          <div className="faqColumn">
            <div className="faqNav">
              <Link className="faqLink">General</Link>
              <Link className="faqLink">Support</Link>
              <Link className="faqLink">Hosting</Link>
              <Link className="faqLink">Product</Link>
            </div>
          </div>
          <div className="faqColumn">
            <div className="faqBox">
              <div className="faqItem">
                <div className="faqHead">
                  How does it works
                  <FontAwesomeIcon className="faqIcon" icon={faChevronDown} />
                </div>
                <div className="faqBody">
                  <div className="faqContent">
                    The Stacks series of products: Stacks: Landing Page Kit,
                    Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                    production-ready library of stackable content blocks built
                    in React Native. Mix-and-match dozens of responsive elements
                    to quickly configure your favorite landing page layouts or
                    hit the ground running with 10 pre-built templates, all in
                    light or dark mode."
                  </div>
                  <div className="faqBtn">
                    <OutlineButton>Learn more</OutlineButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
