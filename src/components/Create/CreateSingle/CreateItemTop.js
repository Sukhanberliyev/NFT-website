import React from "react";

import add from "../../../assets/icons/add.svg";
import Dropdown from "../../UI/Dropdown";

const CreateSingleTop = () => {
  return (
    <div>
      <div className="createList">
        <div className="createItem">
          <p className="createCategory">Upload file</p>
          <p className="createNote">Drag or choose your file to upload</p>
          <div className="createFile">
            <input className="createInput" type="file" />
            <div className="createIcon">
              <img src={add} alt="" />
            </div>
            <p className="createFormat">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
          </div>
        </div>
        <div className="createItem">
          <p className="createCategory">Item details</p>
          <div className="createFieldset">
            <div className="createField">
              <p className="createFieldLabel">Item name</p>
              <input
                className="createFieldInput"
                name="item"
                type="text"
                placeholder="e. g. Redeemable Bitcoin Card with logo"
                required
              />
            </div>
            <div className="createField">
              <p className="createFieldLabel">Description</p>
              <input
                className="createFieldInput"
                name="item"
                type="text"
                placeholder="e. g. “After purchasing you will able to recived the logo”"
                required
              />
            </div>
            <div className="createRow">
              <div className="createColumn">
                <div className="createField">
                  <p className="createColumnLabel">Royalty</p>
                  <div className="createDropdown">
                    <Dropdown options={["10%", "20%", "30%"]} />
                  </div>
                </div>
              </div>
              <div className="createColumn">
                <div className="createField">
                  <p className="createColumnLabel">Size</p>
                  <div className="createDropdown">
                    <input
                      className="createFieldInput"
                      type="text"
                      name=""
                      id=""
                      placeholder="e.g Size"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="createColumn">
                <div className="createField">
                  <p className="createColumnLabel">Propertie</p>
                  <div className="createDropdown">
                    <input
                      className="createFieldInput"
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
