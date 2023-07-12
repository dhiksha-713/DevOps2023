import React, { useContext, useEffect ,useState } from 'react';
import { useNavigate} from "react-router-dom"
import { LoginContext } from './ContextProvider/Context';
import HeadOffice from './images/ho.jpg';
import demo1 from './images/demo1.jpeg';
import demo2 from './images/demo2.jpeg';
import './style/Home.css';
export default function Home() {

    const { logindata, setLoginData } = useContext(LoginContext);
    console.log(logindata.ValidUserOne) //comment this
    const history = useNavigate();
    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
        // console.log("dash");
        // console.log(token);
      
        const res = await fetch("http://localhost:5000/validuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          }
        });
      
        const data = await res.json();
        // console.log(data)
      
        if (data.status === 401 || !data) {
          // handle unauthorized or empty response
          history("*");
        } else {
          console.log("user verify");
          setLoginData(data)
          history("/");
        }
      };
      
    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            // setData(true)
        }, 2000)

    },[])
  const scrollleft = ()=>{
    var left = document.querySelector(".scroll");
    console.log(left);
    left.scrollBy(400, 0)
}
const scrollright =() =>{
    var right = document.querySelector(".scroll");
    right.scrollBy(-400, 0)
}

  return (
    <div className='divbody'>
      <div className="news">
        <p> News will be displayed here.   News will be displayed here. News will be displayed here.  News will be displayed here.  </p>
    </div>
    <div className="content-img-container" id="content-img-container">
        <div>
            <button className="icon" onClick={scrollright}><i className="fas fa-angle-double-left"></i></button>
        </div>
        <div className="content-gallery">
            <div className="scroll" id="scroll">
                <div className="photo">
                    <img className="imgs" src={HeadOffice} alt='loading..'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo1} alt='loading..'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo2} alt='loading..'/>
                </div>
            </div>
        </div>
        <div>
            <button className="icon" onClick={scrollleft}><i className="fas fa-angle-double-right"></i></button>
        </div>
    </div>
    <div>
        <p className="intro">Saya Enterprises has been providing Sales and Services of Agricultural Machineries and Impletemts to its customer for over 20 years.We have 11 branches in Karnataka and Kerala. We also have a well equiped service section.We have been providing a satisfactory Services to our customers. </p>
    </div>
    </div>
  )
}
