import React from "react";
import Back from "../common/back/Back";

import "./Login.css";
const Login = () => {
  return (
    <>
      <Back />
      <div className="container flexSB ">
        <div className="login-content">
          <form action="/">
            <h2 className="title">Login</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input type="text" className="name" placeholder="Name" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                  onChange={(e) => {}}
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
