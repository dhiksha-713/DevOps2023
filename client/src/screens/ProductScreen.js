import React from 'react'
import "./ProductScreen.css";
import impchainsaw from "../components/images/STIHL MS250 2.png";
export default function ProductScreen() {
  return (
    <div className='productscreen divbody' >
        <div className="productscreen__left">
            <div className="left__image">
                <img src={impchainsaw} alt=''/>
            </div>
        <div className="left__info">
            <p className='left__name'>Chainsaw 1</p>
            <p>Price: ₹1499</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet maxime reprehenderit et molestias ea nihil eius tempora illum? quia iusto assumenda neque optio libero soluta maxime!</p>
        </div>
        </div>  
        <div className="productscreen__right">
            <div className='right__info'>
                <p>
                    Price: <span>₹1499</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Qty
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </p>
                <p>
                    <button type='button'>Add to Cart</button>
                </p>
            </div>
        </div>
    </div>
  )
}