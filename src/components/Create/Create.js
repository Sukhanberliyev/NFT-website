import React from "react";
import { Link, Route } from "react-router-dom";

import nftImage2 from "../../assets/images/nftImage2.png";
import nftImage1 from "../../assets/images/nftImage1.png";

import "./Create.css";

const Create = () => {
  return (
    <section className="upload">
      <div className="uploadContainer">
        <div className="uploadTop">
          <h2 className="uploadTitle">Upload item</h2>
          <p className="uploadInfo">
            Choose <span> “Single”</span> if you want your collectible to be one
            of a kind or choose
            <span> “Multiple”</span> if you want to sell one collectible
            multiple times
          </p>
        </div>
        <div className="uploadList">
          <div className="uploadItem">
            <div className="uploadPreview">
              <img src={nftImage2} alt="img" />
            </div>
            <Link to="/upload-single" className="createBtn">
              Create Single
            </Link>
          </div>
          <div className="uploadItem">
            <div className="uploadPreview">
              <img src={nftImage1} alt="img" />
            </div>
            <Link to="upload-multiple" className="createBtn">Create Multiple</Link>
          </div>
        </div>
        <p className="uploadNote">
          We do not own your private keys and cannot access your funds without
          your confirmation.
        </p>
      </div>
    </section>
  );
};

export default Create;
