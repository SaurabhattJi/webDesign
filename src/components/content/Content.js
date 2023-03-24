import React from "react";
import Card from "./card/Card";
import "./content.css";

import Textfile from "./textfile/Textfile";
import SingleCard from "./singleCard/SingleCard";

const Content = () => {
  return (
    <>
      {" "}
      <Card />
      <Textfile />
      <SingleCard />
    </>
  );
};

export default Content;
