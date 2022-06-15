import React, { useContext, useState } from "react";
//css
import styles from "../component/css/product.module.css";
//component
import ProductItems from "../component/ProductItems";
import loader from "../assets/loader.gif";
//context
import { ProductContext } from "../context/ProductContextProvider";
const Product = () => {
  const products = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const changeHandler = (e) => setSearch(e.target.value);
  const filterProduct = products.filter((product) =>
    product.title.toLowerCase().startsWith(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        name="product"
        value={search}
        onChange={changeHandler}
      />
      <div className={styles.container}>
        {!products.length ? (
          <div>
            <img style={{ width: "120%" }} src={loader} alt="" />
          </div>
        ) : (
          filterProduct.map((product) => {
            return <ProductItems key={product.id} data={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;
