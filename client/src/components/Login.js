import React, {useState} from 'react';
import './style/Login.css';
import axios from 'axios';
// import {Link} from 'react-router-dom'


export default function Login(props) {
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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/login",{email,password})
        } catch (error) {
            console.log(error)
        }
    }
    
    
  return (
    <div className="body-login" >
      <div className="login-container">
        <form className="form" id="login" >
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="email" className="form__input" autofocus placeholder="Email" pattern="[a-z]+.cs+21+@+bmsce.ac.in" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit" onClick={submit}><a href="./">Continue</a></button>
            {/* <!-- <p className="form__text">
                <a href="#" className="form__link">Forgot your password?</a> -->
            </p> */}
            <p className="form__text">
                <button className="form__link" id="linkCreateAccount" onClick={() => props.onFormSwitch('register')}>Don't have an account? Create account
                </button>
            </p>
        </form>
    </div>
    </div>
  )
}
