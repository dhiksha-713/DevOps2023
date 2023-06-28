import React,{useState} from 'react';
import axios from 'axios';
import './style/Signup.css';
import {Link,useNavigate} from 'react-router-dom'
import { set } from 'mongoose';

export default function Signup(props) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [data, setData] = useState({
        username: "",
        email:"",
        password:""
    })
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/users"
            const {data:res} = await axios.post(url,data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >=400 && error.response.status<=500){
                setError(error.response.data.message)
            }
        }
    }

    // async function submit(e){
    //     e.preventDefault();

    //     try {
    //         await axios.post("http://localhost:5000/api/users",{email,password})
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
  return (
    <div className='sign-container'>
      <form className="form form--hidden" id="createAccount" onSubmit={handleSubmit}>
            <h1 className="form__title">Create Account</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" id="signupUsername username" className="form__input" autoFocus placeholder="Username"  name="username" onChange={handleChange}/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="email" className="form__input" autoFocus placeholder="Email Address" pattern="[a-z]+.cs+21+@+bmsce.ac.in" id="email" name="email" onChange={handleChange}/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autoFocus placeholder="Password" id="password" name="password" onChange={handleChange}/>
                <div className="form__input-error-message"></div>
            </div>
            {/* <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Confirm password" id="cpassword" name="cpassword"/>
                <div className="form__input-error-message"></div>
            </div> */}
            {error&& <div>{error}</div>}
            <button className="form__button" type="submit" >Sign Up</button>
            <p className="form__text">
                {/* <button className="form__link"  id="linkLogin" onClick={()=>props.onFormSwitch('login')}>Already have an account? Sign in</button> */}
                <Link to="/login" className="form__link"  id="linkLogin">
                Already have an account? Sign in
            </Link>
            </p>
        </form>
    </div>
  )
}
