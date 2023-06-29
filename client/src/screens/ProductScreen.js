import React from 'react'
import "./ProductScreen.css";
import impchainsaw from "./images/STIHL MS250 2.png";
export default function ProductScreen() {
  return (
    <div className='productscreen'>
        <div className="productscreen__left">
            <div className="left__image">
                <img src={impchainsaw} alt=''/>
            </div>

        </div>  
        <div className="productscreen__right"></div>
    </div>
  )
}
