import React from "react";

import Container from "../Layout/Container";
import WalletItem from "./WalletItem";
import WalletWrapper from "./WalletWrapper";

const Wallet = () => {
  return (
    <section>
      <Container>
        <div className="walletBody">
          <ul className="walletMenu">
            <WalletItem />
          </ul>
          <WalletWrapper />
        </div>
      </Container>
    </section>
  );
};

export default Wallet;
