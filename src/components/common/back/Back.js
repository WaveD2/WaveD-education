import React from "react";
import { useLocation } from "react-router-dom";

const Back = () => {
  const location = useLocation();
  return (
    <div className="back">
      <section className="box">
        {/* <h2>Home/ {location.pathname.split("/")[1]}</h2> */}
      </section>
      {/* <div className="margin"></div> */}
    </div>
  );
};

export default Back;
