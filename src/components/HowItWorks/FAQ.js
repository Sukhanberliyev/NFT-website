import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";
import OutlineButton from "../UI/OutlineButton";
import "./FAQ.css";

const faqOptions = ["General", "Support", "Hosting", "Product"];

const FAQ = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
              <div
                className={toggleState === 1 ? "faqLink active" : "faqLink"}
                onClick={() => toggleTab(1)}
              >
                General
              </div>
              <div
                className={toggleState === 2 ? "faqLink active" : "faqLink"}
                onClick={() => toggleTab(2)}
              >
                Support
              </div>
              <div
                className={toggleState === 3 ? "faqLink active" : "faqLink"}
                onClick={() => toggleTab(3)}
              >
                Hosting
              </div>
              <div
                className={toggleState === 4 ? "faqLink active" : "faqLink"}
                onClick={() => toggleTab(4)}
              >
                Product
              </div>
            </div>
          </div>
          <div className="faqColumn">
            {/* *************************** FIRST FAQ START *************************** */}
            <div className={toggleState === 1 ? "faqBox active" : "faqBox"}
                onClick={() => toggleTab(1)}>
              <div className="faqItem">
                <div className="faqHead">
                  This is for first faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for first faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for first faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for first faq
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
            {/* *************************** FIRST FAQ END *************************** */}

            {/* *************************** SECOND FAQ START *************************** */}
            <div className={toggleState === 2 ? "faqBox active" : "faqBox"}
                onClick={() => toggleTab(2)}>
              <div className="faqItem">
                <div className="faqHead">
                  This is for second faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for second faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for second faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for second faq
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
            {/* *************************** SECOND FAQ END *************************** */}
            {/* *************************** THIRD FAQ START *************************** */}
            <div className={toggleState === 3 ? "faqBox active" : "faqBox"}
                onClick={() => toggleTab(3)}>
              <div className="faqItem">
                <div className="faqHead">
                  This is for third faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for third faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for third faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for third faq
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
            {/* *************************** THIRD FAQ END *************************** */}
            {/* *************************** FOURTH FAQ START *************************** */}
            <div className={toggleState === 4 ? "faqBox active" : "faqBox"}
                onClick={() => toggleTab(4)}>
              <div className="faqItem">
                <div className="faqHead">
                  This is for fourth faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for fourth faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for fourth faq
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
              <div className="faqItem">
                <div className="faqHead">
                  This is for fourth faq
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
            {/* *************************** FOURTH FAQ END *************************** */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
