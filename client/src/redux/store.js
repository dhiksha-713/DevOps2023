import { combineReducers, applyMiddleware } from "redux";
import { createStore } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// // Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});//object passed here

const middleware = [thunk];//helps us make asychronous requests in our actios. 

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];// this part is for making sure, when we refesh, still the cart should be preserved.


const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))//u can add(thunk)
  //above line enables us to open redux in inspect
);

export default store;