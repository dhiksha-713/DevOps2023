import React from 'react'
import {Link} from 'react-router-dom'
import "./style/Product.css";
import impchainsaw from "./images/STIHL MS250 2.png";
export default function Product({ imageUrl, description, price, name, productId }) {
  return (
    <div className='product__chainsaw'>
       <img src={imageUrl} alt={name}/>

       <div className='product__chainsaw__info' >
        <p className='chainsaw_info__name'>{name}</p>

        <p className='chainsaw_info__description'>
        {description.substring(0, 100)}...
        </p>

        <p className='chainsaw_info__price'>₹{price}</p>
        <Link to={`/product/${productId}`}className='chainsaw_info__button'>View</Link>
       </div>
    </div>
  )
}
