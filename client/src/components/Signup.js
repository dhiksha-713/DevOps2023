import React,{useState} from 'react';
import axios from 'axios';
import './style/Signup.css';
// import {Link} from 'react-router-dom'

export default function Signup(props) {

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
    <div className='sign-container'>
      <form className="form form--hidden" id="createAccount" >
            <h1 className="form__title">Create Account</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" id="signupUsername username" className="form__input" autofocus placeholder="Username"  name="username"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="email" className="form__input" autofocus placeholder="Email Address" pattern="[a-z]+.cs+21+@+bmsce.ac.in" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
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
