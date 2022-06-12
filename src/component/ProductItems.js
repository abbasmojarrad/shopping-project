import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../context/CartContextProvider";
//helper functions
import { hasProduct, ProductNumber } from "../helper/functions";
const ProductItems = ({ data }) => {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div style={{ width: "350px", height: "400px", border: "1px solid black" }}>
      <img style={{ width: "50%" }} src={data.image} alt="productPicture" />
      <h1>{data.title}</h1>
      <span>{data.price}</span>
      <span>{data.number}</span>
      <div>
        <Link to={`/product/${data.id}`}>detail</Link>
        <div>
          {hasProduct(state.cartList, data.id) ? (
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch({ type: "ADD", payload: data })}>
              add to cart
            </button>
          )}
          <span>{ProductNumber(state.cartList, data.id)}</span>
          {ProductNumber(state.cartList, data.id) === 1 && (
            <button onClick={() => dispatch({ type: "REMOVE", payload: data })}>
              remove
            </button>
          )}
          
          {ProductNumber(state.cartList, data.id) > 1 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: data })}
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
