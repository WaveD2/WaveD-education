import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import "../about/about.css";
import AWapper from "../about/AWapper";

const Team = () => {
  return (
    <>
      <Back />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <AWapper />
    </>
  );
};

export default Team;
