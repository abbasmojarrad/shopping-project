import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../context/CartContextProvider";
//helper functions
import { hasProduct, ProductNumber } from "../helper/functions";
//css
import styles from "./css/productitems.module.css";
import { HiTrash } from "react-icons/hi";

const ProductItems = ({ data }) => {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <Link className={styles.product__image__link} to={`/product/${data.id}`}>
        <img
          className={styles.product__image}
          src={data.image}
          alt="productPicture"
        />
      </Link>
      <div className={styles.head}>
        <h3>{data.title.split(" ")[0] + data.title.split(" ")[1]}</h3>
        <span>{data.price}$</span>
      </div>
      <div className={styles.down}>
        <Link className={styles.detail} to={`/product/${data.id}`}>
          Detail
        </Link>
        <div className={styles.buttons}>
          {hasProduct(state.cartList, data.id) ? (
            <button
              className={styles.increase__button}
              onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
              +
            </button>
          ) : (
            <button
              className={styles.add__button}
              onClick={() => dispatch({ type: "ADD", payload: data })}
            >
              Add to Cart
            </button>
          )}
          <span className={styles.product__number}>
            {ProductNumber(state.cartList, data.id)}
          </span>
          {ProductNumber(state.cartList, data.id) === 1 && (
            <button
              className={styles.remove}
              onClick={() => dispatch({ type: "REMOVE", payload: data })}
            >
              <HiTrash />
            </button>
          )}

          {ProductNumber(state.cartList, data.id) > 1 && (
            <button
              className={styles.decrease__button}
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
