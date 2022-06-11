import React, { useContext } from "react";
//component
import ProductItems from "../component/ProductItems";
//context
import { ProductContext } from "../context/ProductContextProvider";
const Product = () => {
  const products = useContext(ProductContext);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "100px auto 0",
        minHeight:"100vh"
      }}
    >
      {products.map((product) => {
        return <ProductItems key={product.id} data={product} />;
      })}
    </div>
  );
};

export default Product;
