import React from "react";
import { ProductNumber } from "../helper/functions";
//css
import styles from "./css/cartproduct.module.css";
import { HiTrash } from "react-icons/hi";

const CartProduct = ({ data: product, dispatch, state }) => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.image}>
          <img  src={product?.image} alt="" />
        </div>
        <div className={styles.detail}>
          <h3>{product?.title.split(" ")[0] + product?.title.split(" ")[1]}</h3>
          <p>{product?.price}$</p>
        </div>
        <span className={styles.number}>{ProductNumber(state.cartList, product.id)}</span>
        <div className={styles.buttons}>
          <button
            className={styles.increase__button}
            onClick={() => dispatch({ type: "INCREASE", payload: product })}
          >
            +
          </button>
          {ProductNumber(state.cartList, product.id) === 1 ? (
            <button
              className={styles.remove}
              onClick={() => dispatch({ type: "REMOVE", payload: product })}
            >
              <HiTrash />
            </button>
          ) : (
            <button
              className={styles.decrease__button}
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
