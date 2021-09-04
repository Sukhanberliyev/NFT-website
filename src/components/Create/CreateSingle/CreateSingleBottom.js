import React from "react";

import CreateSingleOptionCategory from "./CreateSingleCategory";
import plus from "../../../assets/icons/plus.svg";
import MainButton from "../../UI/MainButton";

const categories = [
  {
    id: "c1",
    title: "Put on sale",
    text: "You will receive bids on this item",
  },
  {
    id: "c2",
    title: "Instant sale price",
    text: "Enter the price for which the item will be instantly sold",
  },
  {
    id: "c3",
    title: "Unlock once purchased",
    text: "Content will be unlocked after successful transaction",
  },
];

const CreateSingleBottom = () => {
  return (
    <div>
      <div className="createSingleOptions">
        {categories.map((category) => (
          <CreateSingleOptionCategory
            key={category.id}
            title={category.title}
            text={category.text}
          />
        ))}
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
  );
};

export default CreateSingleBottom;
