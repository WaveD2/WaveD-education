import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import "./price.css";
import Question from "./question";

const Pricing = () => {
  return (
    <>
      <Back />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Question />
    </>
  );
};

export default Pricing;
