import React from 'react'
import {Link} from 'react-router-dom'
import "./style/Product.css";
import impchainsaw from "./images/STIHL MS250 2.png";
export default function Product() {
  return (
    <div className='product__chainsaw'>
       <img src={impchainsaw} alt='error'/>
       <div className='product__chainsaw__info' >
        <p className='chainsaw_info__name'>Product 1</p>
        <p className='chainsaw_info__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat iste perspiciatis tempora. Nesciunt saepe labore voluptatum corporis nulla natus architecto eum, qui unde eaque mollitia sunt autem incidunt rerum?
        </p>
        <p className='chainsaw_info__price'>₹1499</p>
        <Link to={`/product/${1111}`}className='chainsaw_info__button'>View</Link>
       </div>
    </div>
  )
}
