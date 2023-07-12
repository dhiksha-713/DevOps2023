import React from 'react'
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

import impchainsaw from "../components/images/STIHL MS250 2.png";
import { Link } from "react-router-dom";

export default function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
  
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
    /*params property of the match object is undefined. This can occur if the ProductScreen component is rendered before the match object is fully initialized.

    To handle this situation, you can add a conditional check to ensure that the match object and its params property are defined before accessing them. */
    // console.log(product && match && match.params && match.params.id && match.params.id !== product._id)
    // console.log(product)
    console.log(match)
    // console.log(id)
    // console.log(match.params)
    useEffect(() => {
      if (product && match && match.params && match.params.id && match.params.id !== product._id) {
        dispatch(getProductDetails(match.params.id));
      }
    }, [dispatch,  match,product]);
  //if product exsists and product's id is not equal to product in state then dispatch the action "getProductDetails".
    // const addToCartHandler = () => {
    //   dispatch(addToCart(product._id, qty));
    //   history.push(`/cart`);
    // };
  

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
                    Price: <span>₹14999</span>
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
                <Link to="/cart" className='button_cart'>
                    Add to Cart
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}