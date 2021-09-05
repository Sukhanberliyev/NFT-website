import React from "react";
import { Link } from "react-router-dom";

import "./CreateSingle.css";
import Container from "../../Layout/Container";
import OutlineButton from "../../UI/OutlineButton";
import CreateItemTop from "./CreateItemTop";
import CreateItemBottom from "./CreateItemBottom";
import Card from "../../UI/Card";

import nftImage32 from "../../../assets/images/nftImage32.png";
import creator24 from "../../../assets/avatars/creator24.png";
import creator12 from "../../../assets/avatars/creator12.png";
import creator11 from "../../../assets/avatars/creator11.png";

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
              <h2 className="createTitle">Create single collectible</h2>
              <Link to="/upload-multiple" className="createButton">
                <OutlineButton>Switch to Multiple</OutlineButton>
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
                mainNft={nftImage32}
                creator1={creator11}
                creator2={creator12}
                creator3={creator24}
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
