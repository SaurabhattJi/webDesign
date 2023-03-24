import React from "react";
import Card from "./card/Card";
import "./content.css";

import Textfile from "./textfile/Textfile";
import SingleCard from "./singleCard/SingleCard";
import MainCard from "./threeCardContent/MainCard";
import Trusted from "./trusted/Trusted";
import Form from "./form/Form";

const Content = () => {
  return (
    <>
      {" "}
      <Card />
      <Textfile />
      <SingleCard />
      <MainCard texth3={"IT Management & Service"} />
      <MainCard texth3={"Cyber Security Service"} />
      <MainCard texth3={"Cloud Computing Service"} />
      <Trusted />
      <Form />
    </>
  );
};

export default Content;
