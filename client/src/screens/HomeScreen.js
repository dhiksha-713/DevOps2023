import "./HomeScreen.css";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";//2 hooks

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  
  const { productName } = useParams();//vExtract productName from URL
  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);//to list products

  // Filter products based on the category (productName)
  const filteredProducts = products.filter(
    (product) => product.category === productName
  );

  return (
    <div className="homescreen divbody">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : filteredProducts.length === 0 ? ( // Check if no products match the category
        <h2>No products found for this category.</h2>
      ) : (
          filteredProducts.map((product) => 
            <Product 
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            productId={product._id}
            productCategory={product.category} />
          )
        )}
      </div>
    </div>
  );
};

export default HomeScreen;