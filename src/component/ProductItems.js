import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../context/CartContextProvider";
//css
import styles from "./css/productitems.module.css";
//component
import ActionButtons from "./ActionButtons";

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
          <ActionButtons
            classlist={styles}
            dispatch={dispatch}
            product={data}
            state={state}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
