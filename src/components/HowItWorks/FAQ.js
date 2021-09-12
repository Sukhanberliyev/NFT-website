import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";
import "./FAQ.css";
import FAQItem from "./FAQItem";
import FaqDataOne from "../../data/FaqData/FaqOne.json"
import FaqDataTwo from "../../data/FaqData/FaqTwo.json"

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
            freebies are waiting for you or <Link href="">Contact Support</Link>
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
            <div
              className={toggleState === 1 ? "faqBox active" : "faqBox"}
              onClick={() => toggleTab(1)}
            >
              {FaqDataOne.map((faqList) => (
                <FAQItem
                  key={faqList.id}
                  title={faqList.title}
                  description={faqList.description}
                />
              ))}
            </div>
            <div
              className={toggleState === 2 ? "faqBox active" : "faqBox"}
              onClick={() => toggleTab(2)}
            >
              {FaqDataTwo.map((faqList) => (
                <FAQItem
                  key={faqList.id}
                  title={faqList.title}
                  description={faqList.description}
                />
              ))}
            </div>
            <div
              className={toggleState === 3 ? "faqBox active" : "faqBox"}
              onClick={() => toggleTab(3)}
            >
              {FaqDataOne.map((faqList) => (
                <FAQItem
                  key={faqList.id}
                  title={faqList.title}
                  description={faqList.description}
                />
              ))}
            </div>
            <div
              className={toggleState === 4 ? "faqBox active" : "faqBox"}
              onClick={() => toggleTab(4)}
            >
              {FaqDataTwo.map((faqList) => (
                <FAQItem
                  key={faqList.id}
                  title={faqList.title}
                  description={faqList.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
