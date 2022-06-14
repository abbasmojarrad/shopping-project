import React, { useContext } from "react";
//css
import styles from "../component/css/product.module.css";
//component
import ProductItems from "../component/ProductItems";
import loader from '../assets/loader.gif'
//context
import { ProductContext } from "../context/ProductContextProvider";
const Product = () => {
  const products = useContext(ProductContext);
  return (
    <div className={styles.container}>
      {!products.length ? (
        <div><img style={{width:"120%"}} src={loader} alt="" /></div>
      ) : (
        products.map((product) => {
          return <ProductItems key={product.id} data={product} />;
        })
      )}
    </div>
  );
};

export default Product;
