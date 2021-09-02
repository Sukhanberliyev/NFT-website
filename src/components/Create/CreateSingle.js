import React from "react";
import { Link } from "react-router-dom";

import "./CreateSingle.css";
import Container from "../Layout/Container";
import OutlineButton from "../UI/OutlineButton";
import MainButton from "../UI/MainButton";
import Dropdown from "../UI/Dropdown";
// adding icon
import add from "../../assets/icons/add.svg";
import plus from "../../assets/icons/plus.svg";

const CreateSingle = () => {
  return (
    <section className="createSingle">
      <Container>
        <div className="createSingleWrapper">
          <div className="createSingleHead">
            <h2 className="createSingleTitle">Create single collectible</h2>
            <Link className="createSingleButton">
              <OutlineButton>Switch to Multiple</OutlineButton>
            </Link>
          </div>
          <div className="createSingleForm">
            <div className="createSingleList">
              <div className="createSingleItem">
                <p className="createSingleCategory">Upload file</p>
                <p className="createSingleNote">
                  Drag or choose your file to upload
                </p>
                <div className="createSingleFile">
                  <input className="createSingleInput" type="file" />
                  <div className="createSingleIcon">
                    <img src={add} alt="" />
                  </div>
                  <p className="createSingleFormat">
                    PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                  </p>
                </div>
              </div>
              <div className="createSingleItem">
                <p className="createSingleCategory">Item details</p>
                <div className="createSingleFieldset">
                  <div className="createSingleField">
                    <p className="createSingleFieldLabel">Item name</p>
                    <input
                      className="createSingleFieldInput"
                      name="item"
                      type="text"
                      placeholder="e. g. Redeemable Bitcoin Card with logo"
                      required
                    />
                  </div>
                  <div className="createSingleField">
                    <p className="createSingleFieldLabel">Description</p>
                    <input
                      className="createSingleFieldInput"
                      name="item"
                      type="text"
                      placeholder="e. g. “After purchasing you will able to recived the logo”"
                      required
                    />
                  </div>
                  <div className="createSingleRow">
                    <div className="createSingleColumn">
                      <div className="createSingleField">
                        <p className="createSingleColumnLabel">Royalty</p>
                        <div className="createSingleDropdown">
                          <Dropdown options={["10%", "20%", "30%"]} />
                        </div>
                      </div>
                    </div>
                    <div className="createSingleColumn">
                      <div className="createSingleField">
                        <p className="createSingleColumnLabel">Size</p>
                        <div className="createSingleDropdown">
                          <input
                            className="createSingleFieldInput"
                            type="text"
                            name=""
                            id=""
                            placeholder="e.g Size"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="createSingleColumn">
                      <div className="createSingleField">
                        <p className="createSingleColumnLabel">Propertie</p>
                        <div className="createSingleDropdown">
                          <input
                            className="createSingleFieldInput"
                            type="text"
                            name=""
                            id=""
                            placeholder="e.g Propertie"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="createSingleOptions">
              <div className="createSingleOptionCategory">
                <div className="categoryBox">
                  <p className="categoryTitle">Put on sale</p>
                  <p className="categoryText">
                    You will receive bids on this item
                  </p>
                </div>
                <div className="switch">
                  <input
                    className="switchInput"
                    type="checkbox"
                    checked="checked"
                  />
                  <span className="switchInner">
                    <span className="switchBox"></span>
                  </span>
                </div>
              </div>
              <div className="createSingleOptionCategory">
                <div className="categoryBox">
                  <p className="categoryTitle">Instant sale price</p>
                  <p className="categoryText">
                    Enter the price for which the item will be instantly sold
                  </p>
                </div>
                <div className="switch">
                  <input
                    className="switchInput"
                    type="checkbox"
                    checked="checked"
                  />
                  <span className="switchInner">
                    <span className="switchBox"></span>
                  </span>
                </div>
              </div>
              <div className="createSingleOptionCategory">
                <div className="categoryBox">
                  <p className="categoryTitle">Unlock once purchased</p>
                  <p className="categoryText">
                    Content will be unlocked after successful transaction
                  </p>
                </div>
                <div className="switch">
                  <input
                    className="switchInput"
                    type="checkbox"
                    checked="checked"
                  />
                  <span className="switchInner">
                    <span className="switchBox"></span>
                  </span>
                </div>
              </div>
              <div className="createSingleOptionCategory">
                <div className="categoryBox">
                  <p className="categoryTitle">Choose collection</p>
                  <p className="categoryText">
                    Choose an exiting collection or create a new one
                  </p>
                </div>
              </div>
              <div className="creatSingleCards">
                <div className="createCard">
                  <div className="createPlus">
                    <img src={plus} alt="" />
                  </div>
                  <p className="createSubtitle">Create Collection</p>
                </div>
                <div className="createCard">
                  <div className="createPlus">
                    <img src={plus} alt="" />
                  </div>
                  <p className="createSubtitle">Funny 3D Robot Alex</p>
                </div>
                <div className="createCard">
                  <div className="createPlus">
                    <img src={plus} alt="" />
                  </div>
                  <p className="createSubtitle">Justin the creator</p>
                </div>
                <div className="createCard">
                  <div className="createPlus">
                    <img src={plus} alt="" />
                  </div>
                  <p className="createSubtitle">Outlined celebrities</p>
                </div>
              </div>
            </div>
            <div className="createSingleFoot">
              <MainButton>Create item</MainButton>
            </div>
          </div>
        </div>
        <div className="createSinglePreview"></div>
      </Container>
    </section>
  );
};

export default CreateSingle;
