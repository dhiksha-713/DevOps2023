import React from 'react';
import './style/Login.css';
import './style/Login2.css';
import {Link} from 'react-router-dom'
// import './scripts/LoginScript';

export default function Login() {
    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form__message");
        messageElement.textContent = message;
        messageElement.classList.remove("form__message--success", "form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }
    
    function setInputError(inputElement, message) {
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    }
    
    function clearInputError(inputElement) {
        inputElement.classList.remove("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
    
        document.querySelector("#linkCreateAccount").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");
        });
    
        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        });
    
        // loginForm.addEventListener("submit", e => {
        //     e.preventDefault();
    
        //     // Perform your AJAX/Fetch login
            
        //     setFormMessage(loginForm, "error", "Invalid username/password combination");
        // });
    
        document.querySelectorAll(".form__input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                    setInputError(inputElement, "Username must be at least 10 characters in length");
                }
            });
    
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });
    
    
  return (
    <div className="body-login" >
      <div className="login-container">
        <form className="form" id="login" action="connect.php" method="post">
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="Email" pattern="[a-z]+.cs+21+@+bmsce.ac.in" id="email" name="email" required/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" id="password" name="password" required/>
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit"><a href="./">Continue</a></button>
            {/* <!-- <p className="form__text">
                <a href="#" className="form__link">Forgot your password?</a> -->
            </p> */}
            <p className="form__text">
                <Link className="form__link" to="/login" id="linkCreateAccount">Don't have an account? Create account
                </Link>
            </p>
        </form>
        <form className="form form--hidden" id="createAccount" action="qonnect.php" method="post">
            <h1 className="form__title">Create Account</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" id="signupUsername username" className="form__input" autofocus placeholder="Username"  name="username"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="Email Address" pattern="[a-z]+.cs+21+@+bmsce.ac.in" id="email" name="email"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" id="password" name="password"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Confirm password" id="cpassword" name="cpassword"/>
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit">Continue</button>
            <p className="form__text">
                <Link className="form__link" to='/login' id="linkLogin">Already have an account? Sign in</Link>
            </p>
        </form>
    </div>
    </div>
  )
}
