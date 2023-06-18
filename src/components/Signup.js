import React from 'react';
import './style/Signup.css';
// import {Link} from 'react-router-dom'

export default function Signup(props) {
  return (
    <div className='sign-container'>
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
                <button className="form__link"  id="linkLogin" onClick={()=>props.onFormSwitch('login')}>Already have an account? Sign in</button>
            </p>
        </form>
    </div>
  )
}
