import React from "react";
import Heading from "../../common/heading/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
