import { Link } from "react-router-dom";

import React from "react";

const login = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__content">
        <img src="/images/5015092.png" alt="Logo" />
        <h1>Msg Mi</h1>
        <h3>Login to Msg Mi</h3>

        <form>
          <div className="email">
            <img src="/images/login/envelope-regular.svg" alt="email" />
            <input type="email" placeholder="Email Adress" />
          </div>
          <div className="password">
            <img src="/images/login/lock-solid.svg" alt="password" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>

        <div className="outerdiv__registration">
          <p>
            Don't have an account?
            <Link to="/register">
              <span>Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
