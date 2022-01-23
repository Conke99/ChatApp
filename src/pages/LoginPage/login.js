import { Link, useNavigate } from "react-router-dom";

import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/home");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="loginPage">
      <div className="loginPage__content">
        <img src="/images/5015092.png" alt="Logo" />
        <h1>Msg Mi</h1>
        <h3>Login to Msg Mi</h3>
        {error && (
          <div className="error">
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="email">
            <img src="/images/login/envelope-regular.svg" alt="email" />
            <input ref={emailRef} type="email" placeholder="Email Adress" />
          </div>
          <div className="password">
            <img src="/images/login/lock-solid.svg" alt="password" />
            <input ref={passwordRef} type="password" placeholder="Password" />
          </div>
          <button disabled={loading}>Login</button>
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

export default Login;
