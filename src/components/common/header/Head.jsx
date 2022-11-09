import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <Link to="/">
            <div className="logo">
              <h1>
                <span>W</span>aveD
              </h1>
              <span>ONLINE EDUCATION & LEARING</span>
            </div>
          </Link>

          <div className="social">
            <a href="https://www.facebook.com/WaveD.02">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com/wavedt02">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://github.com/WaveD2">
              <i className="fab fa-github icon"></i>
            </a>
            <div className="user">
              <i class="fa-solid fa-user icon "></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Head;
