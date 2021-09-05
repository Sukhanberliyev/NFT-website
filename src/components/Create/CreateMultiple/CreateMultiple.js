import React from "react";
import { Link } from "react-router-dom";

import "../CreateSingle/CreateSingle.css";
import Container from "../../Layout/Container";
import OutlineButton from "../../UI/OutlineButton";
import CreateItemTop from "../CreateSingle/CreateItemTop";
import CreateItemBottom from "../CreateSingle/CreateItemBottom";
import Card from "../../UI/Card";

import nftImage31 from "../../../assets/images/nftImage31.png";
import creator5 from "../../../assets/avatars/creator5.png";
import creator6 from "../../../assets/avatars/creator6.png";
import creator7 from "../../../assets/avatars/creator7.png";

const clearSvg = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" />
    <path d="M16 8L8 16M8 8L16 16L8 8Z" />
  </svg>
);

const CreateSingle = () => {
  return (
    <section className="create">
      <Container>
        <div className="createContainer">
          <div className="createWrapper">
            <div className="createHead">
              <h2 className="createTitle">Create multiple collectible</h2>
              <Link to="/upload-single" className="createButton">
                <OutlineButton>Switch to Single</OutlineButton>
              </Link>
            </div>
            <div className="createForm">
              <CreateItemTop />
              <CreateItemBottom />
            </div>
          </div>
          <div className="createPreview">
            <div className="previewInner">
              <p className="previewInfo">Preview</p>
              <Card
                mainNft={nftImage31}
                creator1={creator5}
                creator2={creator6}
                creator3={creator7}
              />
              <div className="previewClear">
                {clearSvg}
                Clear all
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CreateSingle;
