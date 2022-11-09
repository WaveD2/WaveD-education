import React from "react";
import Title from "../common/heading/Heading";
import homeAbout from "../../data";
import Awapper from "./AWapper";
import "./about.css";

function AboutCard() {
  return (
    <>
      <section className="aboutHome ">
        <div className="container flexSB">
          <div className="left row">
            <img
              src="https://i.pinimg.com/564x/f0/45/5f/f0455f3b1047c00ed3d787049b9407e4.jpg"
              alt=""
            />
          </div>
          <div className="right row">
            <Title subtitle="LEARN ANYTHING" title="About Online Learning " />
            <div className="items">
              {homeAbout.map((e) => {
                return (
                  <div className="item" key={e.id}>
                    <div className="img">
                      <img src={e.image} alt="ảnh" />
                    </div>
                    <div className="text">
                      <h2>{e.title}</h2>
                      <p>{e.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awapper />
    </>
  );
}

export default AboutCard;
