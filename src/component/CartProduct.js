import React from "react";
import { ProductNumber } from "../helper/functions";

const CartProduct = ({ data: product, dispatch, state }) => {
  return (
    <>
      <div>
        <img style={{ width: "200px" }} src={product?.image} alt="" />
        <h3>{product?.title}</h3>
        <p>{product?.price}$</p>
        <span>{ProductNumber(state.cartList, product.id)}</span>
        <div>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: product })}
          >
            +
          </button>
          {ProductNumber(state.cartList, product.id) === 1 ? (
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: product })}
            >
              remove
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -
            </button>
          )}
        </div>
      </div>
      
    </>
  );
};

export default CartProduct;
