import React from "react";
import Card from "./card/Card";
import "./content.css";
import Textfile from "./textfile/Textfile";
import SingleCard from "./singleCard/SingleCard";
import MainCard from "./threeCardContent/MainCard";
import Trusted from "./trusted/Trusted";
import Form from "./form/Form";
import Success from "./success/Success";

const Content = () => {
  return (
    <>
      {" "}
      <Card />
      <Textfile />
      <SingleCard
        greentext={"Worldwide Service & Local Expertise"}
        blacktext={
          "Our technology allows you to offer the latest software to your posssible customers. "
        }
      />
      <MainCard texth3={"IT Management & Service"} />
      <MainCard texth3={"Cyber Security Service"} />
      <MainCard texth3={"Cloud Computing Service"} />
      <Trusted />
      <Form />
      <div className="Cardhover">
        <SingleCard
          greentext={":-) 1500 satisfied customers around the globe"}
          blacktext={
            "If your are looking for a rewarding career and the chance to make an impact. you've come to right place. WE will transform your business through our techniques. "
          }
        />
      </div>
      <Success />
    </>
  );
};

export default Content;
