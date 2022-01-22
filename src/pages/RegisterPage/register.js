import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import React from "react";
import { useState, useRef } from "react/cjs/react.development";

const register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    signup(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <div className="register">
      <div className="register__content">
        <img src="/images/5015092.png" alt="Logo" />
        <h1>Msg Mi</h1>
        <h3>Register on Msg Mi</h3>
        <form>
          <div>
            <img src="/images/register/user-regular.svg" alt="User" />
            <input
              type="text"
              placeholder="Enter your UserName"
              ref={userRef}
            />
          </div>
          <div>
            <img src="/images/login/envelope-regular.svg" alt="Email" />
            <input
              type="email"
              placeholder="Enter your Email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <img src="/images/login/lock-solid.svg" alt="Password" />
            <input
              type="password"
              placeholder="Enter your Password"
              ref={passwordRef}
            />
          </div>
          <div>
            <img src="/images/register/sync-solid.svg" alt="Confirm Password" />
            <input
              type="password"
              placeholder="Confirm  Password"
              ref={passwordConfirmRef}
            />
          </div>
          <button>Submit</button>
        </form>
        <div className="outerdiv__login">
          <p>
            Already have an Account{" "}
            <Link to="/">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default register;
