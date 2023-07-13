import React, { useState, useEffect } from 'react';
import "./ProductScreen.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

export default function ProductScreen() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams(); // Access the route parameter 'id'
  const navigate = useNavigate(); // Access the navigation function

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  // console.log(id);

  useEffect(() => {
    if (product && id && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate('/cart'); // Use the navigate function to navigate to '/cart'
  };
// console.log(product.imageUrl)
  return (
    <div className='productscreen divbody' >
        {loading ? <h2>Loading...</h2> : error ?<h2>{error}</h2>: (
            <>
            <div className="productscreen__left">
            <div className="left__image">
                <img src={product.imageUrl} alt={product.name} />
                {/* <img src={product.name==="STIHL chainsaw"?"../componets/images/STIHL MS250 2.png":"../componets/images/STIHL MS250 2.png"} alt={product.name} /> */}
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  In Stock
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
              </p>
              <p>
                <button className='button_cart' type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
            </>
        )}
        
    </div>
  );
}
