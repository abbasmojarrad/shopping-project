import React, { useContext, useState, useEffect, memo } from "react";
import { GiLevelTwoAdvanced } from "react-icons/gi";
//component
import ProductItems from "../component/ProductItems";
//context
import { ProductContext } from "../context/ProductContextProvider";
const Product = () => {
  const products = useContext(ProductContext);
  const [loading, isLoading] = useState();

  useEffect(() => {
      isLoading(products.length === 0 ? true : false);
  }, [products]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "100px auto 0",
        minHeight: "100vh",
      }}
    >
      {loading ? (
        <div>loading</div>
      ) : (
        products.map((product) => {
          return <ProductItems key={product.id} data={product} />;
        })
      )}
    </div>
  );
};

export default memo(Product);
