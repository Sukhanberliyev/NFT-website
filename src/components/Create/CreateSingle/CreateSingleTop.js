import React from "react";

import add from "../../../assets/icons/add.svg";
import Dropdown from "../../UI/Dropdown";

const CreateSingleTop = () => {
  return (
    <div>
      <div className="createSingleList">
        <div className="createSingleItem">
          <p className="createSingleCategory">Upload file</p>
          <p className="createSingleNote">Drag or choose your file to upload</p>
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
    </div>
  );
};

export default CreateSingleTop;
