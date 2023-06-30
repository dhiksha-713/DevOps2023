import React from 'react'
import './style/CartItem.css';
import impchainsaw from "../components/images/STIHL MS250 2.png";
import { Link } from "react-router-dom";
export default function CartItem() {
  return (
    <div className='cartitem'>
        <div className="cartitem__image">
            <img src={impchainsaw}/>
        </div>
        <Link to={`/product/${111}`}className='cartitem__name'>
            <p>Product 1</p>
        </Link>
        <p className="cartitem__price">₹14999</p>

        <select className='cartitem__select'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button className="cartitem__deleteBtn">
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

