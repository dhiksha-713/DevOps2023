import React, { useState } from 'react';
import './style/Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const response = await axios.post(url, data);
      localStorage.setItem("token", response.data.data);
      window.location = "/";
      console.log(response.data.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="body-login">
      <div className="login-container">
        <form className="form" id="login" onSubmit={handleSubmit}>
          <h1 className="form__title">Login</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input
              type="email"
              className="form__input"
              autoFocus
              placeholder="Email"
              pattern="[a-z]+.cs+21+@+bmsce.ac.in"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              autoFocus
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <div className="form__input-error-message"></div>
          </div>
          {error && <div>{error}</div>}

          <button className="form__button" type="submit">Continue</button>
          <p className="form__text">
            <Link to="/signup" className="form__link" id="linkCreateAccount">
              Don't have an account? Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
