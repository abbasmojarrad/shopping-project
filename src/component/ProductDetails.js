import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//context
import { ProductContext } from "../context/ProductContextProvider";
import { CartContext } from "../context/CartContextProvider";
//css
import styles from "./css/productdetails.module.css";
//component
import loader from "../assets/loader.gif";
import ActionButtons from "./ActionButtons";

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
      <Link className={styles.back} to="/product">
        back to shop
      </Link>
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
                  <ActionButtons
                    classlist={styles}
                    dispatch={dispatch}
                    product={product}
                    state={state}
                  />
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
