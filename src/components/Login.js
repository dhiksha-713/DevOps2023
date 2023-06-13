import React from 'react';
import './style/Login.css';
import './style/Login2.css';

export default function Login() {
  return (
    <div>
      <div className="container">
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
                <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
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
                <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
            </p>
        </form>
    </div>
    </div>
  )
}
