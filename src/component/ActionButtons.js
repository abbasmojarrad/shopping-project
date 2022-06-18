import React from "react";
import { hasProduct, ProductNumber } from "../helper/functions";
import { HiTrash } from "react-icons/hi";

const ActionButtons = ({ classlist, dispatch, product, state }) => {
  return (
    <>
      {hasProduct(state.cartList, product?.id) ? (
        <button
          className={classlist.increase__button}
          onClick={() => dispatch({ type: "INCREASE", payload: product })}
        >
          +
        </button>
      ) : (
        <button
          className={classlist.add__button}
          onClick={() => dispatch({ type: "ADD", payload: product })}
        >
          Add to Cart
        </button>
      )}
      <span className={classlist.product__number}>
        {ProductNumber(state.cartList, product?.id)}
      </span>
      {ProductNumber(state.cartList, product?.id) === 1 && (
        <button
          className={classlist.remove}
          onClick={() => dispatch({ type: "REMOVE", payload: product })}
        >
          <HiTrash />
        </button>
      )}
      {ProductNumber(state.cartList, product?.id) > 1 && (
        <button
          className={classlist.decrease__button}
          onClick={() => dispatch({ type: "DECREASE", payload: product })}
        >
          -
        </button>
      )}
    </>
  );
};

export default ActionButtons;
