import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//context
import { ProductContext } from "../context/ProductContextProvider";
import { CartContext } from "../context/CartContextProvider";
//helper function
import { hasProduct, ProductNumber } from "../helper/functions";
//css
import styles from "./css/productdetails.module.css";
import { HiTrash } from "react-icons/hi";
//component
import loader from "../assets/loader.gif";

const ProductDetails = (props) => {
  const products = useContext(ProductContext);
  const [state, dispatch] = useContext(CartContext);
  let history = useHistory();
  const id = +props.match.params.id;
  let product = products[id - 1];
  useEffect(() => {
    if (products.length) {
      !products.find((item) => item.id === id) && history.push("/product");
    }
  });
  return (
    <>
      <Link to="/product">back to shop</Link>
      <div className={styles.container}>
        {!products.length ? (
          <div>
            <img style={{ width: "120%" }} src={loader} alt="" />
          </div>
        ) : (
          <div className={styles.product__container}>
            <div className={styles.image__container}>
              <img src={product?.image} alt="" />
            </div>
            <div className={styles.details}>
              <h3 className={styles.title}>{product?.title}</h3>
              <h3 className={styles.category}>{product?.category}</h3>
              <p className={styles.description}>{product?.description}</p>
              <p className={styles.price}>{product?.price}$</p>
              <div className={styles.buttons}>
                <div>
                  {hasProduct(state.cartList, product?.id) ? (
                    <button
                      className={styles.increase__button}
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: product })
                      }
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className={styles.add__button}
                      onClick={() =>
                        dispatch({ type: "ADD", payload: product })
                      }
                    >
                      add to cart
                    </button>
                  )}
                  <span className={styles.product__number}>
                    {ProductNumber(state.cartList, product?.id)}
                  </span>
                  {ProductNumber(state.cartList, product?.id) === 1 && (
                    <button
                      className={styles.remove}
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: product })
                      }
                    >
                      <HiTrash />
                    </button>
                  )}
                  {ProductNumber(state.cartList, product?.id) > 1 && (
                    <button
                      className={styles.decrease__button}
                      onClick={() =>
                        dispatch({ type: "DECREASE", payload: product })
                      }
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
