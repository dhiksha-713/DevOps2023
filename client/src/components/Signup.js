import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style/mix.css"
export default function Signup(props) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        } else {
            // console.log("user registration succesfully done");


            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });

            const res = await data.json();
            // console.log(res.status);

            if (res.status === 201) {
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
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
