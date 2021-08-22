import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../Layout/Container";
import Dropdown from "../UI/Dropdown";
import "./FAQ.css";
import FAQItem from "./FAQItem";

const faqOptions = ["General", "Support", "Hosting", "Product"];

const faqLists = [
  {
    id: "f1",
    title: "NFT? ERC-721 tokens?",
    description:
      "NFT stands for non-fungible tokens like ERC-721 (a smart contract standard) tokens which are hosted on Ethereum’s own blockchain. NFTs are unique digital items such as collectibles or artworks or game items. As an artist, by tokenizing your work you both ensure that it is unique and brand it as your work. The actual ownership is blockchain-managed.",
  },
  {
    id: "f2",
    title: "What is a crypto wallet?",
    description:
      "A crypto wallet is an application or hardware device that allows individuals to store and transfer digital assets like cryptocurrencies and Non-Fungible Tokens (NFTs). This guide breaks down the crypto wallet basics that you'll need to know before creating and trading items on Cryptonite.",
  },
  {
    id: "f3",
    title: "What crypto wallets can I use with Cryptonite?",
    description:
      "Just as there are many banks and credit cards, there are many different crypto wallet providers to choose from. They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.",
  },
  {
    id: "f4",
    title: "How do I purchase Ethereum (ETH)?",
    description:
      "Ether is the native currency of the Ethereum network and it’s commonly abbreviated to ETH, which is its ticker symbol. You need ETH to pay for some of your interactions with the blockchain and to pay for the items you buy.",
  },
];

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
              {faqLists.map((faqList) => (
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
              {faqLists.map((faqList) => (
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
              {faqLists.map((faqList) => (
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
              {faqLists.map((faqList) => (
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
