import React from 'react'
import './style/CartItem.css';
import impchainsaw from "../components/images/STIHL MS250 2.png";
import { Link } from "react-router-dom";
export default function CartItem({ item, qtyChangeHandler, removeHandler }) {
  return (
    <div className='cartitem'>
        <div className="cartitem__image">
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <Link to={`/product/${item.product}`}className='cartitem__name'>
            <p>{item.name}</p>
        </Link>
        <p className="cartitem__price">₹{item.price}</p>

        <select className='cartitem__select' value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button className="cartitem__deleteBtn"
         onClick={() => removeHandler(item.product)}>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

