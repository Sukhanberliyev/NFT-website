import React from "react";
import Container from "../Layout/Container";

import "./Nft.css";
import nftImage32 from "../../assets/images/nftImage32.png";
import creator12 from "../../assets/avatars/creator12.png";
import creator11 from "../../assets/avatars/creator11.png";
import creator15 from "../../assets/avatars/creator15.png";

const Nft = () => {
  return (
    <section className="nft">
      <Container>
        <div className="nftBg">
          <div className="nftPreview">
            <div className="nftCategories">
              <div className="nftStatus statusBlack">ART</div>
              <div className="nftStatus statusPurple">UNLOCKABLE</div>
            </div>
            <img src={nftImage32} alt="nft" />
          </div>
          <div className="nftOptions"></div>
        </div>
        <div className="nftDetails"></div>
      </Container>
    </section>
  );
};

export default Nft;
