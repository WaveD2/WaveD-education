import React from "react";
import homeAbout from "../../data";
function Awapper() {
  return (
    <>
      <section className="wrapper">
        <div className="container grid">
          {homeAbout.map((val) => {
            return (
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                  <p>{val.des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Awapper;
