import React from "react";
import { Link } from "react-router-dom";

import "./CreateSingle.css";
import Container from "../../Layout/Container";
import OutlineButton from "../../UI/OutlineButton";

import CreateSingleTop from "./CreateSingleTop";
import CreateSingleBottom from "./CreateSingleBottom";

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
            <CreateSingleTop />
            <CreateSingleBottom />
          </div>
        </div>
        <div className="createSinglePreview"></div>
      </Container>
    </section>
  );
};

export default CreateSingle;
