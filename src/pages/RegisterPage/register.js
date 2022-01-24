import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { useState, useRef } from "react/cjs/react.development";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const { addUserName } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      //
      await addUserName(nameRef.current.value);
      //

      history("/home");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <div className="register">
      <div className="register__content">
        <img src="/images/5015092.png" alt="Logo" />
        <h1>Msg Mi</h1>
        <h3>Register on Msg Mi</h3>
        {error && (
          <div className="error">
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <img src="/images/register/user-regular.svg" alt="User" />
            <input
              type="text"
              placeholder="Enter your UserName"
              ref={nameRef}
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
          <button disabled={loading} type="submit">
            Submit
          </button>
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

export default Register;
