import React, { useState, useEffect } from 'react';
import "./ProductScreen.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

import impchainsaw from '../components/images/STIHL MS250 2.png';

export default function ProductScreen() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams(); // Access the route parameter 'id'
  const navigate = useNavigate(); // Access the navigation function

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  console.log(id);

  useEffect(() => {
    if (product && id && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate('/cart'); // Use the navigate function to navigate to '/cart'
  };

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
  );
}
